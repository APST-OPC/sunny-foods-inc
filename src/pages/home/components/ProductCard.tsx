import { useState } from 'react';
interface IProductPreview {
  title: string;
  description: string;
  link: string;
}

const ProductCard = (props: IProductPreview) => {
  const { title, description, link } = props;
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleViewMore = () => {
    window.location.href = link;
  };
  return (
    <div
      className="card relative h-full w-full overflow-hidden shadow-lg shadow-black"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleViewMore}
    >
      {isHovered && (
        <div className="absolute flex h-full w-full flex-col items-center justify-center gap-3 bg-black/70 px-10">
          <p className="text-center text-xl font-bold text-white">{title.toUpperCase()}</p>
          <p className="text-center text-lg leading-5 font-semibold text-wrap text-white">
            {description}
          </p>
          <p className="absolute bottom-5 cursor-pointer text-center text-white hover:underline">
            view more
          </p>
        </div>
      )}
      <img
        src="https://media.istockphoto.com/id/1371751060/photo/grilled-medium-rare-top-sirloin-beef-steak-or-rump-steak-on-a-steel-tray-dark-background-top.jpg?s=612x612&w=0&k=20&c=svqnTZV_l7DP0QPCG8L_-f6k7LuBUA-cH9wiL8eJqUs="
        alt="Shoes"
        className="h-full w-full"
      />
    </div>
  );
};

export default ProductCard;
