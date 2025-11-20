import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Cow from '~/assets/ic_cow.png';
import Steak from '~/assets/ic_steak.png';
import StripLoin from '~/assets/strip-loin-cooked.jpg';
import Chuckeye from '~/assets/chuck-eye-steak-cooked.jpg';
import Ribeye from '~/assets/rib-eye-steak-cooked.jpg';

import { featureProducts, services } from './utils';
import { ProductCard, ServiceCard } from './components';

const images = [StripLoin, Chuckeye, Ribeye];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const navigate = useNavigate();

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
          src="https://img.freepik.com/premium-photo/top-view-juicy-cowboy-steak-black-plate_219193-2349.jpg"
          alt="beef"
          className="aspect-square h-[70vh] w-full"
        />

        <div className="hero-overlay" />

        <div className="hero-content text-center text-white">
          <div className="max-w-xl">
            <h1 className="font-heading mb-5 text-5xl md:font-bold">
              Premium Beef, Crafted to Perfection
            </h1>
            <p className="mb-5 text-lg">
              Handpicked premium beef — from Wagyu-style cubes and Black Pepper Steaks to our
              signature Strip Loin, Rib Eye, and Top Blade. Unmatched flavor, tenderness, and
              convenience.
            </p>
            <button className="btn btn-success w-80 border-0 md:w-40">Get Started</button>
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

        <div className="flex flex-row flex-wrap justify-center-safe gap-5">
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

      <section id="contact" className="px-6 py-20 md:px-0">
        <div className="mx-auto max-w-4xl space-y-10 rounded-2xl bg-white py-16 text-center shadow-xl">
          <header className="grid place-content-center">
            <h1 className="max-w-2xl text-center text-4xl font-bold">
              Your Growth Starts With the <span className="text-error">Right Supply Partner</span>
            </h1>
          </header>

          <p className="mx-auto max-w-2xl px-5 text-sm leading-relaxed text-gray-600 lg:text-lg">
            Empower your business with a supply partner that delivers quality, consistency, and
            customer-first service.
          </p>

          <div className="divider mx-auto w-44" />

          <button
            onClick={() => navigate('/contact')}
            className="btn btn-success w-60 font-medium text-white transition-all"
          >
            Reach Out Today
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;
