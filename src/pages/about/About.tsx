import Warehouse2 from '~/assets/warehouse2.jpg';
import WareHouse from '~/assets/sunnyfood-warehouse.png';
import WagyuCubes from '~/assets/wagyu-cube-cook.jpg';

import { reasons, teams } from './utils';

const About = () => {
  return (
    <main className="space-y-20">
      <section id="company-profile" className="container mx-auto px-5 py-20">
        <header className="mb-14">
          <h1 className="text-4xl font-extrabold">About Sunny Foods Inc.</h1>
          <div className="h-1 w-28 bg-(--red)" />
        </header>

        <div className="mb-10 h-96 w-full overflow-hidden rounded-xl shadow-xl shadow-gray-400">
          <img
            loading="lazy"
            src={WareHouse}
            alt="sunny-food"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="space-y-10 text-justify text-lg text-wrap sm:text-xl">
          <p>
            Sunny Foods Inc. is a provider of premium-quality meat products crafted through advanced
            processing and responsible sourcing.{' '}
            <strong>
              We are committed to excellence, sustainability, and delivering dependable service to
              both retail and wholesale customers.
            </strong>
          </p>

          <p>
            <strong>
              We specialize in premium beef processing with a strong focus on quality, consistency,
              and customer satisfaction.{' '}
            </strong>
            Our product selection includes Wagyu-style beef cubes, Black Pepper Steaks, Burger
            Patties, and our signature Steak Series—Strip Loin, Chuck Eye, Rib Eye, and Top Blade.
            Every cut is designed to deliver exceptional taste, tenderness, and convenience.
          </p>

          <p>
            With a team driven by passion and precision, we ensure that every product meets the
            highest standards and every customer receives the value they deserve.
          </p>

          <h1 className="text-xl font-bold sm:text-3xl">
            <q>
              At Sunny Foods Inc., quality isn&apos;t just a standard —<strong> We Set Them</strong>
            </q>
          </h1>
        </div>
      </section>

      <section id="mission-vision" className="space-y-20">
        <article
          id="mission"
          className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 lg:flex-row"
        >
          <div
            data-aos="fade-down-right"
            data-aos-offset="500"
            className="flex-1 space-y-6 lg:px-10"
          >
            <h1 className="text-error text-5xl font-semibold md:text-7xl lg:text-9xl">
              Our Mission
            </h1>

            <p className="text-lg text-gray-700 md:text-xl">
              Our mission is to provide high-quality, delicious, and affordable food products that
              bring joy to every meal. We are committed to excellence, sustainability, and serving
              our customers with integrity and care.
            </p>
          </div>

          <figure className="aspect-video h-64 w-full flex-1 overflow-hidden rounded-2xl shadow-xl shadow-gray-400 md:h-96 lg:h-[500px]">
            <img
              src={WagyuCubes}
              alt={'WagyuCubes'}
              className="h-full w-full object-cover object-center"
            />
          </figure>
        </article>

        <article
          id="vision"
          className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-10 px-6 lg:flex-row"
        >
          <figure className="aspect-video h-64 w-full flex-1 overflow-hidden rounded-2xl shadow-xl shadow-gray-400 md:h-96 lg:h-[500px]">
            <img
              src={WagyuCubes}
              alt={'WagyuCubes'}
              className="h-full w-full object-cover object-center"
            />
          </figure>

          <div
            data-aos="fade-down-left"
            data-aos-offset="500"
            className="flex-1 space-y-6 lg:px-10"
          >
            <h1 className="text-error text-5xl font-semibold md:text-7xl lg:text-9xl">
              Our Vision
            </h1>

            <p className="text-lg text-gray-700 md:text-xl">
              To be a leading and trusted provider of premium frozen meat products, recognized
              across the retail and food service industries for our commitment to quality,
              operational excellence, and consistent value.
            </p>
          </div>
        </article>

        <article
          id="innovation"
          data-aos="fade-up"
          className="mx-auto max-w-7xl items-center space-y-3 px-6"
        >
          <h2 className="text-center text-4xl font-bold md:text-5xl lg:text-6xl">
            R&D & Innovation
          </h2>
          <div className="mx-auto h-1 w-28 bg-(--green)" />
          <p className="mx-auto max-w-3xl px-5 text-justify text-xl text-gray-700">
            At Sunny Foods, innovation is at the heart of everything we do. Our Research and
            Development (R&D) team is constantly exploring new ways to improve our products, develop
            new cuts of meat, and introduce healthier options. We also focus on improving packaging,
            enhancing flavor profiles, and developing convenient meal solutions for our customers..
          </p>
        </article>
      </section>

      <section className="relative bg-[url('~/assets/bg-signiture-steak.webp')] bg-cover bg-center py-20">
        <div className="absolute inset-0 bg-linear-to-bl from-[rgba(200,161,117,0.2)] via-[rgba(184,28,33,0.2)] to-[rgba(0,108,45,0.2)] backdrop-blur-sm" />

        <article className="relative z-10 container mx-auto space-y-10 px-5">
          <header className="text-center">
            <h1 className="text-4xl font-extrabold text-white md:text-6xl lg:text-8xl">
              What Sets Us Apart
            </h1>
          </header>

          <article className="mx-auto max-w-4xl space-y-3">
            <p className="text-justify text-xl leading-6 text-white">
              A Premium quality, consistency, and convenience in every cut. Whether you're a chef,
              restaurateur, hotel operator, or retailer, partnering with Sunny Foods Inc. means
              choosing dependable, premium-quality beef crafted for performance and consistency.
            </p>
          </article>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason, ids) => (
              <div
                key={ids}
                data-aos="zoom-in-up"
                className="card border-base-300 relative border bg-white p-6 shadow-xl"
              >
                <div className="border-success/50 absolute bottom-1/4 left-0 h-1/2 border-r-4" />
                <h3 className="text-xl font-bold"> {reason.title}</h3>
                <div className="h-1 w-24 bg-(--red)/50" />
                <p className="mt-2 text-gray-700">{reason.details}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section id="history">
        <article className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 lg:flex-row">
          <div data-aos="fade-right" className="flex-1 space-y-6 lg:px-10">
            <h1 className="text-error text-5xl font-semibold md:text-7xl lg:text-9xl">
              Our History
            </h1>
            <p className="text-justify text-lg text-gray-700 md:text-xl">
              Established in 2024, Sunny Foods Inc. develops high-quality meat products using
              cutting-edge technology and precision-engineered equipment.
            </p>
            <p className="text-justify text-lg text-gray-700 md:text-xl">
              We&apos;re passionate about delivering fresh, flavorful, and reliable meats that suit
              every meal from daily dinners to special occasions.
            </p>
          </div>

          <figure className="aspect-video h-64 w-full flex-1 overflow-hidden rounded-2xl shadow-xl shadow-gray-400 md:h-96 lg:h-[500px]">
            <img
              loading="lazy"
              src={Warehouse2}
              alt={'sunny-foods-inc-warehouse'}
              className="h-full w-full object-cover object-center"
            />
          </figure>
        </article>
      </section>

      <header className="space-y-3 text-center">
        <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl">Meet Our Dedicated Team</h2>
        <div className="mx-auto h-1 w-28 bg-(--green)" />
        <p className="mx-auto max-w-3xl px-5 text-justify text-lg text-gray-700">
          Our management team consists of industry experts with years of experience in the meat
          processing and food production sectors. Led by our CEO, Mr. Li Wei Heng, who has a strong
          background in both business management and food safety, our team ensures that Sunny Foods
          stays ahead of industry trends and continues to deliver top-quality products
        </p>
      </header>

      <section id="team" className="container mx-auto mb-20 bg-[#E8E5E0] py-20">
        <div className="mx-auto grid max-w-4xl grid-cols-2 place-content-center gap-5 px-2 md:grid-cols-3 lg:grid-cols-4 lg:px-5">
          {teams.map((team, ids) => (
            <div key={ids} className="w-auto">
              <div className="flex flex-col items-center text-center">
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img
                      src={team.img}
                      alt={team.name.toLocaleLowerCase()}
                      className="h-full w-full"
                    />
                  </div>
                </div>

                <h3 className="mt-2 text-xl font-extrabold">{team.name.toUpperCase()}</h3>
                <p className="text-md text-gray-700">{team.postion}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default About;
