import Cow from '~/assets/ic_cow.png';
import Steak from '~/assets/ic_steak.png';

import { featureProducts, services } from './utils';
import { ProductCard, ServiceCard } from './components';
import { useEffect, useState } from 'react';

import Mail from '~/assets/mail.png';
import Phone from '~/assets/phone.png';
import Planet from '~/assets/planet-earth.png';

const images = [
  'https://t3.ftcdn.net/jpg/05/39/75/88/360_F_539758860_1vCdxgIx1oePzvxcdts80VYacH0hxOOO.jpg',
  'https://img.freepik.com/premium-photo/meat-steak_131550-9.jpg',
  'https://media.istockphoto.com/id/535786572/photo/grilled-striploin-steak.jpg?s=612x612&w=0&k=20&c=F_vrvwIOWe3vBR2y16Dp4z6d46K1sIY3togU3VYjrpA=',
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

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
            <button className="btn btn-success w-80 md:w-40">Get Started</button>
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
                    alt="Tailwind CSS Carousel component"
                  />
                </div>
              ))}
            </div>
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
        <div className="absolute inset-0 bg-linear-to-bl from-[rgba(200,161,117,0.4)] via-[rgba(184,28,33,0.2)] to-[rgba(0,108,45,0.2)] backdrop-blur-sm" />
        <div className="relative container mx-auto space-y-10 text-white">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Our Signature Steak Series</h1>
            <p className="mt-2 px-2 text-lg leading-6">
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
      {/* bg-linear-to-r from-[#B81C22] to-[#C8A175] */}
      <section id="contact" className="bg-error px-6 py-20 shadow-lg">
        <div className="mx-auto max-w-5xl space-y-6 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white">
            Let&apos;s <span className="text-black">Work Together</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-100">
            Whether you need wholesale meat distribution, reliable logistics, or partnership
            opportunities — we&apos;re here to make your operations smoother and faster.
          </p>

          <div className="mt-10 flex flex-row flex-wrap justify-center-safe gap-5 text-center sm:grid-cols-3">
            <ServiceCard
              src={Planet}
              title="Our Location"
              description="Bldg. 2 Blk. 1 Governors Park Drive Southwoods Industrial Park Mabuhay, Carmona,
                Cavite (4116)"
            />

            <ServiceCard
              src={Phone}
              title="Call Us"
              description="(+63) 939-237-9999 OR (+63) 918-739-9999"
            />

            <ServiceCard src={Mail} title="Email us" description="sales@sunnyfoods.com.ph" />
          </div>

          <button className="btn btn-success mt-10 w-80 font-semibold text-white md:w-40">
            Reach Out Today
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;
