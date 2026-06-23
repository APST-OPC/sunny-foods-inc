import type { ReactElement, ReactNode } from "react";

import { NavLink } from "react-router-dom";

import Mail from "~/assets/icons/gmail.png";
import Contact from "~/assets/icons/phone-call.png";
import Logo from "~/assets/logos/sunny-foods-logo.png";

import { footerContactUs, instantScrollToTop } from "./utils";

const Footer = (): ReactElement => {
  const getYear = new Date().getFullYear();

  const renderBrand = (): ReactNode => {
    return (
      <div className="flex flex-col justify-center gap-4 text-neutral-900 md:w-1/3 md:justify-start lg:w-auto lg:flex-row">
        <div className="space-y-5">
          <div className="flex flex-col items-center gap-2 xl:flex-row">
            <img
              src={Logo}
              alt="Sunny Foods"
              className="pointer-events-none block h-14"
            />

            <span className="text-center xl:text-start">
              <p className="text-success text-md font-serif leading-6 font-bold uppercase lg:text-xl">
                Sunny Foods Inc.
              </p>
              <p className="text-[12px] font-medium text-(--red) lg:text-xs">
                Delicious • Healthy • Affordable
              </p>
            </span>
          </div>

          <div className="text-center lg:text-start">
            <p>Bldg. 2 Blk. 1 Governors Park Drive</p>
            <p>Southwoods Industrial Park Mabuhay,</p>
            <p>Carmona, Cavite (4116)</p>
          </div>
        </div>
      </div>
    );
  };

  const renderSocial = (): ReactNode => {
    return (
      <div className="space-y-4 text-center text-neutral-900">
        <p className="text-lg font-bold">Follow us</p>

        <div className="flex flex-wrap justify-center space-x-0.5">
          {footerContactUs.map(
            ({ contactCTA, contactIcon, openWindow }, ids) => (
              <div
                key={ids}
                className="md:tooltip before:bg-gray-500 before:text-white after:bg-gray-500"
                data-tip={contactCTA}>
                <button
                  className="cursor-pointer active:opacity-80"
                  onClick={openWindow}>
                  {contactIcon({ size: 40, color: "#c8a175" })}
                </button>
              </div>
            ),
          )}
        </div>
      </div>
    );
  };

  const renderLinks = (): ReactNode => {
    return (
      <div className="hidden flex-col items-center justify-start gap-2 font-bold text-neutral-900 lg:flex">
        <NavLink
          to="/who-we-are"
          className="hover:text-error whitespace-nowrap"
          onClick={instantScrollToTop}>
          Who We Are
        </NavLink>
        <NavLink
          to="/products"
          className="hover:text-error"
          onClick={instantScrollToTop}>
          Products
        </NavLink>
        <NavLink
          to="/talk-to-us"
          className="hover:text-error whitespace-nowrap"
          onClick={instantScrollToTop}>
          Talk To Us
        </NavLink>
        <NavLink
          to="/legal"
          className="hover:text-error whitespace-nowrap"
          onClick={instantScrollToTop}>
          Licenses and Safety
        </NavLink>
      </div>
    );
  };

  const renderInfo = (): ReactNode => {
    const linkStyle =
      "link link-hover flex justify-center gap-1 md:justify-start";
    const renderViberLink = (phoneNumber: string | undefined): void => {
      window.open(`viber://chat?number=${phoneNumber}`, "_blank");
    };

    return (
      <div className="flex flex-col space-y-2">
        <h1 className="text-center text-lg leading-6 font-bold md:text-start">
          Power Your Business
        </h1>
        <button
          className={linkStyle}
          onClick={() =>
            window.open(`mailto:sales@sunnyfoods.com.ph`, "_blank")
          }>
          <img src={Mail} alt="mail" className="h-5 w-5" />
          <p className="lg:text-md font-semibold whitespace-nowrap md:justify-start md:text-sm">
            sales@sunnyfoods.com.ph
          </p>
        </button>
        <button
          className={linkStyle}
          onClick={() => renderViberLink("639187399999")}>
          <img src={Contact} alt="contact" className="h-5 w-5" />
          <p className="lg:text-md font-semibold md:justify-start md:text-sm">
            Company +63 918-739-9999
          </p>
        </button>
        <button
          className={linkStyle}
          onClick={() => renderViberLink("639850963333")}>
          <img src={Contact} alt="contact" className="h-5 w-5" />
          <p className="lg:text-md font-semibold md:justify-start md:text-sm">
            Sales +63 985-096-3333
          </p>
        </button>
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
      <div className="container mx-auto flex flex-col justify-between gap-6 px-2 pt-12 pb-6 md:flex-row md:gap-4 lg:min-w-1/4">
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
