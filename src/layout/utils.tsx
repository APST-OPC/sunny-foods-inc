import { AiOutlineFacebook } from 'react-icons/ai';
import { PiTiktokLogo } from 'react-icons/pi';
import { FaInstagram, FaViber } from 'react-icons/fa';

export const footerContactUs = [
  {
    contactCTA: 'Chat with us on Viber',
    contactIcon: <FaViber color="#c8a175" size={50} />,
    openWindow: () => window.open('viber://chat?number=%2B9392379999', '_blank'),
  },
  {
    contactCTA: 'Visit our Facebook page',
    contactIcon: <AiOutlineFacebook color="#c8a175" size={50} />,
    openWindow: () => window.open('https://www.facebook.com/sunnyfoodsinc/', '_blank'),
  },
  {
    contactCTA: 'Visit our Instagram',
    contactIcon: <FaInstagram color="#c8a175" size={50} />,
    openWindow: () => window.open('https://www.instagram.com/sunnyfoods.com.ph', '_blank'),
  },
  {
    contactCTA: 'Follow us on TikTok',
    contactIcon: <PiTiktokLogo color="#c8a175" size={50} />,
    contactFn: () => window.open('https://www.tiktok.com/@sunnyfoodsinc', '_blank'),
  }
];
export const links = [
  { to: '/', label: 'Home' },
  { to: '/who-we-are', label: 'Who We Are' },
  { to: '/products', label: 'Our Products' },
];

export const instantScrollToTop = () => window.scrollTo(0, 0);

export const smoothScrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
