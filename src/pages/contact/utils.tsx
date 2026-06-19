import type { IContactDetail } from "./type";

import { AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import { FaViber } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import { HiOutlinePhone } from "react-icons/hi2";
import { LuMail } from "react-icons/lu";
import { PiTiktokLogo } from "react-icons/pi";

export const contactInfo: IContactDetail[] = [
  {
    contactIcon: ({ className }) => <FaViber className={className} />,
    contactLabel: "Our Company Number",
    contactLink: "+63 918 739 9999",
    openWindow: () => window.open("viber://chat?number=639187399999", "_blank"),
  },
  {
    contactIcon: ({ className }) => <HiOutlinePhone className={className} />,
    contactLabel: "Our Sales Number",
    contactLink: "+63 985 096 3333",
    openWindow: () => window.open("viber://chat?number=639850963333", "_blank"),
  },
  {
    contactIcon: ({ className }) => <AiOutlineFacebook className={className} />,
    contactLabel: "Our Facebook Page",
    contactLink: "facebook.com/sunnyfoodsinc",
    openWindow: () =>
      window.open("https://www.facebook.com/sunnyfoodsinc/", "_blank"),
  },
  {
    contactIcon: ({ className }) => <FaInstagram className={className} />,
    contactLabel: "Our Instagram Page",
    contactLink: "@sunnyfoods.com.ph",
    openWindow: () =>
      window.open("https://www.instagram.com/sunnyfoods.com.ph", "_blank"),
  },
  {
    contactIcon: ({ className }) => <AiOutlineLinkedin className={className} />,
    contactLabel: "Our TikTok Account",
    contactLink: "@sunnyfoodsinc",
    openWindow: () =>
      window.open("https://www.tiktok.com/@sunnyfoodsinc", "_blank"),
  },
  {
    contactIcon: ({ className }) => <PiTiktokLogo className={className} />,
    contactLabel: "Our LinkedIn Page",
    contactLink: "Sunny Foods Inc.",
    openWindow: () =>
      window.open("https://www.linkedin.com/company/sunny-foods-inc", "_blank"),
  },
  {
    contactIcon: ({ className }) => <LuMail className={className} />,
    contactLabel: "Our Email",
    contactLink: "sales@sunnyfoods.com.ph",
    openWindow: () => window.open(`mailto:sales@sunnyfoods.com.ph`, "_blank"),
  },
  {
    contactIcon: ({ className }) => <GrLocation className={className} />,
    contactLabel: "Our Location",
    contactLink:
      "Bldg. 2 Blk. 1 Governors Park Drive, Southwoods Industrial Park Mabuhay, Carmona, Cavite (4116)",

    openWindow: () =>
      window.open(`https://maps.app.goo.gl/R8GpqJdbwKBt3E1x9`, "_blank"),
  },
];
