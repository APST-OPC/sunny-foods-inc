import type { Variants } from 'motion/react';

import { AnimatePresence, motion } from 'motion/react';
import { Fragment, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { NavLink, useNavigate } from 'react-router-dom';

import { useLayoutContext } from '~/hooks/useLayoutContext';
import { cn } from '~/libs/cn';

import { instantScrollToTop } from './utils';
import { FaChevronUp } from 'react-icons/fa';

interface Links {
  to: string;
  label: string;
  dropList?: Links[];
}
interface MobileNavbarProps {
  links: Links[];
}
interface IDropdownNav {
  label: string;
  dropList: {
    to: string;
    label: string;
  }[];
  closeMenu: () => void;
}

const defaultNavStyle = (isActive: boolean) =>
  cn('bg-transparent text-2xl font-bold tracking-tight', isActive ? 'text-error' : 'text-black');

const menuVariants: Variants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: 'calc(100dvh - 64px)',
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.5,
    },
    backgroundColor: '#FFFFFF',
  },
  exit: {
    height: 0,
    opacity: 1,
    transition: {
      when: 'afterChildren',
      type: 'spring',
      stiffness: 200,
      damping: 30,
    },
  },
};

// Variants for each menu item
const itemVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
};

//dropdown navigation variants
const dropDownVariants: Variants = {
  hidden: { height: 0, width: 0 },
  visible: {
    height: 'auto',
    width: 'auto',
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.5,
    },
    backgroundColor: 'none',
  },
  exit: {
    height: 0,
    opacity: 1,
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

const dropDownItemVariants: Variants = {
  ...itemVariants,
  exit: { ...itemVariants.exit, transition: { duration: 0.25 } },
};

const DropdownNav = (props: IDropdownNav) => {
  const { label, dropList, closeMenu } = props;
  const [isOpen, setIsOpen] = useState(false);
  const activeLink = dropList.some((item) => item.to === location.pathname);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  const renderToggle = () => {
    return (
      <div
        className={cn(
          'flex items-center gap-2 bg-transparent text-2xl font-bold tracking-tight',
          (isOpen || activeLink) && 'text-error'
        )}
        onClick={handleClick}
      >
        {label}
        <FaChevronUp className={cn('size-5 transition-all duration-250', isOpen && 'rotate-180')} />
      </div>
    );
  };

  const renderList = () => {
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div initial="hidden" animate="visible" exit="exit" variants={dropDownVariants}>
            <ul className="menu ml-5 w-full">
              {dropList.map((item, index) => (
                <motion.li key={index} variants={dropDownItemVariants}>
                  <NavLink
                    to={item.to}
                    onClick={closeMenu}
                    className={({ isActive }) => defaultNavStyle(isActive)}
                  >
                    {item.label}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };
  return (
    <motion.div variants={itemVariants} className="ml-3 flex flex-col items-start">
      {renderToggle()}
      {renderList()}
    </motion.div>
  );
};

const MobileNavbar = ({ links }: MobileNavbarProps) => {
  const { isSidebarOpen, setSidebarOpen } = useLayoutContext();

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/talk-to-us');
    closeMenu();
  };

  const toggleMenu = () => setSidebarOpen(!isSidebarOpen);

  const closeMenu = () => {
    instantScrollToTop();
    setSidebarOpen(false);
  };

  const closeIcon = () => {
    return (
      <motion.div
        key="close"
        initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
        transition={{ duration: 0.25 }}
      >
        <FiX className="text-error h-8 w-8" />
      </motion.div>
    );
  };

  const menuIcon = () => {
    return (
      <motion.div
        key="menu"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.25 }}
      >
        <FiMenu className="text-error h-8 w-8" />
      </motion.div>
    );
  };

  const renderMenuList = () => {
    return (
      <motion.ul className="menu w-full p-4">
        {links.map((link, ids) =>
          ids === 1 ? (
            <DropdownNav
              key={ids}
              label={link.label}
              dropList={link.dropList ?? []}
              closeMenu={closeMenu}
            />
          ) : (
            <motion.li key={ids} variants={itemVariants}>
              <NavLink
                to={link.to}
                onClick={closeMenu}
                className={({ isActive }) => defaultNavStyle(isActive)}
              >
                {link.label}
              </NavLink>
            </motion.li>
          )
        )}
      </motion.ul>
    );
  };

  return (
    <Fragment>
      <button className="flex md:hidden" onClick={toggleMenu}>
        <AnimatePresence mode="wait">{isSidebarOpen ? closeIcon() : menuIcon()}</AnimatePresence>
      </button>

      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            className="absolute top-full left-0 flex w-full flex-col overflow-hidden backdrop-blur-lg md:hidden"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            {renderMenuList()}

            <div className="mt-auto space-y-5 bg-amber-100 px-5 py-10">
              <h1 data-aos="fade-right" className="text-2xl leading-snug font-extrabold">
                Power Your Business With a
                <span className="text-(--warm-red)"> Reliable Meat Supplier</span>
              </h1>

              <button
                onClick={handleNavigate}
                className="btn btn-error w-full text-white shadow-md hover:shadow-lg"
              >
                Talk To Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Fragment>
  );
};

export default MobileNavbar;
