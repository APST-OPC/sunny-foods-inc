import { BsPatchCheckFill } from "react-icons/bs";
import { FaTruckFast } from "react-icons/fa6";
import { RiCustomerService2Line } from "react-icons/ri";

import BulkOrder from "~/assets/services/bulk-ordering-wholesale.png";
import ColdChain from "~/assets/services/cold-chain-logistics.png";
import CustomOrder from "~/assets/services/custom-meat-cuts.png";
import Service from "~/assets/services/customer-support-fixed.png";
import Logistics from "~/assets/services/distribution-support-fixed.jpeg";
import MeatPackage from "~/assets/services/packageLabeling.png";

const PageContent = () => {
  const servicesHeading = () => {
    return (
      <div className="px-5">
        <h1 className="font-semibold tracking-wide text-(--red) uppercase">
          Explore Our Services
        </h1>
        <div className="divider" />
      </div>
    );
  };
  const branding = () => {
    return (
      <div className="container mx-auto" data-aos="fade-up">
        {servicesHeading()}
        <div className="flex flex-col-reverse place-items-start items-center md:grid md:grid-cols-2 md:p-5">
          <div className="mt-1 space-y-2 p-5 md:p-0">
            <h2 className="text-base-content text-4xl leading-[0.95] font-black tracking-tighter sm:text-6xl">
              Brand & Design
            </h2>
            <p className="text-base-content/80 max-w-xl text-xl">
              Develop distinctive food brands and market-ready products tailored
              to your vision, customers, and business goals.
            </p>
            <div className="relative mt-8 w-fit space-y-2 rounded-xl bg-white p-5">
              <h1 className="text-2xl font-bold">Packaging / Labeling</h1>
              <p className="text-base-content/80 max-w-lg text-justify">
                Custom packaging options, from vacuum-sealed portions to bulk
                orders, tailored to meet your business requirements.
              </p>
              <BsPatchCheckFill className="absolute top-4 left-0 size-8 -translate-x-4 text-green-700" />
            </div>
            <div className="relative w-fit space-y-2 rounded-xl bg-white p-5">
              <h1 className="text-2xl font-bold">OEM / Private Label</h1>
              <p className="text-base-content/80 max-w-lg text-justify">
                From product development to packaging and branding, our OEM and
                private label solutions help bring your vision to market with
                confidence.
              </p>
              <BsPatchCheckFill className="absolute top-4 left-0 size-8 -translate-x-4 text-green-700" />
            </div>
          </div>
          <img
            src={MeatPackage}
            alt="meat-packaging"
            className="h-full max-h-120 w-full object-cover object-right"
          />
        </div>
      </div>
    );
  };

  const logistics = () => {
    return (
      <div className="container mx-auto space-y-5 md:space-y-10 md:p-5">
        <div className="w-fit space-y-2 p-5 md:p-0" data-aos="fade-right">
          <h2 className="text-base-content text-4xl leading-[0.95] font-black tracking-tighter sm:text-6xl">
            Logistics & Distribution
          </h2>
          <p className="text-base-content/80 max-w-xl text-xl">
            Reliable logistics and distribution solutions ensuring timely,
            secure, and efficient product delivery nationwide.
          </p>
        </div>
        <div
          className="block space-y-2 md:grid md:grid-cols-2 md:gap-2 md:space-y-0"
          data-aos="zoom-in">
          <div className="group relative h-110 w-full overflow-hidden rounded-none bg-white shadow-sm">
            <figure className="h-full">
              <img
                src={CustomOrder}
                alt="custom-order"
                className="h-full w-full transition-all duration-200 group-hover:scale-105 group-hover:grayscale-0 md:grayscale"
              />
            </figure>
            <div className="absolute bottom-0 left-0 z-10 w-full bg-white p-5 md:bottom-10 md:w-fit">
              <h2 className="text-2xl font-bold">Custom Meat Orders</h2>
              <p className="max-w-sm text-justify">
                Custom meat orders tailored to your specifications, with
                flexible cuts, weights, and packaging designed to meet your
                exact requirements.
              </p>
            </div>
          </div>
          <div
            className="group relative h-110 w-full overflow-hidden rounded-none bg-white shadow-sm"
            data-aos="zoom-in">
            <figure className="h-full">
              <img
                src={BulkOrder}
                alt="custom-order"
                className="h-full w-full transition-all duration-200 group-hover:scale-105 group-hover:grayscale-0 md:grayscale"
              />
            </figure>
            <div className="absolute bottom-0 z-10 w-full bg-white p-5 md:top-0 md:right-10 md:h-fit md:w-fit">
              <h2 className="text-2xl font-bold">Bulk Ordering & Wholesale</h2>
              <p className="max-w-sm text-justify">
                Custom meat orders tailored to your specifications, with
                flexible cuts, weights, and packaging designed to meet your
                exact requirements.
              </p>
            </div>
          </div>
          <div
            className="group relative col-span-2 h-110 w-full overflow-hidden rounded-none bg-white shadow-sm"
            data-aos="zoom-in">
            <figure className="h-full">
              <img
                src={ColdChain}
                alt="custom-order"
                className="h-full w-full object-cover transition-all duration-200 group-hover:scale-105 group-hover:grayscale-0 md:grayscale"
              />
            </figure>
            <div className="absolute bottom-0 z-10 w-full bg-white p-5 md:w-1/2">
              <h2 className="text-2xl font-bold">
                Cold Chain Logistics & Handling
              </h2>
              <p className="max-w-sm text-justify">
                Reliable cold chain management ensures meat products remain
                fresh, safe, and in optimal condition from processing to
                delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const businessSupport = () => {
    return (
      <div className="relative space-y-10 bg-(--warm-red) py-20">
        <div className="container mx-auto md:grid md:grid-cols-2">
          <div
            className="group relative w-full md:min-h-150"
            data-aos="fade-up">
            <img
              src={Service}
              className="h-full w-full md:h-[80%] md:w-[80%]"
              alt="customer-support"
            />
            <div className="absolute right-0 bottom-0 hidden h-1/2 w-1/2 bg-(--warm-red) p-3 transition-all duration-300 group-hover:scale-110 md:block">
              <img
                src={Logistics}
                className="h-full w-full"
                alt="distribution-support"
              />
            </div>
          </div>
          <div
            className="relative flex w-full flex-col gap-5 p-10 md:min-h-150 md:justify-center"
            data-aos="fade-up">
            <h2 className="text-4xl leading-[0.95] font-black tracking-tighter text-white sm:text-6xl">
              Business Support
            </h2>
            <p className="text-justify text-base text-white">
              provides end-to-end solutions that help your business operate more
              efficiently and grow with confidence. From operational guidance
              and process improvement to strategic planning, documentation,
              compliance assistance, and ongoing consultation, we deliver
              reliable support tailored to your unique business needs, allowing
              you to focus on expanding your brand and achieving long-term
              success.
            </p>
            <div className="flex items-center rounded-2xl bg-white p-5">
              <div className="flex w-1/2 flex-col items-center justify-center gap-2">
                <RiCustomerService2Line className="size-10 w-1/3" />
                <p className="text-center font-semibold md:text-xl">
                  Customer Support
                </p>
              </div>
              <div className="divider divider-horizontal" />
              <div className="flex w-1/2 flex-col items-center justify-center gap-2">
                <FaTruckFast className="size-10 w-1/3" />
                <p className="text-center font-semibold md:text-xl">
                  Distribution Support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="space-y-20 py-20">
      {branding()}
      {businessSupport()}
      {logistics()}
    </section>
  );
};

const ServicesOffered = () => {
  return (
    <main>
      <PageContent />
    </main>
  );
};

export default ServicesOffered;
