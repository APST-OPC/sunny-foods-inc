import type { Variants } from 'motion/react';

import { Fragment, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';

import { FiMenu, FiX } from 'react-icons/fi';

import { cn } from '~/libs/cn';

interface Links {
  to: string;
  label: string;
}
interface MobileNavbarProps {
  links: Links[];
}

const MobileNavbar = ({ links }: MobileNavbarProps) => {
  const [open, setOpen] = useState(false);

  const menuVariants: Variants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: '100dvh',
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.5,
      },
      backgroundColor: '#FFFFFF',
    },
    exit: {
      height: 0,
      opacity: 99,
      transition: { when: 'afterChildren', type: 'spring', stiffness: 200, damping: 30 },
    },
  };

  // Variants for each menu item
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
  };
  const motionlistMenuVariant = {
    variant: itemVariants,
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
  return (
    <Fragment>
      {/* MOBILE MENU ICON */}
      <div className="nav-end flex md:hidden" onClick={() => setOpen(!open)}>
        <div className="nav-end flex md:hidden" onClick={() => setOpen(!open)}>
          <AnimatePresence mode="wait">{open ? closeIcon() : menuIcon()}</AnimatePresence>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN (FRAMER MOTION) */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute top-full left-0 w-full overflow-hidden bg-[url('~/assets/beef-bg-mobile.png')] bg-cover bg-bottom-left backdrop-blur-lg md:hidden"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <motion.ul className="menu w-full space-y-2 p-4">
              {links.map((link, ids) => (
                <motion.li key={ids} variants={motionlistMenuVariant.variant}>
                  <NavLink
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        'bg-transparent text-4xl font-bold tracking-tight',
                        isActive ? 'text-error' : 'text-black'
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </Fragment>
  );
};

export default MobileNavbar;
