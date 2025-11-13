import { NavLink, useNavigate } from 'react-router-dom';

import SunnyFoodsLogo from '~/assets/sunnyfoods-logo.png';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar container mx-auto">
      <div className="navbar-start">
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

      <div className="navbar-end flex flex-row gap-3 text-lg font-semibold">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
