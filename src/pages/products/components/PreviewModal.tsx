import type { ReactElement, ReactNode } from 'react';
import { cn } from '~/libs/cn';

interface IProducts {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface IPreviewModal {
  product: IProducts | null;
  open: boolean;
  handleClose: () => void;
}

const PreviewModal = (props: IPreviewModal): ReactElement => {
  const { product, open, handleClose } = props;

  const imageFigure = (): ReactNode => {
    return (
      <figure className="mb-4 h-40 overflow-hidden rounded-lg">
        <img
          loading="lazy"
          src={product?.image}
          alt={product?.title.toLocaleLowerCase()}
          className="h-full w-full scale-150 object-cover"
        />
      </figure>
    );
  };
  const header = (): ReactNode => {
    return (
      <header className="text-2xl font-semibold">
        <h3>{product?.title}</h3>
        <div className="bg-success/90 mb-6 h-1 w-20 rounded" />
      </header>
    );
  };
  const tags = (): ReactNode => {
    return (
      <div className="mb-4 flex flex-wrap gap-2">
        <span className="badge badge-outline text-(--red)">Premium Cut</span>
        <span className="badge badge-outline text-(--olive-green)">Fresh</span>
        <span className="badge badge-outline text-(--golden-yellow)">Best Seller</span>
      </div>
    );
  };
  const subDivider = (): ReactNode => {
    return (
      <div className="divider text-gray-500">
        <span className="text-sm">Details</span>
      </div>
    );
  };
  const description = (): ReactNode => {
    return <p className="py-4 text-justify leading-6 text-gray-700">{product?.description}</p>;
  };
  const modalAction = (): ReactNode => {
    return (
      <div className="modal-action">
        <button
          className="btn btn-error w-full text-white shadow-lg hover:shadow-xl sm:w-36"
          onClick={handleClose}
        >
          Close
        </button>
      </div>
    );
  };
  return (
    <dialog id="product-detail" className="modal modal-middle backdrop-blur-xs" open={open}>
      <div
        className={cn(
          'modal-box max-w-3xl rounded-xl',
          'border border-white/40 bg-white/90',
          'shadow-[0_0_40px_rgba(255,255,255,0.3)] backdrop-blur-xl'
        )}
      >
        {imageFigure()}
        {header()}
        {tags()}
        {subDivider()}
        {description()}
        {modalAction()}
      </div>
    </dialog>
  );
};

export default PreviewModal;
