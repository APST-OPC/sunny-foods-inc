import { GiLaurelCrown } from 'react-icons/gi';
import { HiMiniStar } from 'react-icons/hi2';
import { TbMeat } from 'react-icons/tb';

import CustomerService from '~/assets/services/customer-support.png';

import { cn } from '~/libs/cn';

import { brandAndProducts, wholesaleAndLogistics } from './utils';

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
        Sunny Foods delivers high-quality meat products paired with outstanding customer service.
        Alongside our premium meat selections, we provide comprehensive services that enhance
        quality, convenience, and customer satisfaction at every step.
      </p>
    </div>
  );
};

const BrandAndProductService = () => {
  return (
    <div className="space-y-10">
      <h1 className="text-center text-4xl font-bold">Brand & Product Development Service</h1>
      {brandAndProducts.map((item, index) => (
        <div
          className={cn(
            'flex w-full flex-col items-center gap-5 lg:gap-10',
            index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'
          )}
          key={index}
        >
          <div
            className="aspect-16/10 w-full overflow-hidden lg:h-100 lg:w-190 lg:rounded-xl"
            data-aos={index % 2 !== 0 ? 'fade-left' : 'fade-right'}
          >
            <img src={item.image} alt="packaging and labeling" className="h-full w-full" />
          </div>
          <div className="w-full space-y-3 px-5 lg:w-2/3">
            <h1 className="text-center text-4xl font-semibold tracking-tight text-(--warm-red) md:text-5xl lg:text-start lg:text-6xl">
              {item.title}
            </h1>
            <div className="space-y-2">
              <h1 className="text-center text-base lg:text-start lg:text-lg">{item.description}</h1>
              <div className="divider hidden lg:block" />
              <ul className="hidden list-inside list-disc lg:block">
                {item.bullet.map((data, ids) => (
                  <li className="text-base lg:text-lg" key={ids}>
                    {data}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const LogisticsAndSupply = () => {
  return (
    <div className="space-y-10">
      <h1 className="text-center text-4xl font-bold">Wholesale, Logistics & Distribution</h1>

      <div className="flex flex-col md:flex-row">
        {wholesaleAndLogistics.map((item, index) => (
          <div
            key={index}
            className="h-full w-full cursor-pointer space-y-5 p-5 shadow-black/25 hover:scale-105 hover:bg-(--light-brown)/20"
          >
            <div className="relative">
              <img
                src={item.image}
                className="relative h-full w-full transition-all duration-300 md:rounded-xl"
                alt={item.title}
              />
            </div>
            <div className="h-full">
              <h1 className="text-center text-4xl font-semibold tracking-tighter text-(--warm-red) lg:text-start">
                {item.title}
              </h1>
              <p className="mt-3 text-center text-lg md:text-start">{item.description}</p>
            </div>
            <ul className="list-inside list-disc text-lg">
              {item.bullet.map((data, index) => (
                <li key={index}>{data}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

const BusinessSupportService = () => {
  return (
    <div className="w-full space-y-5">
      <h1 className="text-center text-4xl font-bold">Business Support Services</h1>

      <img src={CustomerService} className="h-full w-full rounded-xl" alt="customer-service" />
    </div>
  );
};

const Services = () => {
  return (
    <section className="container mx-auto space-y-20 px-5 py-20">
      <ServiceHeader />
      <div className="divider m-10 mx-auto h-5 w-4/5 before:bg-linear-to-r before:from-[#F9F5F1] before:via-(--red) before:to-(--red) after:bg-linear-to-l after:from-[#F9F5F1] after:via-(--red) after:to-(--red)" />
      <BrandAndProductService />
      <div className="divider m-10 mx-auto h-5 w-4/5 before:bg-linear-to-r before:from-[#F9F5F1] before:via-(--red) before:to-(--red) after:bg-linear-to-l after:from-[#F9F5F1] after:via-(--red) after:to-(--red)" />
      <LogisticsAndSupply />
      <div className="divider m-10 mx-auto h-5 w-4/5 before:bg-linear-to-r before:from-[#F9F5F1] before:via-(--red) before:to-(--red) after:bg-linear-to-l after:from-[#F9F5F1] after:via-(--red) after:to-(--red)" />
      <BusinessSupportService />
    </section>
  );
};

export default Services;
