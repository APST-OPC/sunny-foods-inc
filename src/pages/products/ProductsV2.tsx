import {
  ArrowDown02Icon,
  Cancel01Icon,
  FilterMailIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useEffect, useRef, useState } from "react";

import { cn } from "~/libs/cn";

import MeatData from "./meat.json";
import SaucesData from "./sauces.json";
import SteakData from "./steak.json";

interface CatalogItem {
  id?: number;
  title: string;
  description: string;
  image: string;
  tags?: string[];
}

interface CatalogCategory {
  category: string;
  items: Pick<CatalogItem, "id" | "description" | "image" | "title">[];
}

interface CatalogSection {
  data: CatalogCategory[];
  folder: string;
}

const CATALOG_SECTIONS: CatalogSection[] = [
  { data: SteakData, folder: "steak-series" },
  { data: MeatData, folder: "core-products" },
  { data: SaucesData, folder: "sauces" },
];

const ProductItem = ({ description, image, title }: CatalogItem) => {
  return (
    <div className="group card relative cursor-pointer overflow-hidden rounded-none">
      <figure className="relative aspect-square w-full overflow-hidden bg-stone-300">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
      </figure>

      <div className="card-body mt-2 gap-0 p-0">
        <h3 className="text-base-content text-base font-semibold tracking-wide transition-colors lg:text-lg">
          {title}
        </h3>
        <p className="text-sm leading-relaxed font-light">{description}</p>
      </div>
    </div>
  );
};

const triggerButtonStyles =
  "btn btn-link group h-auto min-h-0 p-0 font-medium tracking-widest text-stone-600 uppercase no-underline hover:text-stone-500 hover:no-underline ";

const TriggerButton = ({ activeCategory }: { activeCategory: string }) => {
  return (
    <button className={triggerButtonStyles}>
      <HugeiconsIcon
        icon={FilterMailIcon}
        size={16}
        color="currentColor"
        strokeWidth={1.2}
      />
      <span className="capitalize">
        Category:
        <span className="ml-1 font-bold underline underline-offset-4">
          {activeCategory === "all" ? "Show All" : activeCategory}
        </span>
      </span>
      <span className="text-[10px] text-stone-400 transition-transform duration-200 group-hover:translate-y-0.5">
        <HugeiconsIcon
          icon={ArrowDown02Icon}
          size={16}
          color="currentColor"
          strokeWidth={1.2}
        />
      </span>
    </button>
  );
};

interface DropdownContentProps {
  allCategories: string[];
  activeCategory: string;
  onSelectCategory: (category: string, isMobile: boolean) => void;
}
const DropdownContent = ({
  allCategories,
  activeCategory,
  onSelectCategory,
}: DropdownContentProps) => {
  return (
    <ul className="dropdown-content menu z-50 mt-2 w-80 gap-0.5 rounded-none border border-stone-200 bg-white p-1 text-xs tracking-wider text-stone-700 uppercase shadow-md">
      {allCategories.map((category) => (
        <li key={category}>
          <button
            onClick={() => onSelectCategory(category, false)}
            className={cn(
              "justify-start rounded-none py-2 text-left text-base capitalize hover:bg-stone-50",
              activeCategory === category &&
                "bg-stone-100 font-bold text-stone-950",
            )}>
            {category === "all" ? "Show All" : category}
          </button>
        </li>
      ))}
    </ul>
  );
};

const TriggerDrawer = ({ activeCategory }: { activeCategory: string }) => {
  return (
    <label
      htmlFor="mobile-filter-drawer"
      className={cn(triggerButtonStyles, "md:hidden")}>
      <HugeiconsIcon
        icon={FilterMailIcon}
        size={16}
        color="currentColor"
        strokeWidth={1.2}
      />
      <span className="capitalize">
        Category:
        <span className="ml-1 font-bold underline underline-offset-4">
          {activeCategory === "all" ? "Show All" : activeCategory}
        </span>
      </span>
      <span className="text-[10px] text-stone-400 transition-transform duration-200 group-hover:translate-y-0.5">
        <HugeiconsIcon
          icon={ArrowDown02Icon}
          size={16}
          color="currentColor"
          strokeWidth={1.2}
        />
      </span>
    </label>
  );
};

type DrawerContentProps = DropdownContentProps;
const DrawerContent = ({
  activeCategory,
  allCategories,
  onSelectCategory,
}: DrawerContentProps) => {
  return (
    <div className="drawer-side z-50">
      <label
        htmlFor="mobile-filter-drawer"
        aria-label="close sidebar"
        className="drawer-overlay"
      />
      <div className="menu flex min-h-full w-80 flex-col gap-6 bg-white p-0 text-stone-800">
        <div className="flex items-center justify-between border-b border-b-stone-200 p-6 shadow-xs">
          <div>
            <h2 className="mb-1 text-xs tracking-widest text-stone-400 uppercase">
              Catalog
            </h2>
            <p className="text-base font-light tracking-tight text-stone-900">
              Select Category
            </p>
          </div>
          <label
            htmlFor="mobile-filter-drawer"
            className="btn btn-circle btn-sm">
            <HugeiconsIcon icon={Cancel01Icon} />
          </label>
        </div>

        <ul className="flex flex-col gap-1 p-6 text-base tracking-wide uppercase">
          {allCategories.map((category) => (
            <li key={category}>
              <button
                onClick={() => onSelectCategory(category, true)}
                className={cn(
                  "justify-between rounded-none border border-transparent px-4 py-3 text-left capitalize",
                  activeCategory === category
                    ? "bg-stone-900 font-medium text-white"
                    : "text-stone-600 hover:bg-stone-50",
                )}>
                {category === "all" ? "Show All" : category}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ProductsV2 = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [isStuck, setIsStuck] = useState(false);

  const sentinelRef = useRef<HTMLDivElement>(null);
  const drawerToggleRef = useRef<HTMLInputElement>(null);

  const allCategories = [
    "all",
    ...CATALOG_SECTIONS.flatMap(({ data }) => data.map((cat) => cat.category)),
  ];

  const handleCategorySelect = (category: string, isMobile = false) => {
    setActiveCategory(category);

    if (isMobile) {
      if (drawerToggleRef.current) {
        drawerToggleRef.current.checked = false;
      }
    } else if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  useEffect(() => {
    const currentSentinel = sentinelRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsStuck(!entry.isIntersecting);
      },
      {
        rootMargin: "-64px 0px 0px 0px",
        threshold: [0],
      },
    );

    if (currentSentinel) {
      observer.observe(currentSentinel);
    }

    return () => {
      if (currentSentinel) {
        observer.unobserve(currentSentinel);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <div className="drawer">
      <input
        id="mobile-filter-drawer"
        type="checkbox"
        className="drawer-toggle"
        ref={drawerToggleRef}
      />

      <div className="drawer-content">
        <main className="flex-1 py-16">
          <header className="container mx-auto px-10 py-12">
            <div className="space-y-3">
              <h1 className="text-4xl leading-[0.95] font-black tracking-tighter text-[#262220] sm:text-6xl">
                The Masterpiece Collection
              </h1>
              <p className="text-base-content max-w-xl text-base leading-relaxed font-light">
                Curated for the discerning palate. Exceptional quality, crafted
                without compromise.
              </p>
            </div>
          </header>

          <div ref={sentinelRef} className="h-px w-full bg-transparent" />
          <div
            className={cn(
              "sticky top-19 z-40 mb-12 px-5 transition-colors duration-300",
              isStuck ? "bg-white shadow-xs" : "bg-transparent",
            )}>
            <div
              className={cn(
                "container mx-auto flex items-center justify-between px-6 py-7",
                isStuck ? "border-none" : "border-b border-stone-200",
              )}>
              <div className="dropdown dropdown-bottom hidden md:block">
                <TriggerButton activeCategory={activeCategory} />
                <DropdownContent
                  allCategories={allCategories}
                  activeCategory={activeCategory}
                  onSelectCategory={handleCategorySelect}
                />
              </div>

              <TriggerDrawer activeCategory={activeCategory} />
            </div>
          </div>

          <section className="container mx-auto flex flex-col gap-16 px-10">
            {CATALOG_SECTIONS.map(({ data, folder }) =>
              data.map((categoryGroup, catIndex) => {
                const isVisible =
                  activeCategory === "all" ||
                  activeCategory === categoryGroup.category;

                if (!isVisible) return null;

                return (
                  <div
                    key={`${folder}-${catIndex}`}
                    className="flex flex-col gap-3">
                    <div className="text-base-content font-sans text-2xl font-semibold tracking-wider capitalize">
                      {categoryGroup.category}
                      <div className="h-0.75 w-16 rounded-full bg-(--red)" />
                    </div>
                    <p className="text-sm leading-relaxed font-light text-stone-400">
                      {categoryGroup.items.length} Items
                    </p>

                    <div className="grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
                      {categoryGroup.items.map((item) => {
                        const assetUrl = new URL(
                          `../../assets/products/${folder}/${item.image}`,
                          import.meta.url,
                        ).href;

                        return (
                          <ProductItem
                            key={item.id}
                            image={assetUrl}
                            title={item.title}
                            description={item.description}
                          />
                        );
                      })}
                    </div>
                  </div>
                );
              }),
            )}
          </section>
        </main>
      </div>

      <DrawerContent
        activeCategory={activeCategory}
        allCategories={allCategories}
        onSelectCategory={handleCategorySelect}
      />
    </div>
  );
};

export default ProductsV2;
