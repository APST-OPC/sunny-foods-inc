import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useNavigate } from "react-router-dom";

import SteakQualityControl from "~/assets/food-safety/prod-facility-1.png";
import BannerHead from "~/assets/hero-sec.png";
import PremuimCut from "~/assets/meat-carousel/premium-beef-cuts.png";
import ReadyToCook from "~/assets/meat-carousel/ready-to-cook.png";
import SteakFoodService from "~/assets/meat-carousel/SteakFoodService.png";
import SteakFrozenPack from "~/assets/meat-carousel/steak-frozen-pack.png";
import PortionControlled from "~/assets/meat-carousel/steak-portion-controlled.png";

import { cn } from "~/libs/cn";

import Carousel from "./Carousel";
import ServicesSection from "./ServiceSection";

const beefSolutions = [
  {
    num: "01",
    title: "Premium Beef Cuts",
    desc: "All natural, premium-grade cuts, expertly portion-controlled.",
    image: PremuimCut,
  },
  {
    num: "02",
    title: "Ready-to-Cook Convenience",
    desc: "Pre-cut, pre-marinated options for effortless cooking.",
    image: ReadyToCook,
  },
  {
    num: "03",
    title: "Portion-Controlled / Zero Waste",
    desc: "Consistent weight & size, minimizing waste & maximizing profit.",
    image: PortionControlled,
  },
  {
    num: "04",
    title: "Frozen for Freshness & Shelf Life",
    desc: "Locking in natural juices and nutrients for extended shelf life.",
    image: SteakFrozenPack,
  },
  {
    num: "05",
    title: "Food Service Friendly",
    desc: "Custom-tailored to meet the needs of horeca and food retailers.",
    image: SteakFoodService,
  },
  {
    num: "06",
    title: "Consistent Quality Every Time",
    desc: "Rigorous quality control, ensuring top quality in every order.",
    image: SteakQualityControl,
  },
];
const Home = () => {
  const navigate = useNavigate();

  return (
    <main>
      <section className="hero relative min-h-[70vh]">
        <img
          src={BannerHead}
          alt="beef"
          loading="eager"
          className={cn(
            "aspect-square h-[70vh] w-full rotate-y-180",
            "bg-[radial-gradient(ellipse_at_top,#7A1F1F_0%,#3B0A0A_55%,#1A0505_100%)] object-cover object-center",
          )}
        />

        <div className="hero-overlay rotate-y-180" />

        <div className="hero-content z-20 h-full w-full max-w-none items-end justify-start p-0">
          <div className="container mx-auto px-4 pb-10 text-center text-white md:px-8 md:pb-16 md:text-start">
            <div className="max-w-xl">
              <p className="font-heading text-4xl md:font-bold lg:text-6xl">
                Premium Beef,
              </p>
              <p className="font-heading mb-5 text-4xl md:font-bold lg:text-6xl">
                Crafted to Perfection
              </p>

              <p className="text-md mb-5 lg:text-lg">
                Handpicked premium beef — from Wagyu-style cubes and Black
                Pepper Steaks to our signature Strip Loin, Rib Eye, and Top
                Blade. Unmatched flavor, tenderness, and convenience.
              </p>

              <button
                onClick={() => navigate("products")}
                className="btn btn-success w-60 rounded-full font-bold text-white shadow-md hover:shadow-lg">
                Explore Products
              </button>
            </div>
          </div>
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
              {/* Gallery Image Placeholder / Background Component */}
              <div className="absolute inset-0 z-0 bg-[#262220]/10 mix-blend-multiply transition-transform duration-500 group-hover:scale-105">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Default State Viewport - Partially Darkened Bottom Gradient Layer */}
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
