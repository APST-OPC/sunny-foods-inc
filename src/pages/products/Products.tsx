import type { ReactElement, ReactNode } from 'react';
import type { IProductType, IProducts } from './type';

import { useState } from 'react';

import { CTA } from '~/components';

import CustomDivider from './components/CustomDivider';
import PreviewCard from './components/PreviewCard';
import PreviewModal from './components/PreviewModal';

import { products } from './utils';
import { cn } from '~/libs/cn';

const Products = (): ReactElement => {
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<IProducts | null>(null);
  const [selectedType, setSelectedType] = useState<IProductType>('Core Products');

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
    const displayedProducts = products.filter((p) => p.type === selectedType);

    return (
      <section className="container mx-auto space-y-7 px-5">
        <CustomDivider />
        <div role="tablist" className="tabs tabs-border justify-center">
          <button
            role="tab"
            className={cn(
              'tab text-lg',
              selectedType === 'Core Products' && 'tab-active before:text-error text-error'
            )}
            onClick={() => setSelectedType('Core Products')}
          >
            Core Products
          </button>

          <button
            role="tab"
            className={cn(
              'tab text-lg',
              selectedType === 'Steak Series' && 'tab-active before:text-error text-error'
            )}
            onClick={() => setSelectedType('Steak Series')}
          >
            Steak Series
          </button>
        </div>

        <div className="mx-auto grid max-w-3xl grid-cols-2 gap-5 lg:grid-cols-3">
          {displayedProducts.map((data, index) => {
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
