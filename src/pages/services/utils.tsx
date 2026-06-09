import Quality from "~/assets/icons/high-quality.png";
import Packaging from "~/assets/icons/packaging-meat.png";
import Restaurant from "~/assets/icons/restaurant.png";
import FrozenMeat from "~/assets/icons/steak.png";
import Stove from "~/assets/icons/stove.png";
import BulkAndWholesale from "~/assets/services/bulk-wholesale.png";
import CustomMeat from "~/assets/services/custom-meat-order.png";
import OEMPrivateLabel from "~/assets/services/OEM-Private-labeling.png";
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

export const brandAndProducts = [
  {
    title: "Packaging / Labeling",
    image: MeatPackage,
    description:
      "Custom packaging and labeling tailored to your needs, from vacuum-sealed portions to bulk orders, ensuring secure presentation and clear product information.",
    bullet: [
      "Custom packaging options, from vacuum-sealed portions to bulk orders, tailored to meet your business requirements.",
      "Clear and accurate labeling ensures product identification, compliance, and a professional presentation.",
      "Secure and neatly finished packaging helps preserve product quality while ensuring reliable handling and distribution.",
    ],
  },
  {
    title: "OEM / Private Label",
    image: OEMPrivateLabel,
    description:
      "From product development to packaging and branding, our OEM and private label solutions help bring your vision to market with confidence.",
    bullet: [
      "Delivering customized OEM and private label solutions tailored to your brand requirements.",
      "Flexible production capabilities support product customization and brand growth",
      "Strict quality control ensures consistency, compliance, and market-ready products",
    ],
  },
  {
    title: "Custom Meat Orders",
    image: CustomMeat,
    description:
      "Custom meat orders tailored to your specifications, with flexible cuts, weights, and packaging designed to meet your exact requirements.",
    bullet: [
      "Personalized meat orders with custom cuts, portions, and specifications tailored to your unique needs.",
      "Flexible packaging and weight options help ensure products align with your business requirements.",
      "Our team works closely with you to fulfill special requests and deliver precisely what you need.",
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
    image: BulkAndWholesale,
    description:
      "Reliable cold chain management ensures meat products remain fresh, safe, and in optimal condition from processing to delivery.",
    bullet: [
      "Temperature-controlled storage and transport help preserve freshness, quality, and food safety.",
      "Continuous cold chain monitoring minimizes risks and maintains optimal product conditions.",
      "Efficient handling and distribution ensure products arrive safely, fresh, and ready for use.",
    ],
  },
];
