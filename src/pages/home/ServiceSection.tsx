import {
  ContainerTruck02Icon,
  CustomerSupportIcon,
  PackageDelivered01FreeIcons,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useNavigate } from "react-router";

import BrandingAndPackaging from "~/assets/meat-carousel/branding-packaging-service.png";
import BusinessSupportService from "~/assets/meat-carousel/business-support-service.png";
import LogisticService from "~/assets/meat-carousel/cold-storage-logistics.png";

const serviceData = [
  {
    id: 1,
    icons: (
      <HugeiconsIcon
        icon={PackageDelivered01FreeIcons}
        className="h-6 w-6"
        strokeWidth={1.5}
      />
    ),
    image: BrandingAndPackaging,
    title: "Branding & Packaging Services",
    description:
      "Comprehensive private label and OEM manufacturing solutions. We handle everything from custom portion specifications to regulatory-compliant retail packaging and branding.",
    bullets: [
      "Custom Meat Orders",
      "Packaging & Labelling",
      "OEM / Private Label",
    ],
  },
  {
    id: 2,
    icons: (
      <HugeiconsIcon
        icon={ContainerTruck02Icon}
        className="h-6 w-6"
        strokeWidth={1.5}
      />
    ),
    image: LogisticService,
    title: "Wholesale & Logistics Services",
    description:
      "High-volume bulk wholesale supply backed by secure distribution networks. We ensure massive product quantities are handled safely through strict, uninterrupted cold chain logistics.",
    bullets: ["Bulk Ordering & Wholesale", "Cold Chain Logistics & Handling"],
  },
  {
    id: 3,
    icons: (
      <HugeiconsIcon
        icon={CustomerSupportIcon}
        className="h-6 w-6"
        strokeWidth={1.5}
      />
    ),
    image: BusinessSupportService,
    title: "Business Support Services",
    description:
      "Dedicated enterprise partnership and post-delivery operations. Our commercial desk coordinates unbroken supply pipelines and proactive, ongoing customer support.",
    bullets: ["B2B Customer Service", "Distribution Support"],
  },
];

export default function ServicesSection() {
  const navigate = useNavigate();

  return (
    <section className="container mx-auto flex flex-col items-center justify-center py-20">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <header className="mb-20 grid grid-cols-1 items-end gap-4 border-b border-[#E1D4C7] pb-12 md:grid-cols-12">
            <div className="md:col-span-8">
              <p className="mb-2 block text-sm font-bold tracking-widest text-(--red) uppercase">
                Our Core Capabilities
              </p>
              <h2 className="text-base-content text-4xl leading-[0.95] font-black tracking-tighter sm:text-6xl">
                Made with Purpose. Delivered with Confidence.
              </h2>
            </div>
            <div className="md:col-span-4">
              <p className="text-base-content text-sm leading-relaxed font-light">
                We operate as a premier nationwide supplier, delivering
                efficient, high-standard protein solutions directly to retail,
                foodservice, and private label partners across the Philippines.
              </p>
            </div>
          </header>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {serviceData.map((service) => (
              <div
                key={service.id}
                data-aos="fade-up"
                className="group flex flex-col justify-between space-y-6 p-4 transition-shadow hover:shadow-2xl md:pt-0">
                <div className="space-y-6">
                  <header className="flex items-center justify-between">
                    <div className="rounded-full bg-[#262220]/5 p-3 text-(--red)">
                      {service.icons}
                    </div>
                    <span className="text-4xl font-black tracking-tighter text-(--red) transition-colors duration-300 group-hover:text-[#262220]">
                      0{service.id}
                    </span>
                  </header>

                  <figure className="aspect-4/3 w-full overflow-hidden bg-[#262220]">
                    <img
                      src={service.image}
                      alt={service.title.toLowerCase()}
                      className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                    />
                  </figure>

                  <div className="space-y-5">
                    <div className="text-xl font-bold tracking-tight text-[#262220]">
                      {service.title}
                      <div className="h-0.75 w-16 rounded-full bg-(--red)" />
                    </div>
                    <p className="text-base-content font-light/80 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
                <ul className="text-base-content list-disc border-t border-[#E1D4C7] pt-4 pl-5 text-sm font-medium">
                  {service.bullets.map((list, ids) => (
                    <li key={ids}> {list}</li>
                  ))}
                </ul>

                <button
                  onClick={() => navigate("/services")}
                  className="btn btn-sm w-full border-none bg-(--red) tracking-wider text-white uppercase shadow-lg transition-all hover:bg-(--red)/90 hover:shadow-red-900/20 active:scale-95">
                  learn more
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
