import type { ReactElement, ReactNode } from "react";

import { useNavigate } from "react-router";

import Sauces from "~/assets/icons/ic_sauces.png";
import Steak from "~/assets/icons/ic_steak.png";

import { CTA } from "~/components";

import CustomDivider from "./components/CustomDivider";

const Products = (): ReactElement => {
  const navigate = useNavigate();

  const renderWhyChooseProducts = (): ReactNode => {
    return (
      <section className="container mx-auto space-y-20 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold">
            WHY CHOOSE <span className="text-error">OUR BEEF PRODUCTS</span>?
          </h1>

          <p className="mx-auto w-full max-w-2xl px-2 text-lg leading-6 text-gray-600">
            Sunny Foods is committed to more than just great meat — we make sure
            that our beef products are of utmost quality to keep our customers
            satisfied.
          </p>
        </div>

        <CustomDivider />
      </section>
    );
  };

  return (
    <>
      <section className="container mx-auto justify-items-center space-y-10 px-5 py-20 lg:px-0">
        <p className="text-4xl font-bold md:text-5xl lg:text-6xl">Products</p>

        <div className="flex w-full flex-col justify-evenly gap-5 lg:flex-row">
          <button
            className="btn flex h-100 flex-col border-none bg-(--warm-red) text-5xl text-white lg:w-150"
            onClick={() => navigate("meats")}>
            <img src={Steak} alt="Steak" className="h-30" />
            <p>Look at our meat products</p>
          </button>

          <button
            className="btn flex h-100 flex-col border-none bg-(--warm-red) text-5xl text-wrap text-white lg:w-150"
            onClick={() => navigate("sauces-and-seasonings")}>
            <img src={Sauces} alt="Sauces" className="h-30" />
            Look at our sauces, gravies and seasonings
          </button>
        </div>
      </section>

      <main className="py-20">
        {renderWhyChooseProducts()}
        <CTA />
      </main>
    </>
  );
};

export default Products;
