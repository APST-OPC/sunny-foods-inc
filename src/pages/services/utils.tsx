import { FaCogs, FaTags } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { GiBoxUnpacking, GiManualMeatGrinder } from "react-icons/gi";
import { IoShieldCheckmark } from "react-icons/io5";
import {
  MdOutlineAutoAwesome,
  MdPermDataSetting,
  MdScale,
} from "react-icons/md";

import Quality from "~/assets/icons/high-quality.png";
import Packaging from "~/assets/icons/packaging-meat.png";
import Restaurant from "~/assets/icons/restaurant.png";
import FrozenMeat from "~/assets/icons/steak.png";
import Stove from "~/assets/icons/stove.png";
import BulkAndWholesale from "~/assets/services/bulk-ordering-wholesale.png";
import ColdChainLogistics from "~/assets/services/cold-chain-logistics.png";
import CustomMeat from "~/assets/services/custom-meat-order.png";
import CustomerSupport from "~/assets/services/customer-support.png";
import DistributionSupport from "~/assets/services/distribution-support.jpeg";
import OEMPrivateLabel from "~/assets/services/oem-private-label-final.png";
import MeatPackage from "~/assets/services/packageLabeling.png";

export const whyChooseProducts = [
  {
    image: Packaging,
    title: "Premium Beef Cuts",
    description:
      "All natural, premium-grade cuts, expertly portion-controlled.",
  },
  {
    image: Stove,
    title: "Ready-to-Cook Convenience",
    description: "Pre-cut, pre-marinated options for effortless cooking.",
  },
  {
    image: Packaging,
    title: "Portion-Controlled / Zero Waste",
    description:
      "Consistent weight & size, minimizing waste & maximizing profit.",
  },
  {
    image: FrozenMeat,
    title: "Frozen for Freshness & Shelf Life",
    description:
      "Locking in natural juices and nutrients for extended shelf life.",
  },
  {
    image: Restaurant,
    title: "Foodservice Friendly",
    description:
      "Custom-tailored to meet the needs of horeca and food retailers.",
  },
  {
    image: Quality,
    title: "Consistent Quality Every Time",
    description:
      "Rigorous quality control, ensuring top quality in every order.",
  },
];

const listIconClass = "size-12 lg:size-8 text-(--light-brown)";
export const brandAndProducts = [
  {
    title: "Packaging / Labeling",
    image: MeatPackage,
    description:
      "Custom packaging and labeling tailored to your needs, from vacuum-sealed portions to bulk orders, ensuring secure presentation and clear product information.",
    bullet: [
      {
        icons: <GiBoxUnpacking className={listIconClass} />,
        title: "Customized Packaging",
        description:
          "Custom packaging options, from vacuum-sealed portions to bulk orders, tailored to meet your business requirements.",
      },
      {
        icons: <MdPermDataSetting className={listIconClass} />,
        title: "Precise Labeling",
        description:
          "Clear and accurate labeling ensures product identification, compliance, and a professional presentation.",
      },
      {
        icons: <IoShieldCheckmark className={listIconClass} />,
        title: "Secure Finish",
        description:
          "Secure and neatly finished packaging helps preserve product quality while ensuring reliable handling and distribution.",
      },
    ],
  },
  {
    title: "OEM / Private Label",
    image: OEMPrivateLabel,
    description:
      "From product development to packaging and branding, our OEM and private label solutions help bring your vision to market with confidence.",
    bullet: [
      {
        icons: <FaTags className={listIconClass} />,
        title: "Custom Label",
        description:
          "Delivering customized OEM and private label solutions tailored to your brand requirements.",
      },
      {
        icons: <FaCogs className={listIconClass} />,
        title: "Flexible Production",
        description:
          "Flexible production capabilities support product customization and brand growth",
      },
      {
        icons: <FaCircleCheck className={listIconClass} />,
        title: "Quality Control",
        description:
          "Strict quality control ensures consistency, compliance, and market-ready products",
      },
    ],
  },
  {
    title: "Custom Meat Orders",
    image: CustomMeat,
    description:
      "Custom meat orders tailored to your specifications, with flexible cuts, weights, and packaging designed to meet your exact requirements.",
    bullet: [
      {
        icons: <GiManualMeatGrinder className={listIconClass} />,
        title: "Personalize Cuts",
        description:
          "Personalized meat orders with custom cuts, portions, and specifications tailored to your unique needs.",
      },
      {
        icons: <MdScale className={listIconClass} />,
        title: "Flexible Weight Options",
        description:
          "Flexible packaging and weight options help ensure products align with your business requirements.",
      },
      {
        icons: <MdOutlineAutoAwesome className={listIconClass} />,
        title: "Tailored Solutions",
        description:
          "Our team works closely with you to fulfill special requests and deliver precisely what you need.",
      },
    ],
  },
];

export const wholesaleAndLogistics = [
  {
    title: "Bulk Ordering & Wholesale",
    image: BulkAndWholesale,
    description:
      "We provide bulk ordering and wholesale solutions for restaurants, retailers, and food service businesses, delivering premium-quality meat at competitive prices.",
    bullet: [
      "Premium-quality meat supplied in bulk quantities to support restaurants, retailers, and food businesses.",
      "Competitive wholesale pricing helps businesses maintain value without compromising product quality.",
      "Reliable inventory and consistent supply ensure uninterrupted operations and dependable order fulfillment.",
    ],
  },
  {
    title: "Cold Chain Logistics & Handling",
    image: ColdChainLogistics,
    description:
      "Reliable cold chain management ensures meat products remain fresh, safe, and in optimal condition from processing to delivery.",
    bullet: [
      "Temperature-controlled storage and transport help preserve freshness, quality, and food safety.",
      "Continuous cold chain monitoring minimizes risks and maintains optimal product conditions.",
      "Efficient handling and distribution ensure products arrive safely, fresh, and ready for use.",
    ],
  },
];

export const businessSupportService = [
  {
    image: CustomerSupport,
    title: "Distribution Support",
    description:
      "Reliable nationwide logistics with efficient delivery coordination, ensuring products arrive safely and on time.",
    bullet: [
      {
        title: "Nationwide Delivery",
        description:
          "Nationwide delivery coordination for reliable product movement.",
      },
      {
        title: "Optimized Logistics",
        description:
          "Optimized logistics to ensure timely and efficient distribution.",
      },
      {
        title: "Secure Handling",
        description:
          "Secure handling and tracking from dispatch to destination.",
      },
    ],
  },
  {
    image: DistributionSupport,
    title: "B2B Customer Service",
    description:
      "Dedicated account support providing responsive assistance, order updates, and business-focused solutions.",
    bullet: [
      {
        title: "Dedicated Support",
        description:
          "Dedicated support for orders, inquiries, and account assistance.",
      },
      {
        title: "Prompt Response",
        description:
          "Prompt responses to keep business operations running smoothly.",
      },
      {
        title: "Personalized Solutions",
        description: "Personalized solutions tailored to your business needs.",
      },
    ],
  },
];
