import { NavLink } from 'react-router-dom';
import Logo from '~/assets/sunnyfoods-logo.png';

const Footer = () => {
  const getYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f6ede3] px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 md:flex-row">
        {/* Brand Section */}
        <div className="flex items-center gap-4 text-neutral-900">
          <img src={Logo} className="h-20 w-20" />
          <div>
            <p className="text-xl leading-6 font-bold">
              <span className="text-success mr-1">Sunny</span>
              <span className="text-error">Foods Inc.</span>
            </p>
            <p>Bldg. 2 Blk. 1 Governors Park Drive</p>
            <p>Southwoods Industrial Park Mabuhay,</p>
            <p>Carmona, Cavite (4116)</p>
          </div>
        </div>

        {/* Links Section */}
        <div className="w-full text-neutral-900 md:w-auto">
          <nav className="flex flex-row justify-center font-semibold">
            <NavLink to="/about" className="hover:text-error">
              About Us
            </NavLink>
            <div className="divider divider-horizontal before:bg-neutral-900/40 after:bg-neutral-900/40" />
            <NavLink to="/products" className="hover:text-error">
              Products
            </NavLink>
            <div className="divider divider-horizontal before:bg-neutral-900/40 after:bg-neutral-900/40" />
            <NavLink to="/contact" className="hover:text-error">
              Contact
            </NavLink>
          </nav>

          <div className="divider divider-vertical before:bg-neutral-900/40 after:bg-neutral-900/40" />
          <p>Email: sales@sunnyfoods.com.ph</p>
          <p>
            Contact No.: <span className="text-wrap">0939-237-9999 / 0918-739-9999</span>
          </p>
        </div>
      </div>

      {/* Bottom Bar */}

      <div className="mx-auto mt-10 border-neutral-900/40 pt-6 text-center text-sm font-semibold text-neutral-900">
        <div className="divider divider-vertical px-0 before:bg-neutral-900/40 after:bg-neutral-900/40 md:px-20" />
        © {getYear} Sunny Foods Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
