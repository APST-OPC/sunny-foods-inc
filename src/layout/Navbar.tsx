import { Link, NavLink, useNavigate } from 'react-router-dom';

import SunnyFoodsLogo from '~/assets/logos/company-logo-textless.png';

import { cn } from '~/libs/cn';

import MobileNavbar from './MobileNavbar';
import { aboutDropList, instantScrollToTop, links } from './utils';
import { FaChevronDown } from 'react-icons/fa';

interface IDropdownNav {
  label: string;
  dropList: {
    to: string;
    label: string;
  }[];
}

const defaultNavStyle = (isActive: boolean) =>
  cn(
    'hover:text-error relative px-2 py-1 text-black transition-all duration-300',
    'after:bg-error after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 hover:after:w-full',
    isActive && 'text-error after:w-full'
  );

const DropdownNav = (props: IDropdownNav) => {
  const { label, dropList } = props;

  return (
    <div className="dropdown">
      <button className="hover:text-error flex cursor-pointer items-center gap-2 transition-all duration-300">
        {label} <FaChevronDown className="size-4" />
      </button>
      <div className="dropdown-content menu mt-2 w-60 space-y-1 rounded-lg bg-[#FFF9F3] shadow-lg">
        {dropList.map((item, index) => (
          <NavLink
            to={item.to}
            key={index}
            onClick={instantScrollToTop}
            className={({ isActive }) =>
              cn(
                'p-2 text-base font-normal hover:bg-[#F5EDE4]/70',
                isActive && 'text-error bg-[#F5EDE4] font-semibold'
              )
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

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
          tabIndex={0}
          onClick={onClickLogo}
          className="flex flex-row items-center gap-2 hover:cursor-pointer"
        >
          <img
            src={SunnyFoodsLogo}
            alt="Sunny Foods"
            className="pointer-events-none block h-8 lg:h-12"
          />

          <span>
            <p className="text-success font-serif text-sm leading-6 font-bold uppercase lg:text-xl">
              Sunny Foods Inc.
            </p>
            <p className="text-[10px] font-medium text-(--red) lg:text-xs">
              Delicious • Healthy • Affordable
            </p>
          </span>
        </div>
      </div>

      {/* DESKTOP LINKS */}
      <div className="navbar-end text-md hidden gap-5 font-semibold md:flex">
        {links.map((link, ids) => {
          return ids === 1 ? (
            <DropdownNav key={ids} label={link.label} dropList={aboutDropList} />
          ) : (
            <NavLink
              key={ids}
              to={link.to}
              onClick={instantScrollToTop}
              className={({ isActive }) => cn(defaultNavStyle(isActive))}
            >
              {link.label}
            </NavLink>
          );
        })}

        <Link to="/talk-to-us">
          <button
            onClick={instantScrollToTop}
            className="btn border border-(--warm-red) bg-(--warm-red) text-white"
          >
            Talk To Us
          </button>
        </Link>
      </div>

      {/* MOBILE MENU ICON */}
      <MobileNavbar links={links} />
    </nav>
  );
};

export default Navbar;
