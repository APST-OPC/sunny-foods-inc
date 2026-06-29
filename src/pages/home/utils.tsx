import {
  ContainerTruck02Icon,
  CustomerSupportIcon,
  PackageDelivered01FreeIcons,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import SteakQualityControl from "~/assets/food-safety/prod-area-visual-6.png";
import BrandingAndPackaging from "~/assets/home/branding-packaging-service.png";
import BusinessSupportService from "~/assets/home/business-support-service.png";
import LogisticService from "~/assets/home/cold-storage-logistics.png";
import PremuimCut from "~/assets/home/premium-beef-cuts3.png";
import ReadyToCook from "~/assets/home/ready-to-cook.png";
import SteakFoodService from "~/assets/home/SteakFoodService.png";
import SteakFrozenPack from "~/assets/home/steak-frozen-pack.png";
import PortionControlled from "~/assets/home/steak-portion-controlled.png";

export const beefSolutions = [
  {
    id: 1,
    title: "Premium Beef Cuts",
    desc: "All natural, premium-grade cuts, expertly portion-controlled.",
    image: PremuimCut,
  },
  {
    id: 2,
    title: "Ready-to-Cook Convenience",
    desc: "Pre-cut, pre-marinated options for effortless cooking.",
    image: ReadyToCook,
  },
  {
    id: 3,
    title: "Portion-Controlled / Zero Waste",
    desc: "Consistent weight & size, minimizing waste & maximizing profit.",
    image: PortionControlled,
  },
  {
    id: 4,
    title: "Frozen for Freshness & Shelf Life",
    desc: "Locking in natural juices and nutrients for extended shelf life.",
    image: SteakFrozenPack,
  },
  {
    id: 5,
    title: "Food Service Friendly",
    desc: "Custom-tailored to meet the needs of horeca and food retailers.",
    image: SteakFoodService,
  },
  {
    id: 6,
    title: "Consistent Quality Every Time",
    desc: "Rigorous quality control, ensuring top quality in every order.",
    image: SteakQualityControl,
  },
];

export const serviceData = [
  {
    id: 1,
    icons: (
      <HugeiconsIcon
        icon={PackageDelivered01FreeIcons}
        className="h-6 w-6"
        strokeWidth={1.5}
      />
    ),
    image: BrandingAndPackaging,
    title: "Branding & Packaging Services",
    description:
      "Comprehensive private label and OEM manufacturing solutions. We handle everything from custom portion specifications to regulatory-compliant retail packaging and branding.",
    bullets: [
      "Custom Meat Orders",
      "Packaging & Labelling",
      "OEM / Private Label",
    ],
  },
  {
    id: 2,
    icons: (
      <HugeiconsIcon
        icon={ContainerTruck02Icon}
        className="h-6 w-6"
        strokeWidth={1.5}
      />
    ),
    image: LogisticService,
    title: "Wholesale & Logistics Services",
    description:
      "High-volume bulk wholesale supply backed by secure distribution networks. We ensure massive product quantities are handled safely through strict, uninterrupted cold chain logistics.",
    bullets: ["Bulk Ordering & Wholesale", "Cold Chain Logistics & Handling"],
  },
  {
    id: 3,
    icons: (
      <HugeiconsIcon
        icon={CustomerSupportIcon}
        className="h-6 w-6"
        strokeWidth={1.5}
      />
    ),
    image: BusinessSupportService,
    title: "Business Support Services",
    description:
      "Dedicated enterprise partnership and post-delivery operations. Our commercial desk coordinates unbroken supply pipelines and proactive, ongoing customer support.",
    bullets: ["B2B Customer Service", "Distribution Support"],
  },
];
