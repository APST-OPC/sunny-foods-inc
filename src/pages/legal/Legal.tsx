import { Link } from "react-router";

import FoodSafetyOne from "~/assets/food-safety/food-safety-one.png";
import FoodSafetyTwo from "~/assets/food-safety/food-safety-two.png";
import PpeImage from "~/assets/food-safety/ppe.png";
import ProdAreaVisualOne from "~/assets/food-safety/prod-area-visual-1.png";
import ProdAreaVisualTwo from "~/assets/food-safety/prod-area-visual-2.png";
import ProdFacilityOne from "~/assets/food-safety/prod-facility-1.png";
import ProdFacilityThree from "~/assets/food-safety/prod-facility-3.png";

import { cn } from "~/libs/cn";

const images = [
  ProdAreaVisualOne,
  ProdAreaVisualTwo,
  FoodSafetyOne,
  FoodSafetyTwo,
  ProdFacilityThree,
  ProdFacilityOne,
];

const headingStyle = "text-4xl leading-[0.95] font-black tracking-tighter";
const subHeadingStyle = "text-2xl font-extrabold tracking-wide";
const descriptionStyle = "max-w-2xl text-base leading-relaxed font-light";

const Legal = () => {
  return (
    <div className="text-base-content antialiased">
      <header className="mx-auto max-w-6xl border-b border-[#E1D4C7] px-6 pt-24 pb-16 md:px-12">
        <div className="max-w-3xl">
          <p className="mb-2 block text-sm font-bold tracking-widest text-(--red) uppercase">
            Sunny Foods Inc. / Compliance Registry
          </p>
          <h1 className="text-4xl leading-[0.95] font-black tracking-tighter sm:text-6xl">
            Standards & <br />
            Operational Safety.
          </h1>
          <p className="mt-4 max-w-3xl place-self-center text-base leading-relaxed font-light">
            Our commitment to safety is foundational. We operate an advanced,
            data-monitored cold chain infrastructure and enforce strict
            sanitation workflows across every stage of processing, logistics,
            and delivery.
          </p>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-20 md:px-12 lg:grid-cols-12">
        <div className="h-fit lg:sticky lg:top-28 lg:col-span-4">
          <h2 className={headingStyle}>Quality and Food Safety</h2>
        </div>

        <div className="space-y-12 lg:col-span-8">
          <div className="space-y-4">
            <h3 className={subHeadingStyle}>Food Safety & Quality Assurance</h3>

            <ol className="text-base-content list-outside list-decimal space-y-6 pl-6">
              <li className="pl-2">
                <h6 className="text-neutral text-base font-bold tracking-wide uppercase">
                  Upholding Strict Hygiene and Safety Protocols
                </h6>
                <p className={descriptionStyle}>
                  We maintain rigorous hygiene standards and follow strict
                  safety protocols at every stage of production.
                </p>
              </li>

              <li className="pl-2">
                <h6 className="text-neutral text-base font-bold tracking-wide uppercase">
                  High Standards of Cleanliness and Quality
                </h6>
                <p className={descriptionStyle}>
                  All processing facilities meet high standards of cleanliness
                  and quality control.
                </p>
              </li>

              <li className="pl-2">
                <h6 className="text-neutral text-base font-bold tracking-wide uppercase">
                  Tested Processes for Consistency & Traceability
                </h6>
                <p className={descriptionStyle}>
                  Our batch tested processes ensure consistency and traceability
                  from production to delivery.
                </p>
              </li>
            </ol>
          </div>

          <div className="space-y-4">
            <h3 className={subHeadingStyle}>Certifications & Compliance</h3>
            <p className={descriptionStyle}>
              Sunny Foods Inc. strictly complies with all applicable local and
              national government regulations and possesses the proper licenses,
              permits, and certifications necessary for food manufacturing and
              distribution operations.
              <Link to="/legal/certificate" className="link link-primary ml-1">
                view certificates
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-20 md:px-12 lg:grid-cols-12">
        <div className="h-fit lg:sticky lg:top-28 lg:col-span-4">
          <h2 className={headingStyle}>Factory & Operational Capability</h2>
        </div>

        <div className="space-y-12 lg:col-span-8">
          <div className="space-y-4">
            <div>
              <h6 className={subHeadingStyle}>Production Facility</h6>
              <p className={cn("text-justify", descriptionStyle)}>
                Our state-of-the-art production facility is designed to handle
                large-scale meat processing efficiently and safely. We maintain
                strict food safety protocols, ensuring hygienic conditions
                throughout all stages of production.
              </p>
            </div>
            <div>
              <h6 className={subHeadingStyle}>R&D and Innovation</h6>
              <p className={cn("text-justify", descriptionStyle)}>
                We are committed to continuous innovation, with a dedicated R&D
                team working on developing new products, improving recipes, and
                refining flavors and textures. Our research focuses on
                sustainable practices, innovative packaging, and meeting the
                evolving demands of our clients and market.
              </p>
            </div>
            <div>
              <h6 className={subHeadingStyle}>Team & Leadership</h6>
              <p className={cn("text-justify", descriptionStyle)}>
                Our team is led by seasoned professionals with extensive
                experience in food manufacturing and safety standards. From
                quality assurance managers to skilled butchers, our leadership
                ensures precision and quality in every batch. We emphasize
                ongoing training and a culture of excellence in operations
                management.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl space-y-10 px-6 py-20 md:px-12">
        <h3 className={headingStyle}>PPE Uniform & Production Protocols</h3>

        <img
          src={PpeImage}
          alt="PPE-image"
          className="w-full justify-self-center rounded-2xl"
        />
      </section>

      <section className="container mx-auto mt-12 px-6 pb-16">
        <div className="grid grid-cols-2 gap-1 md:grid-cols-3">
          {images.map((image, i) => (
            <figure
              key={i}
              className="group border-base-200 bg-base-200 relative aspect-video overflow-hidden">
              <img
                src={image}
                alt={image}
                className="h-full w-full object-cover grayscale transition-transform duration-500 group-hover:scale-105 group-hover:grayscale-0"
              />
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
};
export default Legal;
