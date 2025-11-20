import type { ReactElement } from 'react';

interface IPreview {
  imageSrc: { title: string; image: string };
  openDetails: () => void;
}
const PreviewCard = ({ imageSrc, openDetails }: IPreview): ReactElement => {
  const { title, image } = imageSrc;
  return (
    <div className="flex flex-col items-center space-y-5">
      <div className="relative h-52 w-full overflow-hidden rounded-2xl shadow-lg shadow-gray-400 lg:h-72 lg:w-52">
        <img
          src={image}
          alt={title.toLowerCase()}
          className="aspect-square h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <button className="btn btn-error text-white" onClick={openDetails}>
        {title}
      </button>
    </div>
  );
};

export default PreviewCard;
