import { featureProducts } from './utils';

const About = () => {
  return (
    <div className="container mx-auto min-h-screen px-6 py-16">
      <div className="mx-auto w-full max-w-6xl space-y-20">
        {/* Header */}
        <div className="space-y-6 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-(--red) drop-shadow-sm">
            About Us
          </h1>

          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-700">
            "Sunny Foods is dedicated to providing premium-quality meat products crafted through
            advanced processing standards and responsible sourcing. We are committed to excellence,
            sustainability, and delivering dependable service to both retail and wholesale
            customers."
          </p>
        </div>

        {/* History */}
        <section className="flex gap-10 md:flex-row md:items-stretch">
          <div className="rounded-2xl border border-(--red) bg-linear-to-br from-white to-(--green)/10 p-10 shadow-[0_0_15px_rgba(0,108,45,0.08)] transition hover:shadow-[0_0_25px_rgba(0,108,45,0.15)] md:w-1/2">
            <h2 className="mb-6 text-center text-4xl font-bold tracking-wide text-(--red) md:text-left">
              History
            </h2>
            <p className="text-center text-lg leading-relaxed text-gray-700 md:text-left">
              Established in 2024, Sunny Food Inc. develops high-quality meat products using
              cutting-edge technology and precision-engineered equipment. We’re passionate about
              delivering fresh, flavorful, and reliable meats that suit every meal from daily
              dinners to special occasions.
            </p>
          </div>

          <div className="hidden md:block md:w-1/2">
            <img
              src={featureProducts[0].img}
              alt={featureProducts[0].title}
              className="h-full w-full rounded-2xl object-cover shadow-[0_0_15px_rgba(0,108,45,0.1)]"
            />
          </div>
        </section>

        {/* Mission */}
        <section className="flex gap-10 md:flex-row md:items-stretch">
          <div className="hidden md:block md:w-1/2">
            <img
              src={featureProducts[1].img}
              alt={featureProducts[1].title}
              className="h-full w-full rounded-2xl object-cover shadow-[0_0_15px_rgba(0,108,45,0.1)]"
            />
          </div>

          <div className="rounded-2xl border border-(--red) bg-linear-to-br from-white to-(--green)/10 p-10 shadow-[0_0_15px_rgba(0,108,45,0.08)] transition hover:shadow-[0_0_25px_rgba(0,108,45,0.15)] md:w-1/2">
            <h2 className="mb-6 text-center text-4xl font-bold tracking-wide text-(--red) md:text-right">
              Our Mission
            </h2>
            <p className="text-center text-lg leading-relaxed text-gray-700 md:text-right">
              Our mission is to provide high-quality, delicious, and affordable food products that
              bring joy to every meal. We are committed to excellence, sustainability, and serving
              our customers with integrity and care.
            </p>
          </div>
        </section>

        {/* Vision */}
        <section className="flex gap-10 md:flex-row md:items-stretch">
          <div className="rounded-2xl border border-(--red) bg-linear-to-br from-white to-(--green)/10 p-10 shadow-[0_0_15px_rgba(0,108,45,0.08)] transition hover:shadow-[0_0_25px_rgba(0,108,45,0.15)] md:w-1/2">
            <h2 className="tracking-widet mb-6 text-center text-4xl font-bold text-(--red) md:text-left">
              Our Vision
            </h2>
            <p className="text-center text-lg leading-relaxed text-gray-700 md:text-left">
              To be a leading and trusted provider of premium frozen meat products, recognized
              across the retail and food service industries for our commitment to quality,
              operational excellence, and consistent value.
            </p>
          </div>

          <div className="hidden md:block md:w-1/2">
            <img
              src={featureProducts[2].img}
              alt={featureProducts[2].title}
              className="h-full w-full rounded-2xl object-cover shadow-[0_0_15px_rgba(0,108,45,0.1)]"
            />
          </div>
        </section>

        <div className="my-10 flex flex-col items-center justify-center md:flex-row">
          <div className="mb-2 h-0.5 w-40 bg-(--green)/60 md:mb-0"></div>
          <div className="mx-4 text-lg font-semibold text-(--green)">TEAM STRUCTURE</div>
          <div className="mt-2 h-0.5 w-40 bg-(--green)/60 md:mt-0"></div>
        </div>

        {/* Organization Chart */}
        <section className="mt-10 flex flex-col items-center space-y-10 text-center">
          <h2 className="text-4xl font-bold text-(--red)">Organization Chart</h2>
          <p className="max-w-3xl text-lg text-gray-700">
            Meet the dedicated team behind Sunny Foods, working together to deliver quality,
            efficiency, and excellence every day.
          </p>

          <div className="flex flex-col items-center space-y-6">
            {/* CEO */}
            <div className="w-60 rounded-xl border border-(--green) bg-white px-6 py-4 shadow-[0_0_15px_rgba(0,108,45,0.1)] md:w-72">
              <h3 className="text-2xl font-extrabold text-(--red)">WEI HENG LI</h3>
              <p className="text-lg text-gray-700">CEO</p>
            </div>

            {/* Executive Assistant */}
            <div className="w-60 rounded-xl border border-(--green) bg-white px-6 py-4 shadow-[0_0_15px_rgba(0,108,45,0.1)] md:w-72">
              <h3 className="text-xl font-bold text-(--red)">ALFRED SENG</h3>
              <p className="text-gray-700">Executive Assistant</p>
            </div>

            {/* Managers Row */}
            <div className="flex flex-col flex-wrap justify-center gap-6 md:flex-row md:gap-12">
              <div className="w-60 rounded-xl border border-(--green) bg-white px-6 py-4 shadow-[0_0_15px_rgba(0,108,45,0.1)] md:w-72">
                <h3 className="text-xl font-bold text-(--red)">XIAO BIN</h3>
                <p className="text-gray-700">Production Manager</p>
              </div>
              <div className="w-60 rounded-xl border border-(--green) bg-white px-6 py-4 shadow-[0_0_15px_rgba(0,108,45,0.1)] md:w-72">
                <h3 className="text-xl font-bold text-(--red)">KIMBERLY ANAHAW</h3>
                <p className="text-gray-700">HR Manager</p>
              </div>
              <div className="w-60 rounded-xl border border-(--green) bg-white px-6 py-4 shadow-[0_0_15px_rgba(0,108,45,0.1)] md:w-72">
                <h3 className="text-xl font-bold text-(--red)">KIM IAN TAGUIAM</h3>
                <p className="text-gray-700">QA / QC</p>
              </div>
            </div>

            {/* Supervisors */}
            <div className="flex flex-col flex-wrap justify-center gap-6 md:flex-row md:gap-10">
              <div className="w-52 rounded-xl border border-(--green) bg-white px-6 py-4 shadow-[0_0_15px_rgba(0,108,45,0.1)] md:w-60">
                <h4 className="font-semibold text-(--red)">RODELLA MERCADO</h4>
                <p className="text-gray-700">Asst. Prod. Supervisor</p>
              </div>
              <div className="w-52 rounded-xl border border-(--green) bg-white px-6 py-4 shadow-[0_0_15px_rgba(0,108,45,0.1)] md:w-60">
                <h4 className="font-semibold text-(--red)">JB PATCHICOY</h4>
                <p className="text-gray-700">Team Leader</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
