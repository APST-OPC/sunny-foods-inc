import FacilityImage from "~/assets/company-building.png";
import SoulmeatLogo from "~/assets/logos/soulmeat-logo-trans.png";
import YummeatLogo from "~/assets/logos/yummeat-logo-trans.png";
import Banner from "~/assets/meat-combo.jpg";

const PotentialHeader = () => {
  return (
    <header className="relative h-full w-full overflow-hidden bg-[#141414] px-6 pt-[20dvh] pb-16 md:pb-24">
      <figure className="absolute top-0 left-0 h-full w-full overflow-hidden">
        <img
          data-aos="zoom-out"
          data-aos-duration="3000"
          src={Banner}
          alt="banner"
          className="h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-linear-to-b from-[#141414]/40 via-[#141414]/70 to-[#141414]" />
      </figure>

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="relative z-10 container mx-auto mt-20 flex flex-col">
        <h1 className="max-w-5xl text-5xl leading-tight font-bold tracking-tight text-white">
          Trusted food supply partner serving{" "}
          <span className="inline-block bg-linear-to-r from-(--red) via-red-500 to-amber-500 bg-clip-text pb-1 text-transparent">
            retailers and foodservice operators
          </span>{" "}
          across the Philippines.
        </h1>
      </div>
    </header>
  );
};

const About = () => {
  return (
    <main className="bg-base-100 w-full">
      <PotentialHeader />

      <section className="relative z-10 container mx-auto px-6 py-20">
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="text-base-content space-y-6 border-l-4 border-(--light-brown)/40 pl-6 text-justify text-xl leading-relaxed md:pl-8 lg:col-span-7">
            <p data-aos="fade-up" data-aos-delay="100">
              At Sunny Foods Inc., we are passionate about creating food
              products that bring quality, value, and satisfaction to every
              table. Founded in 2024, we specialize in the manufacturing and
              distribution of premium frozen beef products, sauces, seasonings,
              and private label solutions designed to meet the needs of
              today&apos;s consumers and businesses.
            </p>
            <p data-aos="fade-up" data-aos-delay="200">
              Based in Carmona, Cavite, our manufacturing facility is equipped
              with modern technology and operates under strict quality and food
              safety standards. From product development to production and
              distribution, we are committed to delivering safe, consistent, and
              flavorful food products that our customers can trust.
            </p>
            <p data-aos="fade-up" data-aos-delay="300">
              We proudly serve retailers, foodservice operators, distributors,
              and business partners across the Philippines, building long-term
              relationships through reliability, innovation, and exceptional
              service.
            </p>

            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="border-base-content/10 mt-6 grid grid-cols-3 gap-4 border-t pt-6">
              <div className="text-center">
                <p className="text-2xl font-black text-(--green) md:text-4xl">
                  2024
                </p>
                <p className="text-base-content/80 text-xs font-semibold tracking-wider uppercase">
                  Established
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-black text-(--red) md:text-4xl">
                  Premium
                </p>
                <p className="text-base-content/80 text-xs font-semibold tracking-wider uppercase">
                  Beef Grade
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-black text-amber-500 md:text-4xl">
                  HQ
                </p>
                <p className="text-base-content/80 text-xs font-semibold tracking-wider uppercase">
                  Cavite, PH
                </p>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-left"
            data-aos-delay="200"
            className="group relative hidden lg:col-span-5 lg:block">
            <div className="absolute inset-0 translate-x-3 translate-y-3 transform rounded-2xl bg-(--light-brown)/10 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
            <figure className="border-base-content/10 bg-base-300 relative aspect-square overflow-hidden rounded-2xl shadow-xl">
              <img
                src={FacilityImage}
                alt="Sunny Foods Manufacturing Facility Line"
                className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="relative z-10 container mx-auto overflow-hidden px-6 py-20">
        <div className="relative mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <header className="space-y-6 lg:col-span-5" data-aos="fade-right">
            <p className="mb-2 block text-sm font-bold tracking-widest text-(--red) uppercase">
              Our Brands
            </p>
            <h2 className="text-base-content text-4xl leading-[0.95] font-black tracking-tighter sm:text-6xl">
              Meet Your New Favorites
            </h2>
            <p className="text-base-content/80 max-w-md text-justify text-xl leading-relaxed">
              With our brands such as Yummeat and Soulmeat, we are sure to
              deliver the best experience from our beef products, from farm to
              table.
            </p>
          </header>

          <div className="relative grid grid-cols-12 gap-4 py-4 lg:col-span-7">
            <div
              data-aos="fade-left"
              data-aos-delay="100"
              className="group z-10 col-span-7 -rotate-2 transform transition-all duration-500 ease-out hover:-translate-y-2 hover:rotate-0">
              <figure className="border-base-content/10 relative z-10 flex aspect-4/3 flex-col justify-between rounded-4xl border bg-white p-6 transition-colors hover:border-(--light-brown)/40">
                <img
                  src={SoulmeatLogo}
                  alt="Soulmeat Sunny Foods"
                  className="h-auto w-auto object-contain"
                />
              </figure>
              <div className="absolute inset-0 translate-x-3 translate-y-3 transform rounded-4xl bg-(--light-brown)/10 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
            </div>

            <div
              data-aos="fade-left"
              data-aos-delay="300"
              className="group relative z-20 col-span-7 col-start-6 -mt-16 rotate-3 transform transition-all duration-500 ease-out hover:-translate-y-2 hover:rotate-0 lg:-mt-12">
              <figure className="border-base-content/10 relative z-10 flex aspect-4/3 flex-col justify-between rounded-4xl border bg-white p-6 transition-colors hover:border-(--light-brown)/40">
                <img
                  src={YummeatLogo}
                  alt="Yummeat Sunny Foods"
                  className="h-auto w-auto object-contain"
                />
              </figure>
              <div className="absolute inset-0 translate-x-3 translate-y-3 transform rounded-4xl bg-(--light-brown)/10 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full overflow-hidden border-y border-white/10 bg-(--warm-red) px-6 py-28">
        <div className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 text-[12rem] font-black tracking-tighter text-amber-800 uppercase opacity-10 select-none md:text-[18rem]">
          Values
        </div>

        <div className="relative mx-auto max-w-5xl">
          <header
            className="mb-20 grid grid-cols-1 gap-4 lg:grid-cols-12"
            data-aos="fade-up">
            <div className="lg:col-span-5">
              <span className="mb-2 block font-mono text-xs font-bold tracking-[0.2em] text-amber-400 uppercase">
                Corporate Essence
              </span>
              <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                Our Core <br />
                Philosophy
              </h2>
            </div>
            <div className="flex items-end lg:col-span-7 lg:border-l lg:border-white/20 lg:pl-12">
              <p className="max-w-xl text-justify text-xl leading-relaxed font-light text-white">
                How we source, serve, and deliver culinary excellence across the
                archipelago, established on uncompromising food manufacturing
                standards.
              </p>
            </div>
          </header>

          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12">
            <div className="z-20 space-y-12 lg:col-span-5">
              <div
                data-aos="fade-up"
                className="relative rounded-2xl border border-white/10 bg-white p-10 shadow-2xl">
                <h3 className="flex items-center gap-3 text-2xl font-black tracking-tight text-neutral-900 uppercase">
                  Our Mission
                </h3>
                <div className="my-4 h-px w-12 bg-(--red)" />
                <p className="font-heading text-justify text-lg leading-relaxed text-neutral-700">
                  <q className="before:mr-1 before:font-serif before:text-2xl before:text-(--red)">
                    Our mission is to provide our customers with high-quality,
                    convenient, and delicious frozen beef products, crafted to
                    bring gourmet flavors and premium dining experiences into
                    every home and business.
                  </q>
                </p>
              </div>
            </div>

            <div className="relative grid grid-cols-1 items-end gap-8 md:grid-cols-12 lg:col-span-7">
              <div data-aos="fade-left" className="relative z-10 md:col-span-7">
                <div className="pointer-events-none absolute -inset-4 translate-x-2 translate-y-6 rounded-2xl border-2 border-amber-500/30" />
                <figure className="relative aspect-3/4 overflow-hidden rounded-2xl shadow-2xl transition-all duration-700">
                  <img
                    src={Banner}
                    alt="Premium Quality Food Supply"
                    className="h-full w-full object-cover object-center"
                  />
                </figure>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="relative z-20 mt-8 md:col-span-5 md:mt-0 md:-ml-12">
                <div className="rounded-2xl border border-white/5 bg-[#14110f] p-8 text-white shadow-2xl">
                  <h3 className="border-b border-white/10 pb-3 text-xl font-bold tracking-tight uppercase">
                    Our Vision
                  </h3>
                  <p className="font-heading mt-4 text-justify text-base leading-relaxed text-white">
                    Our vision is to be the leading producer of premium frozen
                    beef products, known for our commitment to quality,
                    innovation, and exceptional taste in the local and
                    international markets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-5xl px-6 py-28 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <header
            className="space-y-4 lg:sticky lg:top-8 lg:col-span-4"
            data-aos="fade-right">
            <h2 className="text-base-content text-4xl leading-[0.95] font-black tracking-tighter sm:text-6xl">
              Meet Our Dedicated Team
            </h2>
            <p className="text-base-content/80 text-justify text-xl leading-relaxed font-light">
              Our management team consists of industry experts with years of
              experience in the meat processing and food production sectors.
            </p>
          </header>

          <div
            data-aos="fade-up"
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-8">
            <div className="border-base-content/10 space-y-2 border-b pb-6 sm:col-span-2">
              <h3 className="text-base-content text-2xl font-black tracking-tight uppercase">
                Mr. WEI HENG LI
              </h3>
              <p className="text-base-content/80 text-sm font-semibold tracking-wider uppercase">
                Chief Executive Officer
              </p>
              <p className="text-base-content/80 mt-2 max-w-xl text-justify text-base leading-relaxed font-light">
                Has a strong background in both business management and food
                safety, our team ensures that Sunny Foods stays ahead of
                industry trends and continues to deliver top-quality products.
              </p>
            </div>

            <div className="bg-base-200/30 border-base-content/5 space-y-1 rounded-xl border p-4 transition-all duration-300 hover:shadow-md">
              <h4 className="text-base-content text-base font-black tracking-tight uppercase">
                ALFRED SENG
              </h4>
              <p className="text-base-content/80 text-sm font-semibold tracking-wider uppercase">
                Executive Assistant
              </p>
            </div>

            <div className="bg-base-200/30 border-base-content/5 space-y-1 rounded-xl border p-4 transition-all duration-300 hover:shadow-md">
              <h4 className="text-base-content text-base font-black tracking-tight uppercase">
                BONG AGUILAR
              </h4>
              <p className="text-base-content/80 text-sm font-semibold tracking-wider uppercase">
                Sales Director
              </p>
            </div>

            <div className="bg-base-200/30 border-base-content/5 space-y-1 rounded-xl border p-4 transition-all duration-300 hover:shadow-md">
              <h4 className="text-base-content text-base font-black tracking-tight uppercase">
                RODELLA MERCADO
              </h4>
              <p className="text-base-content/80 text-sm font-semibold tracking-wider uppercase">
                Asst. Prod. Supervisor
              </p>
            </div>

            <div className="bg-base-200/30 border-base-content/5 space-y-1 rounded-xl border p-4 transition-all duration-300 hover:shadow-md">
              <h4 className="text-base-content text-base font-black tracking-tight uppercase">
                DONA MULLET
              </h4>
              <p className="text-base-content/80 text-sm font-semibold tracking-wider uppercase">
                HR / Admin
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
