import SliceMeat from '~/assets/custom-meat.png';
import Wholesale from '~/assets/wholesale.png';
import Packaging from '~/assets/packaging-meat.png';
import Quality from '~/assets/high-quality.png';

import ChuckEye from '~/assets/chuck-eye.webp';
import Ribeye from '~/assets/ribeye.jpg';

import Mail from '~/assets/mail.png';
import Phone from '~/assets/phone.png';
import Planet from '~/assets/planet-earth.png';

export const services = [
  {
    src: SliceMeat,
    title: 'Custom Meat Orders',
    description:
      'Choose your preferred cuts, portion sizes, and packaging — all customized to meet your specific cooking and dining needs.',
  },
  {
    src: Wholesale,
    title: 'Bulk Ordering & Wholesale',
    description:
      'We provide large-scale meat supply for restaurants, retailers, and events — ensuring consistent quality and timely delivery.',
  },
  {
    src: Packaging,
    title: 'Packaging & Labelling',
    description:
      'All products are professionally vacuum-sealed, labeled, and date-marked to maintain freshness and ensure easy storage.',
  },
  {
    src: Quality,
    title: 'Food Safety and Quality Assurance',
    description:
      'We prioritize food safety and consistent quality so every order meets the highest standards.',
  },
];

export const featureProducts = [
  {
    title: 'Strip Loin Steak',
    description:
      'Our Strip Loin Steak is a prime cut of beef, known for its robust flavor and tender texture.',
    link: './products',
  },
  {
    title: 'Chuck Eye Steak',
    description:
      '“Discover the steak lover’s secret — bold, tender, and richly marbled Chuck Eye perfection.”',
    link: './products',
    img: ChuckEye,
  },
  {
    title: 'Rib Eye Steak',
    description:
      'Indulge in the unrivaled richness of our Rib Eye Steak — beautifully marbled, melt-in-your-mouth tender, and bursting with flavor in every bite.',
    link: './products',
    img: Ribeye,
  },
];

export const contacts = [
  {
    src: Planet,
    title: 'Our Location',
    description:
      'Bldg. 2 Blk. 1 Governors Park Drive Southwoods Industrial Park Mabuhay, Carmona, Cavite (4116)',
  },
  {
    src: Phone,
    title: 'Call Us',
    description: '(+63) 939-237-9999 OR (+63) 918-739-9999',
  },
  {
    src: Mail,
    title: 'Email',
    description: 'sales@sunnyfoods.com.ph',
  },
];
