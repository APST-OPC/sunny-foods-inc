import { cn } from '~/libs/cn';
import {
  factoryCardContent,
  licenses,
  qualityAndFoodSafetyIcons,
  safetyCardContent,
  safetyPermits,
} from './utils';

import PpeImage from '~/assets/food-safety/ppe-protocol.png';
import ProdAreaVisualOne from '~/assets/food-safety/prod-area-visual-1.png';
import ProdAreaVisualTwo from '~/assets/food-safety/prod-area-visual-2.png';

const Legal = () => {
  return (
    <main className="space-y-5 py-20">
      <header className="mx-auto space-y-5 px-10 text-center">
        <h2 className="text-4xl font-bold md:text-6xl">Licenses and Safety</h2>
      </header>

      <div className="divider m-10 mx-auto h-5 w-4/5 before:bg-linear-to-r before:from-[#F9F5F1] before:via-(--red) before:to-(--red) after:bg-linear-to-l after:from-[#F9F5F1] after:via-(--red) after:to-(--red)" />

      <div className="flex flex-col gap-10 p-5">
        <section className="container mx-auto space-y-10">
          <h3 className="text-center text-4xl font-extrabold">Quality and Food Safety</h3>

          <div className="flex flex-wrap items-center justify-evenly py-10">
            {qualityAndFoodSafetyIcons.map((q, ids) => (
              <div
                key={ids}
                className="flex size-30 flex-col items-center justify-evenly space-y-3 text-center"
              >
                <img src={q.img} className="size-16 lg:size-20" />

                <span className="text-sm font-bold tracking-tight lg:text-lg">{q.description}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-5">
            {safetyCardContent.map(({ img, content }, ids) => (
              <div
                key={ids}
                className={cn(
                  'flex w-full max-w-7xl flex-col items-center gap-10 object-cover',
                  ids % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                )}
              >
                <img
                  src={img}
                  className="rounded-2xl object-cover shadow-xl shadow-gray-400 lg:h-100 lg:w-100"
                />

                <div className="space-y-5">
                  <p className="text-5xl font-semibold text-(--warm-red) md:text-6xl lg:text-7xl">
                    {content.title}
                  </p>

                  {content.subtitle && <p className="text-xl font-medium">{content.subtitle}</p>}

                  <ul className="list-inside list-disc text-lg">
                    {content.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="divider m-10 mx-auto h-5 w-4/5 before:bg-linear-to-r before:from-[#F9F5F1] before:via-(--red) before:to-(--red) after:bg-linear-to-l after:from-[#F9F5F1] after:via-(--red) after:to-(--red)" />

        <section className="container mx-auto max-w-7xl space-y-10">
          <h3 className="text-center text-4xl font-extrabold">
            PPE Uniform & Production Protocols
          </h3>

          <img src={PpeImage} className="w-full justify-self-center rounded-2xl" />

          <h3 className="text-center text-4xl font-extrabold">How the production area looks</h3>

          <div className="flex w-full flex-col items-center justify-center gap-5 lg:flex-row lg:px-2.5">
            <img src={ProdAreaVisualOne} className="rounded-2xl lg:w-1/2" />

            <img src={ProdAreaVisualTwo} className="rounded-2xl lg:w-1/2" />
          </div>
        </section>

        <div className="divider m-10 mx-auto h-5 w-4/5 before:bg-linear-to-r before:from-[#F9F5F1] before:via-(--red) before:to-(--red) after:bg-linear-to-l after:from-[#F9F5F1] after:via-(--red) after:to-(--red)" />

        <section className="container mx-auto space-y-10">
          <h3 className="text-center text-4xl font-extrabold">Factory & Operational Capability</h3>

          <div className="flex flex-col items-center gap-5">
            {factoryCardContent.map((f, ids) => (
              <div
                key={ids}
                className={cn(
                  'flex w-full max-w-7xl flex-col items-center gap-10 object-cover',
                  ids % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                )}
              >
                <img
                  src={f.img}
                  className="rounded-2xl object-cover shadow-xl shadow-gray-400 lg:h-100 lg:w-100"
                />

                <div className="space-y-5">
                  <p className="text-5xl font-semibold text-(--warm-red) md:text-6xl lg:text-7xl">
                    {f.title}
                  </p>

                  <p className="text-xl font-medium">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="divider m-10 mx-auto h-5 w-4/5 before:bg-linear-to-r before:from-[#F9F5F1] before:via-(--red) before:to-(--red) after:bg-linear-to-l after:from-[#F9F5F1] after:via-(--red) after:to-(--red)" />

        <section className="container mx-auto space-y-10">
          <div className="space-y-7">
            <p className="text-center text-4xl font-extrabold">Safety Permits</p>

            <div className="grid place-items-center lg:grid-cols-2 xl:grid-cols-4">
              {safetyPermits.map((license, ids) => (
                <div
                  key={ids}
                  className="space-y-5 items-center text-center transition-all duration-300 hover:scale-105"
                >
                  <img src={license.img} className="pointer-events-none size-80 rounded-2xl" />

                  <p className="text-lg font-bold">{license.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-7">
            <p className="text-center text-4xl font-extrabold">Licenses to Operate</p>

            <div className="grid place-items-center text-center lg:grid-cols-2 xl:grid-cols-4">
              {licenses.map((license, ids) => (
                <div
                  key={ids}
                  className="space-y-5 items-center transition-all duration-300 hover:scale-105"
                >
                  <img src={license.img} className="pointer-events-none size-80 rounded-2xl" />

                  <p className="text-lg font-bold">{license.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Legal;
