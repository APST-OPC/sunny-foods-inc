import { useEffect, useState } from 'react';

import Cow from '~/assets/ic_cow.png';
import Steak from '~/assets/ic_steak.png';
import StripLoin from '~/assets/strip-loin-cooked.jpg';
import Chuckeye from '~/assets/chuck-eye-steak-cooked.jpg';
import Ribeye from '~/assets/rib-eye-steak-cooked.jpg';
import BannerHead from '~/assets/ai-generated-banner-head-v3.png';

import { featureProducts, services } from './utils';
import { ProductCard, ServiceCard } from './components';

import { CTA } from '~/components';

const images = [StripLoin, Chuckeye, Ribeye];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <section className="hero relative min-h-[70vh]">
        <img
          src={BannerHead}
          alt="beef"
          className="aspect-square h-[70vh] w-full bg-linear-to-b from-red-950 via-red-700 to-red-950 object-cover object-center"
          loading="eager"
        />

        <div className="hero-overlay" />

        <div className="z-20 p-5 text-center text-white md:p-0 md:text-start">
          <div className="max-w-xl lg:absolute lg:bottom-5 lg:left-10">
            <p className="font-heading text-4xl md:font-bold lg:text-6xl">Premium Beef,</p>
            <p className="font-heading mb-5 text-4xl md:font-bold lg:text-6xl">
              Crafted to Perfection
            </p>
            <p className="text-md mb-5 lg:text-lg">
              Handpicked premium beef — from Wagyu-style cubes and Black Pepper Steaks to our
              signature Strip Loin, Rib Eye, and Top Blade. Unmatched flavor, tenderness, and
              convenience.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-error h-full py-10 md:h-60 md:place-content-center">
        <div className="container mx-auto flex flex-col items-center justify-center gap-10 text-white md:flex-row">
          <div className="flex transform flex-col items-center gap-4 md:flex-row">
            <img src={Cow} className="h-auto w-auto" alt="High-quality meat" />
            <div className="text-center md:text-left">
              <h6 className="text-2xl font-black">High-quality meat</h6>
              <p className="mt-1 text-lg">Sourced from trusted farms</p>
            </div>
          </div>

          <div className="divider divider-vertical md:divider-horizontal px-20 before:bg-white after:bg-white md:px-0" />

          <div className="flex transform flex-col items-center gap-4 md:flex-row">
            <img src={Steak} className="h-auto w-auto" alt="Wide selection" />
            <div className="text-center md:text-left">
              <h6 className="text-2xl font-black">Wide selection</h6>
              <p className="mt-1 text-lg">Cuts for every recipe and occasion</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-base-100 px-6 py-16 text-center md:px-12 md:text-left">
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
                  className={`carousel-item w-full transition-all ${
                    index === currentSlide ? 'opacity-100' : 'absolute opacity-0'
                  }`}
                >
                  <img
                    src={src}
                    className="aspect-video h-72 w-full max-w-md rounded-lg"
                    alt={src}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto space-y-10 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold">
            WHAT <span className="text-error">WE</span> DO
          </h1>

          <p className="mx-auto w-full max-w-2xl px-2 text-lg leading-6 text-gray-600">
            Sunny Foods is committed to more than just great meat — we provide dependable service
            and tailored solutions to keep our customers satisfied.
          </p>
        </div>

        <div className="grid gap-5 place-items-center md:grid-cols-2 lg:grid-cols-4 px-5" data-aos="zoom-in-up">
          {services.map((service, ids) => (
            <ServiceCard
              key={ids}
              src={service.src}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </section>

      <section className="relative bg-[url('~/assets/bg-signiture-steak.webp')] bg-cover bg-center py-20">
        <div className="absolute inset-0 bg-linear-to-bl from-[rgba(200,161,117,0.2)] via-[rgba(184,28,33,0.2)] to-[rgba(0,108,45,0.2)] backdrop-blur-sm" />
        <div className="relative container mx-auto space-y-10 text-white">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold">
              Our Signature <span className="text-error"> Steak Series</span>
            </h1>
            <p className="font- mt-2 px-2 text-lg leading-6">
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
            ...And there&apos;s <span className="text-error">more!</span>
          </h1>
        </div>
      </section>

      <CTA />
    </main>
  );
};

export default Home;
