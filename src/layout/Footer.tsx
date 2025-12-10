import type { ReactElement, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '~/assets/sunnyfoods-logo.png';
import Contact from '~/assets/phone-call.png';
import Mail from '~/assets/gmail.png';
import { footerContactUs, instantScrollToTop } from './utils';

const Footer = (): ReactElement => {
  const getYear = new Date().getFullYear();

  const renderBrand = (): ReactNode => {
    return (
      <div className="flex gap-4 px-2 text-neutral-900 md:w-1/3 lg:w-1/4">
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
      <div className="flex flex-col items-center gap-4 text-neutral-900 md:w-1/3 lg:w-1/4">
        <p className="text-lg leading-6 font-bold">Follow us</p>
        <div className="flex gap-5">
          {footerContactUs.map(({ contactCTA, contactIcon, openWindow }, ids) => (
            <div
              key={ids}
              className="tooltip before:bg-gray-500 before:text-white after:bg-gray-500"
              data-tip={contactCTA}
            >
              <button className="hover:cursor-pointer active:opacity-80" onClick={openWindow}>
                {contactIcon}
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderLinks = (): ReactNode => {
    return (
      <div className="hidden w-1/4 flex-col items-center justify-start gap-2 font-bold text-neutral-900 lg:flex">
        <NavLink to="/about" className="hover:text-error" onClick={instantScrollToTop}>
          About Us
        </NavLink>
        <NavLink to="/products" className="hover:text-error" onClick={instantScrollToTop}>
          Products
        </NavLink>
        <NavLink to="/contact" className="hover:text-error" onClick={instantScrollToTop}>
          Contact
        </NavLink>
      </div>
    );
  };

  const renderInfo = (): ReactNode => {
    return (
      <div className="space-y-2 md:w-1/3 lg:w-1/4">
        <h1 className="text-center text-lg leading-6 font-bold md:text-start">
          Power Your Business
        </h1>
        <p className="flex justify-center gap-1 font-semibold text-wrap md:justify-start">
          <span>
            <img src={Mail} className="h-5 w-5" />
          </span>
          :sales@sunnyfoods.com.ph
        </p>
        <p className="flex justify-center gap-1 font-semibold text-wrap md:justify-start">
          <span>
            <img src={Contact} className="h-5 w-5" />
          </span>
          :0939-237-9999 / 0918-739-9999
        </p>
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
      <div className="container mx-auto flex flex-col justify-between gap-10 pt-12 pb-6 md:flex-row md:gap-0 lg:min-w-1/4 lg:px-6">
        {renderBrand()}
        {renderLinks()}
        {renderSocial()}
        {renderInfo()}
      </div>

      {renderBottomBar()}
    </footer>
  );
};

export default Footer;
