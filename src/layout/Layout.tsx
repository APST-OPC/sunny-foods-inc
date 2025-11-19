import { Outlet } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';
import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Layout = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // optional: how long the animation lasts (in ms)
      //once: true,  optional: whether animation should happen only once - while scrolling down
    });

    return () => {
      AOS.refresh(); // Refresh AOS on unmount
    };
  }, []);

  return (
    <main className="h-full bg-(--light-brown)/10">
      <header className={`sticky top-0 left-0 z-50 w-full bg-[#f5ede4]`}>
        <Navbar />
      </header>

      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
