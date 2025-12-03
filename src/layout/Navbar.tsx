import { NavLink, useNavigate } from 'react-router-dom';

import SunnyFoodsLogo from '~/assets/sunnyfoods-logo.png';
import { cn } from '~/libs/cn';

import MobileNavbar from './MobileNavbar';
import { instantScrollToTop, links } from './utils';

const Navbar = () => {
  const navigate = useNavigate();

  const onClickLogo = () => {
    navigate('/');
    instantScrollToTop();
  };

  return (
    <nav className={cn('navbar container mx-auto')}>
      {/* LEFT SIDE LOGO */}
      <div className="navbar-start flex flex-1">
        <div
          role="button"
          onClick={onClickLogo}
          className="flex flex-row items-center gap-2 hover:cursor-pointer"
        >
          <img src={SunnyFoodsLogo} alt="Sunny Foods" className="h-16 w-16" />
          <span>
            <p className="text-xl leading-6 font-bold">
              <span className="text-success mr-1">Sunny</span>
              <span className="text-error">Foods Inc.</span>
            </p>
            <p className="text-xs font-medium text-gray-600">Delicious • Healthy • Affordable</p>
          </span>
        </div>
      </div>

      {/* DESKTOP LINKS */}

      <div className="navbar-end text-md hidden gap-8 font-semibold md:flex">
        {links.map((link, ids) => (
          <NavLink
            key={ids}
            to={link.to}
            onClick={() => instantScrollToTop()}
            className={({ isActive }) =>
              cn(
                'hover:text-error relative px-2 py-1 text-black transition-all duration-300',
                'after:bg-error after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 hover:after:w-full',
                isActive && 'text-error after:w-full'
              )
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>

      {/* MOBILE MENU ICON */}
      <MobileNavbar links={links} />
    </nav>
  );
};

export default Navbar;
