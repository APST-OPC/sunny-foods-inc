import { useNavigate } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';

export const CTA = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/talk-to-us');
    window.scrollTo(0, 0);
  };

  return (
    <section id="contact" className="px-6 py-24 md:px-0">
      <div className="mx-auto max-w-4xl space-y-10 rounded-3xl bg-white px-10 py-16 text-center shadow-2xl">
        <header className="grid place-content-center space-y-4">
          <h1
            data-aos="fade-right"
            data-aos-duration="2000"
            className="text-4xl leading-snug font-extrabold"
          >
            Power Your Business With a
            <span className="text-(--warm-red)"> Reliable Meat Supplier</span>
          </h1>

          <p
            data-aos="fade-right"
            data-aos-duration="3000"
            className="mx-auto max-w-2xl text-sm leading-relaxed text-gray-600 lg:text-lg"
          >
            Premium-quality meat, strict quality control, and customer-first service—tailored for
            restaurants, retailers, and large-scale distributors.
          </p>
        </header>

        <div data-aos="fade-up" className="mx-auto grid max-w-md gap-3 text-sm text-gray-700">
          <div className="flex items-center justify-center gap-2">
            <FaCheck className="text-(--warm-red)" /> Premium quality & strict standards
          </div>
          <div className="flex items-center justify-center gap-2">
            <FaCheck className="text-(--warm-red)" /> Reliable, consistent delivery
          </div>
          <div className="flex items-center justify-center gap-2">
            <FaCheck className="text-(--warm-red)" /> Exceptional Flavor & Juiciness
          </div>
        </div>

        <div className="divider mx-auto h-5 w-32 before:bg-linear-to-r before:from-[#F9F5F1] before:via-(--warm-red) before:to-(--warm-red) after:bg-linear-to-l after:from-[#F9F5F1] after:via-(--warm-red) after:to-(--warm-red)" />

        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center">
          <button
            onClick={handleNavigate}
            className="btn btn-success w-60 rounded-full font-bold text-white shadow-md hover:shadow-lg"
          >
            Talk to us
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
