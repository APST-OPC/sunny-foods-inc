import { NavLink } from 'react-router-dom';

import { FaFacebookF, FaSquareInstagram, FaTiktok } from 'react-icons/fa6';

const Footer = () => {
  const showYear = new Date().getFullYear();

  return (
    <footer className="footer footer-horizontal footer-center rounded bg-(--light-brown)/10 p-16">
      <nav className="grid grid-flow-col gap-4">
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <nav>
        <div className="grid grid-flow-col content-center gap-4">
          <button className="btn btn-ghost btn-circle btn-xl">
            <FaFacebookF className="h-8 w-8" />
          </button>

          <button className="btn btn-ghost btn-circle btn-xl">
            <FaSquareInstagram className="h-8 w-8" />
          </button>

          <button className="btn btn-ghost btn-circle btn-xl">
            <FaTiktok className="h-8 w-8" />
          </button>
        </div>
      </nav>
      <aside>
        <p className="font-semibold">© {showYear} - All right reserved by Sunny Foods Inc.</p>
      </aside>
    </footer>
  );
};

export default Footer;
