import type { ReactElement } from 'react';

interface ContactCardProps {
  src: string;
  title: string;
  description: string | ReactElement;
}

export const ContactCard = (props: ContactCardProps) => {
  const { src, title, description } = props;

  return (
    <div className="card bg-base-100 border-base-200 w-full max-w-xs shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
      <div className="card-body items-center text-center">
        <h3 className="card-title items-end font-bold">
          <img src={src} alt={title.toLocaleLowerCase()} className="h-10 w-10" />
          {title}
        </h3>

        <p className="text-base-content/80 text-wrap">{description}</p>
      </div>
    </div>
  );
};

export default ContactCard;
