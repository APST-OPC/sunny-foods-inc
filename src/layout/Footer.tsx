import Logo from '~/assets/sunnyfoods-logo.png';

const Footer = () => {
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
        <div className="text-neutral-900">
          <ul className="flex gap-5 space-y-2">
            <li>
              <a href="#" className="transition-colors hover:text-[#b81c21]">
                About
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-[#b81c21]">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-[#b81c21]">
                Press
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-[#b81c21]">
                Contact
              </a>
            </li>
          </ul>
          <div className="my-1 border-t-2" />
          <p>Email: sales@sunnyfoods.com.ph</p>
          <p>Contact No.: 0939-237-9999 / 0918-739-9999</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mx-auto mt-10 w-[90%] border-t border-neutral-900/40 pt-6 text-center text-sm text-neutral-900">
        © {new Date().getFullYear()} Galaxy Studio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
