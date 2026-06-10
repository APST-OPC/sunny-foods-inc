import type { IContactButton } from "./type";

import { AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import { FaViber } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { MdOutlineLocationOn, MdOutlineMail } from "react-icons/md";
import { PiTiktokLogo } from "react-icons/pi";
import { TiPhoneOutline } from "react-icons/ti";

export const contactBtns: IContactButton[] = [
  {
    contactIcon: ({ size, color }) => <FaViber size={size} color={color} />,
    contactCTA: "Chat with us on Viber",
    openWindow: () => window.open("viber://chat?number=639187399999", "_blank"),
  },
  {
    contactIcon: ({ size, color }) => (
      <AiOutlineFacebook size={size} color={color} />
    ),
    contactCTA: "Visit our Facebook page",
    openWindow: () =>
      window.open("https://www.facebook.com/sunnyfoodsinc/", "_blank"),
  },
  {
    contactIcon: ({ size, color }) => <FaInstagram size={size} color={color} />,
    contactCTA: "Visit our Instagram",
    openWindow: () =>
      window.open("https://www.instagram.com/sunnyfoods.com.ph", "_blank"),
  },
  {
    contactIcon: ({ size, color }) => (
      <PiTiktokLogo size={size} color={color} />
    ),
    contactCTA: "Follow us on TikTok",
    openWindow: () =>
      window.open("https://www.tiktok.com/@sunnyfoodsinc", "_blank"),
  },
  {
    contactIcon: ({ size, color }) => (
      <AiOutlineLinkedin size={size} color={color} />
    ),
    contactCTA: "Visit our LinkedIn",
    openWindow: () =>
      window.open("https://www.linkedin.com/company/sunny-foods-inc", "_blank"),
  },
];

export const contactInformation: IContactButton[] = [
  {
    contactIcon: ({ size }) => <MdOutlineLocationOn size={size} />,
    contactCTA:
      "Bldg. 2 Blk. 1 Governors Park Drive, Southwoods Industrial Park, Mabuhay, Carmona, Cavite (4116)",
  },
  {
    contactIcon: ({ size }) => <TiPhoneOutline size={size} />,
    contactCTA: "Company: +63 918-739-9999",
  },
  {
    contactIcon: ({ size }) => <TiPhoneOutline size={size} />,
    contactCTA: "Sales: +63 985-096-3333",
  },
  {
    contactIcon: ({ size }) => <MdOutlineMail size={size} />,
    contactCTA: "sales@sunnyfoods.com.ph",
  },
];
