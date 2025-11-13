import SliceMeat from '~/assets/custom-meat.png';
import Wholesale from '~/assets/wholesale.png';
import Packaging from '~/assets/packaging-meat.png';
import Quality from '~/assets/high-quality.png';

import Cow from '~/assets/ic_cow.png';
import Steak from '~/assets/ic_steak.png';
import ProductCard from './components/ProductCard';

const services = [
  {
    icon: SliceMeat,
    title: 'Custom Meat Orders',
    description:
      'Choose your preferred cuts, portion sizes, and packaging — all customized to meet your specific cooking and dining needs.',
  },
  {
    icon: Wholesale,
    title: 'Bulk Ordering & Wholesale',
    description:
      'We provide large-scale meat supply for restaurants, retailers, and events — ensuring consistent quality and timely delivery.',
  },
  {
    icon: Packaging,
    title: 'Packaging & Labelling',
    description:
      'All products are professionally vacuum-sealed, labeled, and date-marked to maintain freshness and ensure easy storage.',
  },
  {
    icon: Quality,
    title: 'Food Safety & Quality Assurance',
    description:
      'We prioritize food safety and consistent quality so every order meets the highest standards.',
  },
];

const Home = () => {
  return (
    <main>
      <section className="hero relative min-h-[70vh]">
        <img
          src="https://img.freepik.com/premium-photo/top-view-juicy-cowboy-steak-black-plate_219193-2349.jpg"
          alt="beef"
          className="h-[70vh] w-full"
        />

        <div className="hero-overlay" />

        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-xl">
            <h1 className="mb-5 text-5xl font-bold"> Premium Beef, Crafted to Perfection</h1>
            <p className="mb-5 text-lg">
              Handpicked premium beef — from Wagyu-style cubes and Black Pepper Steaks to our
              signature Strip Loin, Rib Eye, and Top Blade. Unmatched flavor, tenderness, and
              convenience.
            </p>
            <button className="btn btn-active w-80 md:w-40">Get Started</button>
          </div>
        </div>
      </section>

      <section className="h-full bg-(--red) py-10 md:h-60 md:place-content-center">
        <div className="container mx-auto flex flex-col items-center justify-center gap-10 text-white md:flex-row">
          <div className="flex transform flex-col items-center gap-4 transition-all duration-300 hover:scale-105 md:flex-row">
            <img src={Cow} className="h-auto w-auto" alt="High-quality meat" />
            <div className="text-center md:text-left">
              <h6 className="text-2xl font-black">High-quality meat</h6>
              <p className="mt-1 text-lg">Sourced from trusted farms</p>
            </div>
          </div>

          <div className="divider divider-vertical md:divider-horizontal px-20 before:bg-white after:bg-white md:px-0" />

          <div className="flex transform flex-col items-center gap-4 transition-all duration-300 hover:scale-105 md:flex-row">
            <img src={Steak} className="h-auto w-auto" alt="Wide selection" />
            <div className="text-center md:text-left">
              <h6 className="text-2xl font-black">Wide selection</h6>
              <p className="mt-1 text-lg">Cuts for every recipe and occasion</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-base-200 px-6 py-16 text-center md:px-12 md:text-left">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 md:flex-row">
          <div className="flex-1 space-y-6">
            <h1 className="text-2xl leading-tight font-bold md:text-5xl">
              Make Every Dish Unforgettable
            </h1>
            <p className="text-lg text-gray-600">
              Sunny Foods Inc. delivers premium beef — trusted by chefs, restaurants, and retailers
              for unbeatable flavor, tenderness, and consistency.
            </p>
          </div>

          <div className="flex flex-1 justify-center md:justify-end">
            <img
              src={
                'https://media.istockphoto.com/id/535786572/photo/grilled-striploin-steak.jpg?s=612x612&w=0&k=20&c=F_vrvwIOWe3vBR2y16Dp4z6d46K1sIY3togU3VYjrpA='
              }
              alt="Premium Beef"
              className="aspect-video h-96 w-full max-w-md rounded-lg shadow-2xl shadow-red-950/80"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto space-y-10 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold">
            WHAT <span className="text-error">WE</span> DO
          </h1>

          <p className="mx-auto w-full max-w-2xl px-2 text-lg leading-6 text-gray-600">
            Sunny Foods is committed to more than just great meat — we provide dependable service
            and tailored solutions to keep our customers satisfied.
          </p>
        </div>

        <div className="flex flex-row flex-wrap justify-center-safe gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="card bg-base-100 border-base-200 w-full max-w-xs shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="card-body items-center text-center">
                <div className="mb-4 text-5xl">
                  <img src={service.icon} alt={service.title} className="h-20 w-20" />
                </div>
                <h3 className="card-title text-xl font-bold">{service.title}</h3>
                <p className="text-base-content/80">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative bg-[url('~/assets/bg-signiture-steak.webp')] bg-cover bg-center py-20">
        <div className="absolute inset-0 bg-linear-to-bl from-[rgba(200,161,117,0.4)] via-[rgba(184,28,33,0.2)] to-[rgba(0,108,45,0.2)] backdrop-blur-sm" />
        <div className="relative container mx-auto space-y-10 text-white">
          <div className="text-center">
            <h1 className="text-4xl font-bold">
              Our Signiture <span className="text-error">Steak</span> Series
            </h1>
            <p className="mt-2 px-2 text-lg leading-6">
              Experience the difference of truly exceptional meat
            </p>
          </div>

          <div className="flex flex-col justify-center-safe gap-5 lg:flex-row">
            {[...Array(3)].map((_, ids) => (
              <ProductCard
                key={ids}
                title="Classic Meat"
                description="Medium sized cut"
                link="./products/classic-meat"
              />
            ))}
          </div>

          <h1 className="text-center text-4xl font-bold">
            ...And there&apos;s <span className="text-error">more!</span>
          </h1>
        </div>
      </section>
    </main>
  );
};

export default Home;
