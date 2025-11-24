import { useState } from 'react';
import { products } from './utils';

import PreviewCard from './components/PreviewCard';
import PreviewModal from './components/PreviewModal';

import { CTA } from '~/components';

interface IProducts {
  id: number;
  title: string;
  description: string;
  image: string;
}

const Products = () => {
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<IProducts | null>(null);

  const handleView = (item: IProducts) => {
    setSelectedProduct(item);
    setShowDetail(true);
  };

  return (
    <main className="py-20">
      <header className="container mx-auto mb-14 px-4 text-center">
        <h1 className="text-center text-4xl font-bold md:text-5xl lg:text-6xl">
          Our Premium Meat Collection
        </h1>

        <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600">
          Select from our finest cuts, each prepared to deliver exceptional taste and quality.
        </p>
      </header>

      <section className="container mx-auto space-y-7 px-5">
        <div className="divider mx-auto -mt-5 h-5 w-4/5 before:bg-linear-to-r before:from-[#F9F5F1] before:via-(--red) before:to-(--red) after:bg-linear-to-l after:from-[#F9F5F1] after:via-(--red) after:to-(--red)" />

        <div className="mx-auto grid max-w-3xl grid-cols-2 gap-5 lg:grid-cols-3">
          {products.map((data, index) => {
            return <PreviewCard key={index} imageSrc={data} openDetails={() => handleView(data)} />;
          })}
        </div>

        <div className="divider mx-auto h-5 w-4/5 before:bg-linear-to-r before:from-[#F9F5F1] before:via-(--red) before:to-(--red) after:bg-linear-to-l after:from-[#F9F5F1] after:via-(--red) after:to-(--red)" />
        <PreviewModal
          product={selectedProduct}
          open={showDetail}
          handleClose={() => setShowDetail(false)}
        />
      </section>

      <CTA />
    </main>
  );
};

export default Products;
