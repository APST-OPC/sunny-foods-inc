import type { IProducts } from './type';

import BlackPepperSteak from '~/assets/products/core-products/black-pepper-steak.webp';
import WagyuCubes from '~/assets/products/core-products/wagyu-cubes.webp';
import BurgerPatty from '~/assets/products/core-products/burger-patty.webp';
import StripLoinSteak from '~/assets/products/steak-series/striploin-steak.webp';
import ChuckEyeSteak from '~/assets/products/steak-series/chuckeye-steak.webp';
import RibEyeSteak from '~/assets/products/steak-series/ribeye-steak.webp';
import TopBladeSteak from '~/assets/products/steak-series/top-blade-steak.webp';

export const products: IProducts[] = [
  {
    id: 1,
    title: 'Black Pepper Steak',
    description: 'Tender beef steak seasoned with cracked black pepper for bold flavor.',
    image: BlackPepperSteak,
    type: 'Core Products',
    tags: ['Frozen - Easy to Cook', 'Premium Steak Experience']
  },
  {
    id: 2,
    title: 'Wagyu-Style Cubes',
    description: 'Warbled beef cubes ideal for grilling, stir-frying, and premium dishes.',
    image: WagyuCubes,
    type: 'Core Products',
    tags: ['Cook From Frozen', 'Easy to Cook', 'No Chef Needed']
  },
  {
    id: 3,
    title: 'Strip Loin Steak',
    description: 'Tender and flavorful, a classic choice for grilling or pan-searing.',
    image: StripLoinSteak,
    type: 'Steak Series',
    tags: ['Frozen', 'Easy to Cook']
  },
  {
    id: 4,
    title: 'Burger Patty',
    description: 'Juicy beef patties for burgers, sandwiches and creative dishes.',
    image: BurgerPatty,
    type: 'Core Products',
    tags: ['Cook From Frozen', 'Easy to Cook', 'No Chef Needed']
  },
  {
    id: 5,
    title: 'Chuck Eye Steak',
    description: 'Juicy and flavorful, with greate marbling for the perfect balance.',
    image: ChuckEyeSteak,
    type: 'Steak Series',
    tags: ['Frozen', 'Easy to Cook']
  },
  {
    id: 6,
    title: 'Rib Eye Steak',
    description: 'Rich and juicy, with excellent marbling for superior flavor.',
    image: RibEyeSteak,
    type: 'Steak Series',
    tags: ['Frozen', 'Easy to Cook']
  },
  {
    id: 7,
    title: 'Top Blade Steak',
    description: 'Lean and tender, ideal for grilling, broiling, or pan-frying.',
    image: TopBladeSteak,
    type: 'Steak Series',
    tags: ['Frozen', 'Easy to Cook']
  },
];
