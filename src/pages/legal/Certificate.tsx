import BarangayCert from "~/assets/certifications/barangay-clearance-cert.png";
import Bir from "~/assets/certifications/bir-cert.png";
import Fda from "~/assets/certifications/fda-license-cert.png";
import FireSafety from "~/assets/certifications/fire-safety-clearance.png";
import Sanitary from "~/assets/certifications/mayor-sanitary-permit-cert.png";
import MayorPerm from "~/assets/certifications/mayors-perm-cert.png";
import SanitaryCert from "~/assets/certifications/sanitary-permit-cert.png";
import Sec from "~/assets/certifications/sec-cert.png";

const certificates = [
  { img: Fda, description: "FDA License to Operate" },
  { img: Sanitary, description: "Mayor's Sanitary Permit to Operate" },
  { img: SanitaryCert, description: "Sanitary Permit to Operate" },
  { img: FireSafety, description: "Fire Safety Clearance" },
  { img: Sec, description: "SEC Certificate of Incorporation" },
  { img: Bir, description: "BIR Certificate of Registration" },
  { img: MayorPerm, description: "Mayor's Permit to Operate" },
  { img: BarangayCert, description: "Barangay Business Clearance" },
];

const Certificate = () => {
  return (
    <div className="container mx-auto space-y-10 py-20">
      <header className="mb-8 text-center">
        <h1 className="text-base-content text-4xl leading-[0.95] font-black tracking-tighter sm:text-6xl">
          Certifications & Compliance
        </h1>
      </header>

      <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-3">
        {certificates.map((certificate, index) => (
          <figure key={index} className="bg-base-100 flex flex-col">
            <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden bg-gray-50">
              <img
                src={certificate.img}
                alt={certificate.description}
                className="h-full w-full object-contain"
              />
            </div>

            <p className="text-base-content mt-2 w-full truncate p-4 text-center text-base font-bold tracking-wide">
              {certificate.description}
            </p>
          </figure>
        ))}
      </div>
    </div>
  );
};

export default Certificate;
