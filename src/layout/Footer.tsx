import type { ReactElement, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '~/assets/sunnyfoods-logo.png';
import Contact from '~/assets/phone-call.png';
import Mail from '~/assets/gmail.png';
import { FaFacebookSquare, FaTwitterSquare, FaYoutubeSquare } from 'react-icons/fa';

const Footer = (): ReactElement => {
  const getYear = new Date().getFullYear();

  const renderBrand = (): ReactNode => {
    return (
      <div className="flex items-center gap-4 text-neutral-900">
        <img src={Logo} className="h-20 w-20 lg:h-28 lg:w-28" />
        <div className="font-semibold">
          <p className="text-xl leading-6 font-black">
            <span className="text-success mr-1">Sunny</span>
            <span className="text-error">Foods Inc.</span>
          </p>
          <p>Bldg. 2 Blk. 1 Governors Park Drive</p>
          <p>Southwoods Industrial Park Mabuhay,</p>
          <p>Carmona, Cavite (4116)</p>
        </div>
      </div>
    );
  };

  const renderSocial = (): ReactNode => {
    return (
      <div className="flex flex-col items-center gap-4 text-neutral-900">
        <p className="leading-6 font-bold">Follow us</p>
        <div className="flex gap-5">
          <button className="hover:cursor-pointer active:opacity-80">
            <FaFacebookSquare color="#c8a175" size={50} />
          </button>
          <button className="hover:cursor-pointer active:opacity-80">
            <FaTwitterSquare color="#c8a175" size={50} />
          </button>
          <button className="hover:cursor-pointer active:opacity-80">
            <FaYoutubeSquare color="#c8a175" size={50} />
          </button>
        </div>
      </div>
    );
  };

  const renderLinks = (): ReactNode => {
    return (
      <div className="w-full text-neutral-900 md:w-auto lg:min-w-1/4">
        <nav className="flex flex-row justify-center gap-8 font-bold">
          <NavLink to="/about" className="hover:text-error">
            About Us
          </NavLink>
          <NavLink to="/products" className="hover:text-error">
            Products
          </NavLink>
          <NavLink to="/contact" className="hover:text-error">
            Contact
          </NavLink>
        </nav>

        <div className="divider divider-vertical m-2 before:bg-neutral-500/40 after:bg-neutral-500/40" />

        <div className="flex items-center gap-1 font-semibold">
          <img src={Mail} className="h-5 w-5" />
          <p>: sales@sunnyfoods.com.ph</p>
        </div>
        <div className="flex items-center gap-1 font-bold">
          <img src={Contact} className="h-5 w-5" />
          <p className="font-semibold text-wrap">: 0939-237-9999 / 0918-739-9999</p>
        </div>
      </div>
    );
  };

  const renderBottomBar = (): ReactNode => {
    return (
      <div className="mx-auto border-neutral-900/40 bg-(--light-brown)/30 py-6 text-center text-sm font-bold text-neutral-900">
        © {getYear} Sunny Foods Inc. All rights reserved.
      </div>
    );
  };

  return (
    <footer className="bg-[#f6ede3]">
      <div className="container mx-auto flex flex-col items-center justify-between gap-10 px-6 pt-12 pb-6 md:flex-row lg:min-w-1/4 lg:items-start">
        {renderBrand()}
        {renderSocial()}
        {renderLinks()}
      </div>
      
      {renderBottomBar()}
    </footer>
  );
};

export default Footer;
