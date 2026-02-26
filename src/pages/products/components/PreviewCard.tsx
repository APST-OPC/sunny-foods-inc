import type { ReactElement } from 'react';
import { useState } from 'react';
import { cn } from '~/libs/cn';

interface IPreview {
  imageSrc: { title: string; image: string };
  openDetails: () => void;
}
const PreviewCard = ({ imageSrc, openDetails }: IPreview): ReactElement => {
  const { title, image } = imageSrc;

  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="flex flex-col items-center space-y-5">
      <div className="relative h-52 w-full overflow-hidden rounded-2xl shadow-lg shadow-gray-400 lg:h-72 lg:w-52">
        <img
          src={image}
          alt={title.toLowerCase()}
          className={cn('aspect-square h-full w-full object-cover', isLoading && 'skeleton')}
          loading="lazy"
          onLoad={() => setIsLoading(false)}
          onError={() => setIsLoading(false)}
        />
      </div>
      <button
        className="btn border border-(--warm-red) bg-(--warm-red) text-white"
        onClick={openDetails}
      >
        {title}
      </button>
    </div>
  );
};

export default PreviewCard;
