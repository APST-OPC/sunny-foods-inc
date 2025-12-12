import type { ReactElement, ReactNode } from 'react';
import type { IProducts } from './type';

import { useState } from 'react';

import { CTA } from '~/components';

import CustomDivider from './components/CustomDivider';
import PreviewCard from './components/PreviewCard';
import PreviewModal from './components/PreviewModal';

import { products } from './utils';

const Products = (): ReactElement => {
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<IProducts | null>(null);

  const handleView = (item: IProducts) => {
    setSelectedProduct(item);
    setShowDetail(true);
  };
  const handleShowDetail = (): void => setShowDetail(false);

  const renderHeader = (): ReactNode => {
    return (
      <header className="container mx-auto mb-14 px-4 text-center">
        <h1 className="text-center text-4xl font-bold md:text-5xl lg:text-6xl">
          Our Premium Meat Collection
        </h1>

        <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600">
          Select from our finest cuts, each prepared to deliver exceptional taste and quality.
        </p>
      </header>
    );
  };

  const renderProductList = (): ReactNode => {
    return (
      <section className="container mx-auto space-y-7 px-5">
        <CustomDivider />
        <div className="mx-auto grid max-w-3xl grid-cols-2 gap-5 lg:grid-cols-3">
          {products.map((data, index) => {
            return <PreviewCard key={index} imageSrc={data} openDetails={() => handleView(data)} />;
          })}
        </div>
        <CustomDivider />
      </section>
    );
  };

  return (
    <main className="py-20">
      {renderHeader()}
      {renderProductList()}
      <CTA />
      <PreviewModal product={selectedProduct} open={showDetail} handleClose={handleShowDetail} />
    </main>
  );
};

export default Products;
