import { useEffect } from 'react';
import AOS from 'aos';

import { Outlet } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';

import 'aos/dist/aos.css';

const Layout = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });

    return () => {
      AOS.refreshHard();
    };
  }, []);

  return (
    <main className="h-full bg-(--light-brown)/10">
      <header className={`sticky top-0 left-0 z-50 w-full bg-[#f5ede4] shadow-sm`}>
        <Navbar />
      </header>

      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
