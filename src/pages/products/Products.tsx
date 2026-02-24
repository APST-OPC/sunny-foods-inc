import type { ReactElement, ReactNode } from 'react';
import type { IProductType, IProducts } from './type';

import { useState } from 'react';

import { CTA } from '~/components';

import CustomDivider from './components/CustomDivider';
import PreviewCard from './components/PreviewCard';
import PreviewModal from './components/PreviewModal';

import { products, whyChooseProducts } from './utils';
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
    return (
      <section className="container mx-auto space-y-7 px-5">
        <CustomDivider className="-mt-5" />

        <div className="space-y-5">
          <div role="tablist" className="tabs tabs-border justify-center">
            <a
              role="tab"
              className={cn(
                'tab hover:text-error text-lg transition-colors duration-300',
                selectedType === 'Core Products' &&
                  'tab-active before:text-error text-error font-bold'
              )}
              onClick={() => setSelectedType('Core Products')}
            >
              Core Products
            </a>

            <a
              role="tab"
              className={cn(
                'tab hover:text-error text-lg transition-colors duration-300',
                selectedType === 'Steak Series' &&
                  'tab-active before:text-error text-error font-bold'
              )}
              onClick={() => setSelectedType('Steak Series')}
            >
              Steak Series
            </a>
          </div>

          <div className="mx-auto grid max-w-3xl grid-cols-2 gap-5 lg:grid-cols-3">
            {products
              .filter((p) => p.type === selectedType)
              .map((data) => {
                return (
                  <PreviewCard key={data.id} imageSrc={data} openDetails={() => handleView(data)} />
                );
              })}
          </div>
        </div>

        <CustomDivider className="mt-5" />
      </section>
    );
  };

  const renderWhyChooseProducts = (): ReactNode => {
    return (
      <section className="container mx-auto space-y-20 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold">
            WHY CHOOSE <span className="text-error">OUR BEEF PRODUCTS</span>?
          </h1>

          <p className="mx-auto w-full max-w-2xl px-2 text-lg leading-6 text-gray-600">
            Sunny Foods is committed to more than just great meat — we make sure that our beef
            products are of utmost quality to keep our customers satisfied.
          </p>
        </div>

        <div className="grid place-items-center gap-5 px-5 md:grid-cols-2 lg:grid-cols-3">
          {whyChooseProducts.map(({ title, description, image }, ids) => (
            <div
              key={ids}
              className="card bg-base-100 border-base-200 w-full max-w-xs shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg md:max-w-md"
            >
              <div className="card-body items-center text-center">
                <div className="mb-4 text-5xl">
                  <img src={image} alt={title.toLowerCase()} className="h-14 w-14" />
                </div>
                <h3 className="card-title text-xl font-bold">{title}</h3>
                <p className="text-base-content/80">{description}</p>
              </div>
            </div>
          ))}
        </div>

        <CustomDivider className="mt-5" />
      </section>
    );
  };

  return (
    <main className="py-20">
      {renderHeader()}
      {renderProductList()}
      {renderWhyChooseProducts()}
      <CTA />
      <PreviewModal product={selectedProduct} open={showDetail} handleClose={handleShowDetail} />
    </main>
  );
};

export default Products;
