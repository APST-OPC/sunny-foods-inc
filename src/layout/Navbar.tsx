import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import SunnyFoodsLogo from '~/assets/sunnyfoods-logo.png';
import { cn } from '~/libs/cn';

const links = [
  {
    to: '/',
    label: 'Home',
  },
  {
    to: '/products',
    label: 'Products',
  },
  {
    to: '/about',
    label: 'About',
  },
  {
    to: '/contact',
    label: 'Contact',
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav
      className={cn(
        'navbar container mx-auto border-b-2',
        location.pathname !== '/' ? 'border-b-(--light-brown)/30' : 'border-0'
      )}
    >
      <div className="navbar-start flex flex-1">
        <div
          role="button"
          onClick={() => navigate('/')}
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

      <div className="navbar-end text-md hidden flex-row gap-8 font-semibold md:flex">
        {links.map((link, ids) => (
          <NavLink
            key={ids}
            to={link.to}
            className={({ isActive }) =>
              isActive
                ? 'text-error btn btn-outline hover:border-error hover:bg-transparent'
                : 'hover:text-error text-black underline-offset-8 hover:underline'
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
