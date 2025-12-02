import { useEffect, useState } from 'react';
import AOS from 'aos';

import { Outlet } from 'react-router-dom';
import { FaAngleUp } from 'react-icons/fa';

import Navbar from './Navbar';
import Footer from './Footer';

import 'aos/dist/aos.css';
import { cn } from '~/libs/cn';

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
      <header className='sticky top-0 left-0 z-50 w-full bg-[#f5ede4] shadow-sm'>
        <Navbar />
      </header>

      <Outlet />
      <Footer />

      <div
        className={cn(
          'fab transition-all',
          showFab ? 'opacity-100 duration-300' : 'opacity-0 duration-300'
        )}
      >
        <button
          className={cn('btn btn-xl btn-square btn-success', !showFab && 'pointer-events-none')}
          onClick={() => scrollToTop()}
        >
          <FaAngleUp />
        </button>
      </div>
    </main>
  );
};

export default Layout;
