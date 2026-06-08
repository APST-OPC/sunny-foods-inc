import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useNavigate } from "react-router-dom";

import BannerHead from "~/assets/hero-sec.png";
import SteakWholeSale from "~/assets/products/steak-series/sunnyfoods-steak-wholesale.png";

import { cn } from "~/libs/cn";

import Carousel from "./Carousel";
import ServicesSection from "./ServiceSection";

// const images = [StripLoin, Chuckeye, Ribeye];

const Home = () => {
  // const [currentSlide, setCurrentSlide] = useState(0);

  const navigate = useNavigate();

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % images.length);
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, []);

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

      {/* <section className="bg-(--warm-red) py-12">
        <div className="container mx-auto flex flex-col items-center gap-10 text-white md:flex-row md:justify-center">
          <div className="flex items-center gap-5">
            <img src={Cow} alt="High-quality meat" />
            <div>
              <h6 className="text-xl font-bold">High-Quality Meat</h6>
              <p className="text-sm opacity-90">Carefully sourced from trusted farms</p>
            </div>
          </div>

          <div className="hidden h-10 w-px bg-white/40 md:block" />

          <div className="flex items-center gap-5">
            <img src={Steak} alt="Wide selection" />
            <div>
              <h6 className="text-xl font-bold">Wide Selection</h6>
              <p className="text-sm opacity-90">Cuts for every recipe and occasion</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="bg-base-100 px-6 py-16 text-center md:px-12 md:text-left">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 md:flex-row">
          <div data-aos="zoom-out-right" className="flex-1 space-y-6">
            <h1 className="font-heading text-2xl leading-tight font-bold md:text-5xl">
              Make Every Dish Unforgettable
            </h1>
            <p className="text-lg text-gray-600">
              Sunny Foods Inc. delivers premium beef — trusted by chefs, restaurants, and retailers
              for unbeatable flavor, tenderness, and consistency.
            </p>
          </div>

          <div className="flex flex-1 justify-center md:justify-end">
            <div className="carousel card shadow-2xl shadow-red-950/80">
              {images.map((src, index) => (
                <div
                  key={index}
                  className={cn(
                    'carousel-item pointer-events-none w-full transition-all',
                    index === currentSlide ? 'opacity-100' : 'absolute opacity-0'
                  )}
                >
                  <img
                    src={src}
                    className="aspect-video h-72 w-full max-w-md rounded-lg object-cover"
                    alt={src}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="container mx-auto space-y-10 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold">
            WHAT <span className="text-error">WE</span> DO
          </h1>

          <p className="mx-auto w-full max-w-2xl px-2 text-lg leading-6 text-gray-600">
            Sunny Foods is committed to more than just great meat — we provide dependable service
            and tailored solutions to keep our customers satisfied.
          </p>
        </div>

        <div
          className="grid place-items-center gap-5 px-5 md:grid-cols-2 lg:grid-cols-4"
          data-aos="zoom-in-up"
        >
          {services.map((service, ids) => (
            <ServiceCard
              key={ids}
              src={service.src}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </section> */}

      {/* <div className="bg-white">
        <section className="container mx-auto space-y-10 py-20">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
              <header className="mb-20 grid grid-cols-1 items-end gap-4 border-b border-[#E1D4C7] pb-12 md:grid-cols-12">
                <div className="md:col-span-8">
                  <p className="mb-2 block text-xs font-bold tracking-widest text-(--red) uppercase">
                    Sunny Foods Inc. // Est. 2024
                  </p>
                  <h2 className="text-4xl leading-[0.95] font-black tracking-tighter text-[#262220] sm:text-6xl">
                    Precision Manufacturing. <br />
                    Trusted Distribution.
                  </h2>
                </div>
                <div className="md:col-span-4">
                  <p className="text-base-content text-sm leading-relaxed font-light">
                    From our state-of-the-art facility in Carmona, Cavite, Sunny Foods Inc. combines
                    advanced processing technology with strict quality control. We operate as a
                    premier nationwide supplier, delivering efficient, high-standard protein
                    solutions directly to retail, foodservice, and private label partners across the
                    Philippines.
                  </p>
                </div>
              </header>

              <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
                <div className="grid grid-cols-3 gap-6 sm:gap-12 lg:col-span-8">
                  <div className="space-y-1">
                    <span className="block font-mono text-3xl font-black tracking-tight text-[#262220] sm:text-4xl">
                      NATIONWIDE
                    </span>
                    <span className="block text-[10px] leading-tight font-bold tracking-wider text-[#262220]/50 uppercase">
                      Logistics & <br /> Distribution Pipeline
                    </span>
                  </div>
                  <div className="space-y-1 border-l border-[#E1D4C7]/60 pl-6 sm:pl-12">
                    <span className="block font-mono text-3xl font-black tracking-tight text-[#262220] sm:text-4xl">
                      100%
                    </span>
                    <span className="block text-[10px] leading-tight font-bold tracking-wider text-[#262220]/50 uppercase">
                      Strict Quality <br /> Control Standards
                    </span>
                  </div>
                  <div className="space-y-1 border-l border-[#E1D4C7]/60 pl-6 sm:pl-12">
                    <span className="block font-mono text-3xl font-black tracking-tight text-[#262220] sm:text-4xl">
                      PREMIUM
                    </span>
                    <span className="block text-[10px] leading-tight font-bold tracking-wider text-[#262220]/50 uppercase">
                      Affordable Protein <br /> Solutions
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div> */}

      <div className="bg-white">
        <section
          data-aos="fade-up"
          className="container mx-auto space-y-10 py-20">
          <header className="mx-auto mb-8 max-w-6xl text-center md:text-left">
            <p className="mb-2 block text-sm font-bold tracking-widest text-(--red) uppercase">
              Chef's Selection
            </p>
            <h1 className="text-base-content text-3xl font-black tracking-tight md:text-4xl">
              Savor Our Masterpieces
            </h1>
          </header>
          <div className="flex items-center justify-center">
            <Carousel />
          </div>
        </section>
      </div>

      {/* <section className="relative bg-[url('~/assets/meat-combo-mobile.png')] bg-cover bg-center py-20 xl:bg-[url('~/assets/meat-combo.png')]">
        <div className="absolute inset-0 bg-linear-to-bl from-[rgba(200,161,117,0.1)] via-[rgba(184,28,33,0.1)] to-[rgba(0,108,45,0.1)] backdrop-blur-xs" />
        <div className="relative container mx-auto space-y-10 text-white">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold">
              Our Signature{" "}
              <span className="text-error font-black"> Steak Series</span>
            </h1>
            <p className="mt-2 px-2 text-lg leading-6 font-medium">
              Experience the difference of truly exceptional meat
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-5">
            {featureProducts.map((product, ids) => (
              <ProductCard
                key={ids}
                title={product.title}
                description={product.description}
                link={product.link}
                img={product.img}
              />
            ))}
          </div>

          <h1 className="text-center text-4xl font-bold">
            ...And there&apos;s{" "}
            <span className="text-error font-black">more!</span>
          </h1>
        </div>
      </section> */}
      <section
        data-aos="fade-up"
        className="container mx-auto space-y-10 py-20">
        <h2 className="text-base-content pb-12 text-center text-4xl leading-[0.95] font-black tracking-tighter sm:text-6xl">
          WHY CHOOSE <span className="text-(--red)">OUR BEEF PRODUCTS?</span>
        </h2>

        <div className="">
          <div className="grid grid-cols-1 gap-0.5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                num: "01",
                title: "Premium Beef Cuts",
                desc: "All natural, premium-grade cuts, expertly portion-controlled.",
              },
              {
                num: "02",
                title: "Ready-to-Cook Convenience",
                desc: "Pre-cut, pre-marinated options for effortless cooking.",
              },
              {
                num: "03",
                title: "Portion-Controlled / Zero Waste",
                desc: "Consistent weight & size, minimizing waste & maximizing profit.",
              },
              {
                num: "04",
                title: "Frozen for Freshness & Shelf Life",
                desc: "Locking in natural juices and nutrients for extended shelf life.",
              },
              {
                num: "05",
                title: "Foodservice Friendly",
                desc: "Custom-tailored to meet the needs of horeca and food retailers.",
              },
              {
                num: "06",
                title: "Consistent Quality Every Time",
                desc: "Rigorous quality control, ensuring top quality in every order.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative aspect-video w-full overflow-hidden border border-[#262220]/10 bg-[#262220]/5 transition-all duration-300 hover:cursor-default hover:border-[#262220]">
                {/* Gallery Image Placeholder / Background Component */}
                <div className="absolute inset-0 z-0 bg-[#262220]/10 mix-blend-multiply transition-transform duration-500 group-hover:scale-105">
                  <img
                    src={SteakWholeSale}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Default State Viewport - Partially Darkened Bottom Gradient Layer */}
                <div className="absolute inset-0 z-10 flex flex-col justify-end bg-linear-to-t from-black/80 via-black/30 to-transparent p-6 transition-opacity duration-300 group-hover:opacity-0">
                  <h3 className="max-w-[80%] text-lg leading-tight font-black tracking-tight text-[#FAF6F1] uppercase">
                    {item.title}
                  </h3>
                </div>

                {/* Premium Interactive Hover Curtain */}
                <div className="absolute inset-0 z-10 flex flex-col justify-end bg-[#262220] p-6 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100">
                  <div className="space-y-2">
                    <h4 className="text-base font-black tracking-tight text-[#FAF6F1] uppercase">
                      {item.title}
                    </h4>
                    <p className="text-xs leading-relaxed font-light text-white">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServicesSection />
      {/* <CTA /> */}

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
