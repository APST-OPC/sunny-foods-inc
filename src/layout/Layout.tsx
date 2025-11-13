import { Outlet } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <main className="h-full bg-(--light-brown)/20">
      <header className={`sticky top-0 left-0 z-10 w-full bg-[#f5ede4]`}>
        <Navbar />
      </header>

      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
