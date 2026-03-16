import type { IContactButton } from '~/pages/contact/type';

import { AiOutlineFacebook, AiOutlineLinkedin } from 'react-icons/ai';
import { PiTiktokLogo } from 'react-icons/pi';
import { FaInstagram, FaViber } from 'react-icons/fa';

export const footerContactUs: IContactButton[] = [
  {
    contactCTA: 'Chat with us on Viber',
    contactIcon: ({ size, color }) => <FaViber color={color} size={size} />,
    openWindow: () => window.open('viber://chat?number=%2B9850963333', '_blank'),
  },
  {
    contactCTA: 'Visit our Facebook page',
    contactIcon: ({ size, color }) => <AiOutlineFacebook color={color} size={size} />,
    openWindow: () => window.open('https://www.facebook.com/sunnyfoodsinc/', '_blank'),
  },
  {
    contactCTA: 'Visit our Instagram',
    contactIcon: ({ size, color }) => <FaInstagram color={color} size={size} />,
    openWindow: () => window.open('https://www.instagram.com/sunnyfoods.com.ph', '_blank'),
  },
  {
    contactCTA: 'Follow us on TikTok',
    contactIcon: ({ size, color }) => <PiTiktokLogo color={color} size={size} />,
    openWindow: () => window.open('https://www.tiktok.com/@sunnyfoodsinc', '_blank'),
  },
  {
    contactCTA: 'Visit our LinkedIn page',
    contactIcon: ({ size, color }) => <AiOutlineLinkedin color={color} size={size} />,
    openWindow: () => window.open('https://www.linkedin.com/company/sunny-foods-inc', '_blank'),
  },
];

export const links = [
  { to: '/', label: 'Home' },
  { to: '/who-we-are', label: 'Who We Are' },
  { to: '/products', label: 'Our Products' },
];

export const instantScrollToTop = () => window.scrollTo(0, 0);

export const smoothScrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });