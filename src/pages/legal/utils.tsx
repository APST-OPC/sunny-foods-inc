import type { IFactory, ILicenseAndSafety, ISafetyCard } from './type';

import BarangayCert from '~/assets/certifications/barangay-clearance-cert.webp';
import Bir from '~/assets/certifications/bir-cert.webp';
import Fda from '~/assets/certifications/fda-license-cert.webp';
import FireSafety from '~/assets/certifications/fire-safety-clearance.webp';
import Sanitary from '~/assets/certifications/mayor-sanitary-permit-cert.webp';
import MayorPerm from '~/assets/certifications/mayors-perm-cert.webp';
import SanitaryCert from '~/assets/certifications/sanitary-permit-cert.webp';
import Sec from '~/assets/certifications/sec-cert.webp';

import FdaLogo from '~/assets/icons/fda.png';
import Checklist from '~/assets/icons/checklist.png';
import Wholesale from '~/assets/wholesale.png';

import FoodSafetyOne from '~/assets/food-safety/food-safety-one.png';
import FoodSafetyTwo from '~/assets/food-safety/food-safety-two.png';

import ProdFacilityOne from '~/assets/food-safety/prod-facility-1.png';
import ProdFacilityTwo from '~/assets/food-safety/prod-facility-2.png';
import ProdFacilityThree from '~/assets/food-safety/prod-facility-3.png';
import ProdFacilityFour from '~/assets/food-safety/prod-area-visual-2.png';

export const licenses: ILicenseAndSafety[] = [
  {
    img: Sec,
    description: 'SEC Certificate of Incorporation',
  },
  {
    img: Bir,
    description: 'BIR Certificate of Registration',
  },
  {
    img: MayorPerm,
    description: "Mayor's Permit to Operate",
  },
  {
    img: BarangayCert,
    description: 'Barangay Business Clearance',
  },
];

export const safetyPermits: ILicenseAndSafety[] = [
  {
    img: Fda,
    description: 'FDA License to Operate',
  },
  {
    img: Sanitary,
    description: "Mayor's Sanitary Permit to Operate",
  },
  {
    img: SanitaryCert,
    description: 'Sanitary Permit to Operate',
  },
  {
    img: FireSafety,
    description: 'Fire Safety Clearance',
  },
];

export const qualityAndFoodSafetyIcons: ILicenseAndSafety[] = [
  {
    img: FdaLogo,
    description: 'FDA',
  },
  {
    img: Checklist,
    description: 'Sanitary',
  },
  {
    img: FdaLogo,
    description: 'Permit to Operate',
  },
  {
    img: Checklist,
    description: 'Registration',
  },
  {
    img: Wholesale,
    description: 'Compliance',
  },
  {
    img: Checklist,
    description: 'Quality Management',
  },
];

export const safetyCardContent: ISafetyCard[] = [
  {
    img: FoodSafetyOne,
    content: {
      title: 'Food Safety & Quality Assurance',
      description: [
        'Upholding strict hygiene and safety protocols.',
        'All processing facilities meet high standards of cleanliness and quality control.',
        'Our batch tested processes ensure consistency and traceability from production to delivery.',
      ],
    },
  },
  {
    img: FoodSafetyTwo,
    content: {
      title: 'Certifications & Compliance',
      subtitle: 'We adhere to all local and national government regulations:',
      description: [
        'Possess the proper licenses and certifications to operate within the food industry.',
        'Full documents available at the end of our profile.',
      ],
    },
  },
];

export const factoryCardContent: IFactory[] = [
  {
    img: ProdFacilityOne,
    title: 'Production Facility',
    description:
      'Our state-of-the-art production facility is designed to handle large-scale meat processing efficiently and safely. We maintain strict food safety protocols, ensuring hygienic conditions throughout all stages of production.',
  },
  {
    img: ProdFacilityFour,
    title: 'Production Facility',
    description:
      'Our state-of-the-art production facility is designed to handle large-scale meat processing efficiently and safely. We maintain strict food safety protocols, ensuring hygienic conditions throughout all stages of production.',
  },
  {
    img: ProdFacilityTwo,
    title: 'R&D & Innovation',
    description:
      'We are committed to continuous innovation, with a dedicated R&D team working on developing new products, improving recipes, and refining flavors and textures. Our research focuses on sustainable practices, innovative packaging, and meeting the evolving demands of our clients and market.',
  },
  {
    img: ProdFacilityThree,
    title: 'Team & Leadership',
    description:
      'Our team is led by seasoned professionals with extensive experience in food manufacturing and safety standards. From quality assurance managers to skilled butchers, our leadership ensures precision and quality in every batch. We emphasize ongoing training and a culture of excellence in operations management.',
  },
];
