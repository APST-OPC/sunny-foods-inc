import SliceMeat from '~/assets/custom-meat.png';
import Wholesale from '~/assets/box.png';
import Packaging from '~/assets/packaging-meat.png';
import Quality from '~/assets/products.png';
import Delivery from '~/assets/delivery.png';
import CustomerService from '~/assets/customer-service.png';

import ChuckEye from '~/assets/products/steak-series/chuckeye-steak.png';
import Ribeye from '~/assets/products/steak-series/ribeye-steak.png';
import StripLoin from '~/assets/products/steak-series/striploin-steak.png';

export const services = [
  {
    src: SliceMeat,
    title: 'Custom Meat Orders',
    description: 'Tailored cuts and blends to your exact to your exact specifications.',
  },
  {
    src: Wholesale,
    title: 'Bulk Ordering & Wholesale',
    description: 'Discounted rates on bulk purchases for distributors and retailers.',
  },
  {
    src: Packaging,
    title: 'Packaging & Labelling',
    description: 'Flexible packaging solutions with custom labeling.',
  },
  {
    src: Quality,
    title: 'OEM / Private Label',
    description: 'Custom branding and manufacturing for your private label needs.',
  },
  {
    src: Delivery,
    title: 'Distribution Support',
    description: 'Reliable logistics and delivery solutions nationwide.',
  },
  {
    src: CustomerService,
    title: 'B2B Customer Service',
    description: 'Dedicated support team for prompt and effective assistance.',
  },
  {
    src: Delivery,
    title: 'Cold Chain Logistics & Handling',
    description: 'End-to-end cold chain management for safe, temperature-controlled delivery.',
  },
];

export const featureProducts = [
  {
    title: 'Strip Loin Steak',
    description: 'Tender and flavorful, with great marbling for the perfect balance.',
    link: './products',
    img: StripLoin,
  },
  {
    title: 'Chuck Eye Steak',
    description: 'Juicy and flavorful, with great marbling for the perfect balance.',
    link: './products',
    img: ChuckEye,
  },
  {
    title: 'Rib Eye Steak',
    description: 'Rich and juicy, with excellent marbling for superior flavor.',
    link: './products',
    img: Ribeye,
  },
];
