import { useEffect } from 'react';
import AOS from 'aos';

import { Outlet } from 'react-router-dom';
import { FaAngleUp } from 'react-icons/fa';

import { AnimatePresence, motion } from 'motion/react';

import { useLayoutContext } from '~/hooks/useLayoutContext';

import Navbar from './Navbar';
import Footer from './Footer';

import { smoothScrollToTop } from './utils';

import 'aos/dist/aos.css';

const Layout = () => {
  const { isSidebarOpen, isShowFab, setShowFab } = useLayoutContext();

  useEffect(() => {
    AOS.init({ duration: 2000 });

    const handleScroll = () => {
      setShowFab(window.scrollY > window.innerHeight - 500);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      AOS.refreshHard();
    };
  }, []);

  return (
    <main className="h-full bg-(--light-brown)/10">
      <header className="sticky top-0 left-0 z-50 w-full bg-[#f5ede4] shadow-sm">
        <Navbar />
      </header>

      <Outlet />

      <AnimatePresence>
        {isShowFab && !isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fab bottom-8"
          >
            <button
              className="btn btn-sm btn-circle md:btn-lg btn-success"
              onClick={smoothScrollToTop}
            >
              <FaAngleUp />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
};

export default Layout;
