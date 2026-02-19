import BarangayCert from '~/assets/certifications/barangay-clearance-cert.webp';
import Bir from '~/assets/certifications/bir-cert.webp';
import Fda from '~/assets/certifications/fda-license-cert.webp';
import FireSafety from '~/assets/certifications/fire-safety-clearance.webp';
import Sanitary from '~/assets/certifications/mayor-sanitary-permit-cert.webp';
import MayorPerm from '~/assets/certifications/mayors-perm-cert.webp';
import SanitaryCert from '~/assets/certifications/sanitary-permit-cert.webp';
import Sec from '~/assets/certifications/sec-cert.webp';

interface ILicenseAndSafety {
  img: string;
  description: string;
}

const licenses: ILicenseAndSafety[] = [
  {
    img: Sec,
    description: 'SEC Certificate of Incorporation',
  },
  {
    img: Bir,
    description: 'BIR Certificate of Registration',
  },
  {
    img: MayorPerm,
    description: "Mayor's Permit to Operate",
  },
  {
    img: BarangayCert,
    description: 'Barangay Business Clearance',
  },
  {
    img: Fda,
    description: 'FDA License to Operate',
  },
];

const safetyPermits: ILicenseAndSafety[] = [
  {
    img: Sanitary,
    description: "Mayor's Sanitary Permit to Operate",
  },
  {
    img: SanitaryCert,
    description: 'Sanitary Permit to Operate',
  },
  {
    img: FireSafety,
    description: 'Fire Safety Clearance',
  },
];

const Legal = () => {
  return (
    <main className="space-y-5 py-20">
      <header className="mx-auto space-y-5 px-10 text-center">
        <h2 className="text-4xl font-bold md:text-6xl">Licenses and Safety</h2>
      </header>

      <section className="container mx-auto space-y-10">
        <div className="divider m-10 mx-auto h-5 w-4/5 before:bg-linear-to-r before:from-[#F9F5F1] before:via-(--red) before:to-(--red) after:bg-linear-to-l after:from-[#F9F5F1] after:via-(--red) after:to-(--red)" />

        
      </section>

      <section className="container mx-auto space-y-10">
        <div className="divider m-10 mx-auto h-5 w-4/5 before:bg-linear-to-r before:from-[#F9F5F1] before:via-(--red) before:to-(--red) after:bg-linear-to-l after:from-[#F9F5F1] after:via-(--red) after:to-(--red)" />

        <div className="space-y-5">
          <p>Safety Permits</p>

          <div className="grid grid-cols-4 place-items-center gap-10">
            {safetyPermits.map((license, ids) => (
              <div
                key={ids}
                className="space-y-5 text-center transition-all duration-300 hover:scale-105"
              >
                <img src={license.img} className="pointer-events-none size-80" />

                <p className="text-lg font-bold">{license.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <p>Licenses to Operate</p>

          <div className="grid grid-cols-4 place-items-center gap-10">
            {licenses.map((license, ids) => (
              <div
                key={ids}
                className="space-y-5 text-center transition-all duration-300 hover:scale-105"
              >
                <img src={license.img} className="pointer-events-none size-80" />

                <p className="text-lg font-bold">{license.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Legal;
