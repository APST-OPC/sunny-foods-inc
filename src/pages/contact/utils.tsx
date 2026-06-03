import type { IContactButton } from "./type";

import { AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import { FaViber } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { PiTiktokLogo } from "react-icons/pi";

export const contactBtns: IContactButton[] = [
  {
    contactIcon: ({ size }) => <FaViber size={size} color="#7360f2" />,
    contactCTA: "Chat with us on Viber",
    openWindow: () => window.open("viber://chat?number=639187399999", "_blank"),
  },
  {
    contactIcon: ({ size }) => (
      <AiOutlineFacebook size={size} color="#1877f2" />
    ),
    contactCTA: "Visit our Facebook page",
    openWindow: () =>
      window.open("https://www.facebook.com/sunnyfoodsinc/", "_blank"),
  },
  {
    contactIcon: ({ size }) => <FaInstagram size={size} color="#d300c5" />,
    contactCTA: "Visit our Instagram",
    openWindow: () =>
      window.open("https://www.instagram.com/sunnyfoods.com.ph", "_blank"),
  },
  {
    contactIcon: ({ size }) => <PiTiktokLogo size={size} />,
    contactCTA: "Follow us on TikTok",
    openWindow: () =>
      window.open("https://www.tiktok.com/@sunnyfoodsinc", "_blank"),
  },
  {
    contactIcon: ({ size }) => (
      <AiOutlineLinkedin size={size} color="#1877f2" />
    ),
    contactCTA: "Visit our LinkedIn",
    openWindow: () =>
      window.open("https://www.linkedin.com/company/sunny-foods-inc", "_blank"),
  },
];
