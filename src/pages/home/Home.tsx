import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useNavigate } from "react-router-dom";

import BannerHead from "~/assets/home/premium-beef-cuts2.png";

import Carousel from "./Carousel";
import ServicesSection from "./ServiceSection";
import { beefSolutions } from "./utils";

const Home = () => {
  const navigate = useNavigate();

  return (
    <main>
      <section className="hero relative flex min-h-[75vh] items-end bg-neutral-950 pb-12 sm:pb-20">
        <img
          src={BannerHead}
          alt="Sunnyfoods manufacturer product range banner"
          className="absolute inset-0 z-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 z-10 bg-linear-to-t from-neutral-950 via-neutral-950/40 to-neutral-950/20" />

        <div className="relative z-20 container mx-auto px-6 xl:max-w-7xl">
          <header className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <h1 className="text-4xl leading-none font-black tracking-tighter text-white uppercase sm:text-6xl md:text-7xl">
                Premium Beef, Crafted to Perfection
              </h1>
            </div>

            <div className="space-y-6 lg:col-span-4 lg:pb-4">
              <div className="h-1 w-12 bg-(--red)" />
              <p className="text-base leading-relaxed font-light text-neutral-300">
                Handpicked premium beef — from Wagyu-style cubes and Black
                Pepper Steaks to our signature Strip Loin, Rib Eye, and Top
                Blade. Unmatched flavor, tenderness, and convenience.
              </p>
              <button
                onClick={() => navigate("products")}
                className="group btn btn-lg w-full border-transparent bg-(--red) text-base font-extrabold text-white uppercase transition-all sm:w-64">
                Explore products
                <HugeiconsIcon
                  icon={ArrowRight02Icon}
                  className="group-hover:translate-x-1.5"
                  strokeWidth={2}
                />
              </button>
            </div>
          </header>
        </div>
      </section>

      <div className="bg-white">
        <section
          data-aos="fade-up"
          className="container mx-auto space-y-10 py-20">
          <header className="mx-auto mb-8 max-w-6xl text-center md:text-left">
            <p className="mb-2 block text-sm font-bold tracking-widest text-(--red) uppercase">
              Chef's Selection
            </p>
            <h1 className="text-base-content text-4xl leading-[0.95] font-black tracking-tighter sm:text-6xl">
              Savor Our Masterpieces
            </h1>
          </header>
          <div className="flex items-center justify-center">
            <Carousel />
          </div>
        </section>
      </div>

      <section
        data-aos="fade-up"
        className="container mx-auto space-y-10 py-20">
        <header className="mb-8 text-center">
          <p className="mb-2 block text-sm font-bold tracking-widest text-(--red) uppercase">
            Premium Beef Solutions
          </p>
          <h1 className="text-base-content text-4xl leading-[0.95] font-black tracking-tighter sm:text-6xl">
            Why Choose <br />
            Our Beef Products
          </h1>
          <p className="text-base-content mt-4 max-w-3xl place-self-center text-sm leading-relaxed font-light">
            From portion controlled steaks to ready to cook patties and cubes,
            our products deliver superior yield, flavor consistency and
            operational efficiency for cafes, restaurants, food retailer and
            distributors nationwide.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-0.5 sm:grid-cols-2 lg:grid-cols-3">
          {beefSolutions.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-video w-full overflow-hidden border border-[#262220]/10 bg-[#262220]/5 transition-all duration-300 hover:cursor-default hover:border-[#262220]">
              <figure className="absolute inset-0 z-0 bg-[#262220]/10 mix-blend-multiply transition-transform duration-500 group-hover:scale-105">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </figure>

              <div className="absolute inset-0 z-10 flex flex-col justify-end bg-linear-to-t from-black/80 via-black/30 to-transparent p-6 text-[#FAF6F1] transition-opacity duration-300 group-hover:opacity-0">
                <h3 className="text-lg leading-tight font-black tracking-tight uppercase">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ServicesSection />

      <section
        data-aos="fade-up"
        className="container mx-auto space-y-10 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl border-t border-b py-16">
          <div className="grid grid-cols-1 items-stretch gap-12 md:grid-cols-12 md:gap-0">
            <header className="space-y-4 md:col-span-8 md:pr-12">
              <p className="mb-2 block text-sm font-bold tracking-widest text-(--red) uppercase">
                Partner With Us
              </p>
              <h2 className="text-base-content text-4xl leading-[0.95] font-black tracking-tighter sm:text-6xl lg:text-7xl">
                Power Your Business <br className="hidden sm:inline" />
                With a Reliable Meat Supplier.
              </h2>
              <p className="text-base-content max-w-xl pt-6 text-base leading-relaxed font-light">
                Let's integrate our state-of-the-art production capabilities
                with your commercial brand vision. We establish deep-tier
                partnerships that harmonize custom contract manufacturing,
                dedicated private label scaling, and unified cold-chain
                logistics under a single shared objective.
              </p>
            </header>

            <div className="flex flex-col items-start justify-center md:col-span-4 md:items-end md:border-l md:border-[#262220]/20 md:pl-6">
              <div className="w-full space-y-3">
                <button
                  onClick={() => navigate("/talk-to-us")}
                  className="group bg-neutral relative inline-flex w-full items-center justify-between px-6 py-5 text-start font-mono text-sm font-bold tracking-widest text-[#FAF6F1] uppercase shadow-sm transition-all duration-300 hover:cursor-pointer hover:bg-(--red) md:text-base">
                  <span>Initiate Consultation</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    <HugeiconsIcon icon={ArrowRight02Icon} />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
