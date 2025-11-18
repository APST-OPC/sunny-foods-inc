interface ServiceCardProps {
  src: string;
  title: string;
  description: string;
}

export const ServiceCard = (props: ServiceCardProps) => {
  const { description, src, title } = props;

  return (
    <div className="card bg-base-100 border-base-200 w-80 max-w-xs shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
      <div className="card-body items-center text-center">
        <div className="mb-4 text-5xl">
          <img src={src} alt={title.toLowerCase()} className="h-20 w-20" />
        </div>
        <h3 className="card-title text-xl font-bold">{title}</h3>
        <p className="text-base-content/80">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
