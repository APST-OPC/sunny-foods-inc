import { type ComponentProps, type PropsWithChildren, useEffect } from "react";
import { GiLaurelCrown } from "react-icons/gi";
import { HiMiniStar } from "react-icons/hi2";
import { TbMeat } from "react-icons/tb";
import { useLocation } from "react-router";

import { cn } from "~/libs/cn";

import {
  brandAndProducts,
  businessSupportService,
  wholesaleAndLogistics,
} from "./utils";

const Container = (props: ComponentProps<"div">) => {
  const { children, className, ...rest } = props;
  return (
    <div
      className={cn("container mx-auto w-full space-y-5 md:px-5", className)}
      {...rest}>
      {children}
    </div>
  );
};

const CategoryTitle = ({ children }: PropsWithChildren) => {
  return (
    <h1 className="text-center text-4xl font-bold tracking-tighter md:tracking-tight lg:text-5xl">
      {children}
    </h1>
  );
};

const ServiceHeader = () => {
  return (
    <Container data-aos="fade-up" className="text-center">
      <div className="space-y-2">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border-2 border-(--light-brown) bg-white">
          <GiLaurelCrown className="h-10 w-10 text-(--light-brown)" />
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
      <h1 className="flex flex-col text-4xl font-extrabold lg:text-5xl">
        SERVICES TAILORED TO <span className="text-error">YOUR BUSINESS</span>
      </h1>

      <div
        className={cn(
          "divider mx-auto w-40",
          "before:bg-linear-to-l before:from-(--light-brown) before:to-white",
          "after:bg-linear-to-r after:from-(--light-brown) after:to-white",
        )}>
        <TbMeat className="h-16 w-16 text-(--light-brown)" />
      </div>

      <p className="mx-auto w-full max-w-2xl px-2 text-lg leading-6 text-gray-600">
        Sunny Foods delivers high-quality meat products paired with outstanding
        customer service. Alongside our premium meat selections, we provide
        comprehensive services that enhance quality, convenience, and customer
        satisfaction at every step.
      </p>
    </Container>
  );
};

const BrandAndProductService = () => {
  return (
    <Container data-aos="fade-up" id="branding-&-packaging-services">
      <CategoryTitle>Brand & Product Development Service</CategoryTitle>
      {brandAndProducts.map((item, index) => (
        <div
          key={index}
          className={cn(
            "flex flex-col items-center lg:gap-5",
            index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row",
          )}>
          <img src={item.image} className="lg:h-100 lg:w-2/5" alt="service" />
          <div className="mt-5 space-y-3 px-5 lg:mt-0 lg:w-3/5">
            <h1 className="text-center text-4xl font-bold tracking-tight text-(--warm-red) lg:text-start lg:text-5xl">
              {item.title}
            </h1>
            <p className="text-center text-lg lg:text-start">
              {item.description}
            </p>
            <ul className="space-y-3 lg:space-y-0">
              {item.bullet.map(({ title, description, icons }, index) => (
                <li
                  key={index}
                  className={cn(
                    "text-center text-base tracking-tighter",
                    "flex items-center justify-center gap-3",
                    "rounded-xl border-2 border-(--light-brown)/50 px-2 py-2 shadow-sm",
                    "lg:justify-start lg:gap-5 lg:border-none lg:shadow-none",
                  )}>
                  <div className="rounded-full border-4 border-(--light-brown) bg-(--light-brown)/10 p-2 lg:shadow-sm lg:shadow-black/50">
                    {icons}
                  </div>
                  <div className="w-full text-start lg:w-full">
                    <p className="text-lg font-bold italic">{title}</p>
                    <p>{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </Container>
  );
};

const LogisticsAndSupply = () => {
  return (
    <Container id="wholesale-&-logistics-services">
      <CategoryTitle>Wholesale, Logistics & Distribution</CategoryTitle>
      <div className="flex flex-col md:flex-row" data-aos="fade-up">
        {wholesaleAndLogistics.map((item, index) => (
          <div
            key={index}
            className="h-full w-full cursor-pointer space-y-5 rounded-xl shadow-black/25 md:p-5">
            <img
              src={item.image}
              className="relative h-full max-h-110 w-full transition-all duration-300 md:rounded-xl"
              alt={item.title}
            />
            <div className="h-full">
              <h1 className="text-center text-4xl font-semibold tracking-tighter text-(--warm-red) lg:text-start">
                {item.title}
              </h1>
              <p className="mt-3 text-center text-lg md:text-start">
                {item.description}
              </p>
            </div>
            <ul className="hidden list-inside list-disc text-lg md:block">
              {item.bullet.map((data, index) => (
                <li key={index}>{data}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  );
};

const BusinessSupportService = () => {
  return (
    <Container data-aos="fade-up" id="business-support-services">
      <CategoryTitle>Business Support Services</CategoryTitle>
      {businessSupportService.map((item, index) => (
        <div
          key={index}
          className={cn(
            "flex flex-col items-center lg:gap-5",
            index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row",
          )}>
          <img src={item.image} className="lg:h-100 lg:w-2/5" alt="service" />
          <div className="mt-5 space-y-3 px-5 lg:mt-0 lg:w-3/5">
            <h1 className="text-center text-4xl font-bold tracking-tight text-(--warm-red) lg:text-start lg:text-5xl">
              {item.title}
            </h1>
            <p className="text-center text-lg lg:text-start">
              {item.description}
            </p>
            <div className="divider" />
            <ul className="space-y-3">
              {item.bullet.map(({ title, description }, index) => (
                <li
                  key={index}
                  className={cn(
                    "text-center text-base tracking-tighter",
                    "flex items-center justify-center gap-2",
                    "lg:justify-start",
                  )}>
                  <div className="w-full text-start lg:w-full">
                    <p className="text-lg font-bold italic">{title}</p>
                    <p>{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </Container>
  );
};

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id.toLowerCase());

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "instant" });
        }, 0);
      }
    }
  }, [location]);

  return (
    <section className="space-y-20 py-20">
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
