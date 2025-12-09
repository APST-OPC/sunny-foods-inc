import type { IContactUs } from "./type";

import { FaViber } from 'react-icons/fa';
import { AiOutlineFacebook } from 'react-icons/ai';
import { FaInstagram } from 'react-icons/fa6';

export const contactBtns: IContactUs[] = [
  {
    contactIcon: <FaViber size={75} color="#7360f2" />,
    contactCTA: 'Chat with us on Viber',
    contactFn: () => window.open('viber://chat?number=%2B9392379999', '_blank'),
  },
  {
    contactIcon: <AiOutlineFacebook size={75} color="#1877f2" />,
    contactCTA: 'Visit our Facebook page',
    contactFn: () => window.open('https://www.facebook.com/SUNNYFOODSINC.2025', '_blank'),
  },
  {
    contactIcon: <FaInstagram size={75} color="#d300c5" />,
    contactCTA: 'Visit our Instagram',
    contactFn: () => window.open('https://www.instagram.com/sunnyfoods.com.ph', '_blank'),
  },
];