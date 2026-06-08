import { cn } from '~/libs/cn';
// import { whyChooseProducts } from './utils';
import { GiLaurelCrown } from 'react-icons/gi';
import { TbMeat } from 'react-icons/tb';
import { HiMiniStar } from 'react-icons/hi2';

import { brandAndProducts } from './utils';

const ServiceHeader = () => {
  return (
    <div className="space-y-5 text-center">
      <div>
        <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full border-2 border-(--light-brown) bg-white">
          <GiLaurelCrown className="h-6 w-6 text-(--light-brown)" />
        </div>
        <div className="flex items-center justify-center gap-1">
          <HiMiniStar className="hidden text-(--light-brown) md:block md:size-2" />
          <HiMiniStar className="size-2 text-(--light-brown) md:size-3" />
          <HiMiniStar className="size-3 text-(--light-brown) md:size-4" />
          <div className="mx-2 w-52 rounded-lg border-2 border-(--light-brown) bg-(--light-brown)/10 py-1 text-center text-sm font-bold text-(--light-brown) md:mx-4">
            SERVICES OFFERED
          </div>
          <HiMiniStar className="size-3 text-(--light-brown) md:size-4" />
          <HiMiniStar className="size-2 text-(--light-brown) md:size-3" />
          <HiMiniStar className="hidden text-(--light-brown) md:block md:size-2" />
        </div>
      </div>
      <h1 className="flex flex-col text-4xl font-extrabold">
        SERVICES TAILORED TO <span className="text-error">YOUR BUSINESS</span>
      </h1>

      <div
        className={cn(
          'divider mx-auto w-40',
          'before:bg-linear-to-l before:from-(--light-brown) before:to-white',
          'after:bg-linear-to-r after:from-(--light-brown) after:to-white'
        )}
      >
        <TbMeat className="h-16 w-16 text-(--light-brown)" />
      </div>

      <p className="mx-auto w-full max-w-2xl px-2 text-lg leading-6 text-gray-600">
        Our services are designed to support every aspect of your business operations, from custom
        meat orders and private labeling to packaging, wholesale supply, and distribution support.
        With a focus on quality, reliability, and efficiency, we help businesses streamline
        processes, strengthen their brand presence, and deliver exceptional products to their
        customers.
      </p>
    </div>
  );
};

// const LegacyContent = () => {
//   return (
//     <div className="grid place-items-center gap-5 px-5 md:grid-cols-2 lg:grid-cols-3">
//       {whyChooseProducts.map(({ title, description, image }, ids) => (
//         <div
//           key={ids}
//           className="card bg-base-100 border-base-200 h-full w-full max-w-xs shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg md:max-w-md"
//         >
//           <div className="card-body items-center text-center">
//             <div className="mb-4 text-5xl">
//               <img src={image} alt={title.toLowerCase()} className="h-14 w-14" />
//             </div>
//             <h3 className="card-title text-xl font-bold">{title}</h3>
//             <p className="text-base-content/80">{description}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

const BrandAndProductService = () => {
  return (
    <div className="space-y-10">
      <h1 className="text-center text-4xl font-bold">Brand & Product Development Service</h1>
      {brandAndProducts.map((item, index) => (
        <div
          className={cn('flex w-full items-center gap-20', index % 2 !== 0 && 'flex-row-reverse')}
          key={index}
        >
          <div className="h-90 w-175 overflow-hidden rounded-xl">
            <img src={item.image} alt="packaging and labeling" className="h-full w-full" />
          </div>
          <div className="w-full space-y-5">
            <h1 className="text-5xl font-semibold tracking-tight text-(--warm-red) md:text-6xl lg:text-7xl">
              {item.title}
            </h1>
            <h1 className="text-lg">{item.description}</h1>

            <ul className="list-inside list-disc space-y-1">
              {item.bullet.map((data, ids) => (
                <li className="text-lg" key={ids}>
                  {data}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

const Services = () => {
  return (
    <section className="container mx-auto space-y-20 py-20">
      <ServiceHeader />
      <div className="divider m-10 mx-auto h-5 w-4/5 before:bg-linear-to-r before:from-[#F9F5F1] before:via-(--red) before:to-(--red) after:bg-linear-to-l after:from-[#F9F5F1] after:via-(--red) after:to-(--red)" />
      {/* <LegacyContent /> */}
      <BrandAndProductService />
    </section>
  );
};

export default Services;
