import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";

import BeefBBQCuts from "~/assets/products/core-products/bbq-samgyup-cut.png";
import WagyuCubes from "~/assets/products/core-products/wagyu-cubes.png";
import BBQSeasoning from "~/assets/products/sauces/bbq-seasoning.jpeg";
import BlackPepperSauce from "~/assets/products/sauces/black-pepper-sauce.jpeg";
import BlackPepperSteak from "~/assets/products/steak-series/black-pepper-steak2.png";
import ChuckEyeSteak from "~/assets/products/steak-series/chuck-eye-steak2.png";

import { cn } from "~/libs/cn";

const slides = [
  {
    id: 1,
    title: "Black Pepper Steak",
    subtitle: "Steak Series",
    description:
      "Juicy, premium cut seared perfectly with our signature crushed black pepper crust.",
    image: BlackPepperSteak,
  },
  {
    id: 2,
    title: "Chuckeye Steak",
    subtitle: "Steak Series",
    description:
      "Richly marbled and deeply flavorful butcher's cut, grilled to absolute tenderness.",
    image: ChuckEyeSteak,
  },
  {
    id: 3,
    title: "BBQ Seasoning",
    subtitle: "Signature Sauces",
    description:
      "A smoky, sweet, and savory blend of spices crafted to elevate any flame-grilled meat.",
    image: BBQSeasoning,
  },
  {
    id: 4,
    title: "Black Pepper Sauce",
    subtitle: "Signature Sauces",
    description:
      "Our house-made aromatic reduction featuring bold pepper notes and a velvety smooth finish.",
    image: BlackPepperSauce,
  },
  {
    id: 5,
    title: "Beef BBQ Cuts",
    subtitle: "BBQ",
    description:
      "Thick, masterfully marbled beef cuts designed specifically for high-heat grilling and smoky char.",
    image: BeefBBQCuts,
  },
  {
    id: 6,
    title: "Wagyu Style Cubes",
    subtitle: "BBQ Series",
    description:
      "Premium, melt-in-your-mouth beef cubes packed with rich marbling, crafted for quick searing and maximum juiciness.",
    image: WagyuCubes,
  },
];

const Carousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 25 }, [
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);

  const smoothScrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi?.selectedScrollSnap());
  }, [emblaApi]);

  const navigateToProduct = (id: string) => {
    navigate({
      pathname: "/products",
      hash: `#${id.toLowerCase()}`,
    });
    smoothScrollToTop();
  };

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="group relative max-w-6xl overflow-hidden">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex select-none">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="relative grid h-[450px] w-full flex-none grid-cols-1 sm:h-[500px] md:h-[450px] md:grid-cols-2 lg:h-[500px]">
              <figure className="relative h-full w-full overflow-hidden bg-neutral-900">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-900/40 to-transparent md:hidden" />
              </figure>

              <div className="md:text-base-content absolute bottom-0 left-0 flex w-full flex-col justify-end p-6 text-neutral-100 transition-all duration-500 md:relative md:justify-center md:p-12">
                <span className="badge badge-outline mb-2 border-(--red) text-xs font-semibold tracking-widest text-(--red) uppercase">
                  {slide.subtitle}
                </span>
                <h2 className="mb-2 text-3xl font-black tracking-tight drop-shadow-sm sm:text-4xl md:mb-4 md:drop-shadow-none lg:text-5xl">
                  {slide.title}
                </h2>
                <p className="md:text-base-content/80 line-clamp-2 max-w-md text-sm text-neutral-300 sm:line-clamp-none md:text-base">
                  {slide.description}
                </p>

                <button
                  onClick={() => navigateToProduct(slide.title)}
                  className="btn mt-4 w-full border-none bg-(--red) font-bold tracking-wider text-white uppercase shadow-lg transition-all hover:bg-(--red)/90 hover:shadow-red-900/20 active:scale-95 md:w-40">
                  Details
                  <HugeiconsIcon icon={ArrowRight02Icon} size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute top-[35%] right-0 left-0 z-10 flex -translate-y-1/2 justify-between px-1 md:top-1/2 md:px-2">
        <button
          onClick={scrollPrev}
          className="btn btn-circle btn-neutral btn-sm lg:btn-md pointer-events-auto -translate-x-2 border-none opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:opacity-80"
          aria-label="Previous slide">
          ❮
        </button>
        <button
          onClick={scrollNext}
          className="btn btn-circle btn-neutral btn-sm lg:btn-md pointer-events-auto translate-x-2 border-none opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:opacity-80"
          aria-label="Next slide">
          ❯
        </button>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={cn(
              'aria-label="Go to slide" h-2 rounded-full transition-all duration-300',
              selectedIndex === index
                ? "w-8 bg-(--red)"
                : "bg-base-300 hover:bg-base-400 w-2",
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
