import type { IContactButton } from "./type";

import { AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import { FaViber } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { HiOutlinePhone } from "react-icons/hi2";
import { LuMail } from "react-icons/lu";
import { PiTiktokLogo } from "react-icons/pi";

export const contactBtns: IContactButton[] = [
  {
    contactIcon: ({ className }) => <FaViber className={className} />,
    contactCTA: "Chat with us on Viber",
    openWindow: () => window.open("viber://chat?number=639187399999", "_blank"),
  },
  {
    contactIcon: ({ className }) => <AiOutlineFacebook className={className} />,
    contactCTA: "Visit our Facebook page",
    openWindow: () =>
      window.open("https://www.facebook.com/sunnyfoodsinc/", "_blank"),
  },
  {
    contactIcon: ({ className }) => <FaInstagram className={className} />,
    contactCTA: "Visit our Instagram",
    openWindow: () =>
      window.open("https://www.instagram.com/sunnyfoods.com.ph", "_blank"),
  },
  {
    contactIcon: ({ className }) => <PiTiktokLogo className={className} />,
    contactCTA: "Follow us on TikTok",
    openWindow: () =>
      window.open("https://www.tiktok.com/@sunnyfoodsinc", "_blank"),
  },
  {
    contactIcon: ({ className }) => <AiOutlineLinkedin className={className} />,
    contactCTA: "Visit our LinkedIn",
    openWindow: () =>
      window.open("https://www.linkedin.com/company/sunny-foods-inc", "_blank"),
  },
];

export const contactInfo: IContactButton[] = [
  {
    contactIcon: ({ className }) => <HiOutlinePhone className={className} />,
    contactCTA: "Company: +63 918-739-9999",
  },
  {
    contactIcon: ({ className }) => <HiOutlinePhone className={className} />,
    contactCTA: "Sales: +63 985-096-3333",
  },
  {
    contactIcon: ({ className }) => <LuMail className={className} />,
    contactCTA: "sales@sunnyfoods.com.ph",
  },
];
