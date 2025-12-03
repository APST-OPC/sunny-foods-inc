import { FaFacebookSquare, FaInstagramSquare, FaViber } from 'react-icons/fa';

export const footerContactUs = [
  {
    contactCTA: 'Chat with us on Viber',
    contactIcon: <FaViber color="#c8a175" size={50} />,
  },
  {
    contactCTA: 'Visit our Facebook page',
    contactIcon: <FaFacebookSquare color="#c8a175" size={50} />,
  },
  {
    contactCTA: 'Visit our Instagram',
    contactIcon: <FaInstagramSquare color="#c8a175" size={50} />,
  },
];

export const links = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export const instantScrollToTop = () => {
  window.scrollTo(0, 0);
};

export const smoothScrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
