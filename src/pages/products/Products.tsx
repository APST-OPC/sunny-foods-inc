import { useState } from 'react';
import { products } from './utils';

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

      <section className="container mx-auto grid gap-8 p-5 px-5 md:grid-cols-2 lg:grid-cols-3 lg:p-16 xl:grid-cols-4">
        {products.map((item) => (
          <div key={item.id} className="text-center">
            <figure className="b h-64 w-full drop-shadow-xl drop-shadow-gray-400">
              <img src={item.image} className="h-full w-full object-contain" />
            </figure>
            <div className="h-24 place-content-center space-y-1">
              <h6 className="grid text-xl font-bold">{item.title}</h6>
              <button
                className="btn btn-error btn-sm w-64 text-white shadow-none"
                onClick={() => handleView(item)}
              >
                Details
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Dialog Modal */}
      <dialog id="product-detail" className="modal modal-middle backdrop-blur-xs" open={showDetail}>
        <div className="modal-box max-w-3xl rounded-xl border border-white/40 bg-white/90 shadow-[0_0_40px_rgba(255,255,255,0.3)] backdrop-blur-xl">
          <figure className="mb-4 h-40 overflow-hidden rounded-lg">
            <img
              loading="lazy"
              src={selectedProduct?.image}
              alt={selectedProduct?.title.toLocaleLowerCase()}
              className="h-full w-full scale-150 object-cover"
            />
          </figure>

          <header className="text-2xl font-semibold">
            <h3>{selectedProduct?.title}</h3>
            <div className="bg-success/90 mb-6 h-1 w-20 rounded" />
          </header>

          <div className="mb-4 flex flex-wrap gap-2">
            <span className="badge badge-outline text-(--red)">Premium Cut</span>
            <span className="badge badge-outline text-(--olive-green)">Fresh</span>
            <span className="badge badge-outline text-(--golden-yellow)">Best Seller</span>
          </div>

          <div className="flex w-full flex-col text-gray-500">
            <div className="divider">
              <span className="text-sm">Details</span>
            </div>
          </div>

          <p className="py-4 text-justify leading-6 text-gray-700">
            {selectedProduct?.description}
          </p>

          <div className="modal-action">
            <button
              className="btn btn-error w-full text-white shadow-lg hover:shadow-xl sm:w-36"
              onClick={() => setShowDetail(false)}
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
    </main>
  );
};

export default Products;
