import type { Variants } from 'motion/react';

import { Fragment } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';

import { FiMenu, FiX } from 'react-icons/fi';

import { cn } from '~/libs/cn';
import { useLayoutContext } from '~/hooks/useLayoutContext';

import { instantScrollToTop } from './utils';

interface Links {
  to: string;
  label: string;
}
interface MobileNavbarProps {
  links: Links[];
}

const MobileNavbar = ({ links }: MobileNavbarProps) => {
  const { isSidebarOpen, setSidebarOpen } = useLayoutContext();

  const navigate = useNavigate();

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
      transition: { when: 'afterChildren', type: 'spring', stiffness: 200, damping: 30 },
    },
  };

  // Variants for each menu item
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.25 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
  };

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
        <FiX className="h-8 w-8 text-(--warm-red)" />
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
        <FiMenu className="h-8 w-8 text-(--warm-red)" />
      </motion.div>
    );
  };

  const renderMenuList = () => {
    return (
      <motion.ul className="menu w-full p-4">
        {links.map((link, ids) => (
          <motion.li key={ids} variants={itemVariants}>
            <NavLink
              to={link.to}
              onClick={closeMenu}
              className={({ isActive }) =>
                cn(
                  'bg-transparent text-2xl font-bold tracking-tight',
                  isActive ? 'text-(--warm-red) underline underline-offset-4' : 'text-black'
                )
              }
            >
              {link.label}
            </NavLink>
          </motion.li>
        ))}
      </motion.ul>
    );
  };

  return (
    <Fragment>
      <div className="nav-end flex md:hidden" onClick={() => setSidebarOpen(!isSidebarOpen)}>
        <div className="flex md:hidden" onClick={toggleMenu}>
          <AnimatePresence mode="wait">{isSidebarOpen ? closeIcon() : menuIcon()}</AnimatePresence>
        </div>
      </div>

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
                className="btn w-full border-(--warm-red) bg-(--warm-red) font-bold text-white shadow-md hover:shadow-lg"
              >
                Talk to us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Fragment>
  );
};

export default MobileNavbar;
