import { useEffect, useState } from 'react';
import AOS from 'aos';

import { Outlet } from 'react-router-dom';
import { FaAngleUp } from 'react-icons/fa';

import { AnimatePresence, motion } from 'motion/react';

import Navbar from './Navbar';
import Footer from './Footer';

import 'aos/dist/aos.css';

const Layout = () => {
  const [showFab, setShowFab] = useState(false);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

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
      <Footer />

      <AnimatePresence>
        {showFab && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fab"
          >
            <button className="btn btn-xl btn-square btn-success" onClick={() => scrollToTop()}>
              <FaAngleUp />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Layout;
