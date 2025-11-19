import type { IContactUs, IContactUsCard } from './type';

import { FaFacebookSquare, FaViber } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

import { cn } from '~/libs/cn';

const contactBtns: IContactUs[] = [
  {
    contactIcon: <FaViber size={50} />,
    contactCTA: 'Chat with us',
    contactFn: () => window.open('viber://chat?number=%2B9392379999', '_blank'),
  },
  {
    contactIcon: <MdEmail size={50} />,
    contactCTA: 'Email us',
    contactFn: () => window.open('mailto:sales@sunnyfoods.com.ph', '_blank'),
  },
  {
    contactIcon: <FaFacebookSquare size={50} />,
    contactCTA: 'Visit our Facebook page',
  },
];

const ContactUsCard = (props: IContactUsCard) => {
  const { className, title, children } = props;

  return (
    <div className={cn('card bg-base-100 w-full p-5 shadow-xl', className)}>
      <div className="border-success/50 absolute bottom-1/4 left-0 h-1/2 rounded border-r-4" />

      {title && <p className="text-xl font-bold">{title}</p>}

      <div className="h-1 w-24 bg-(--red)/50" />

      {children}
    </div>
  );
};

const Contact = () => {
  return (
    <main className="space-y-5 pt-20">
      <header className="container mx-auto space-y-5 px-4 text-center">
        <h2 className="text-center text-4xl font-bold text-(--red) md:text-5xl">
          Comments<span className="text-black">?</span> Suggestions
          <span className="text-black">?</span> Need help<span className="text-black">?</span>
        </h2>

        <p className="text-2xl text-black">We got you! You can contact us here.</p>
      </header>

      <div className="bg-gray-500 bg-[url(~/assets/chuck-eye.webp)] bg-cover bg-center bg-no-repeat bg-blend-overlay">
        <section className="container mx-auto space-y-10 p-10">
          <div className="flex flex-col gap-10 md:grid md:grid-cols-2">
            <ContactUsCard
              title="You may reach us through the following channels:"
              className="justify-evenly space-x-3"
            >
              <div className="mt-5 flex flex-row items-center justify-evenly gap-3">
                {contactBtns.map(({ contactCTA, contactIcon, contactFn }, ids) => (
                  <div key={ids} className="tooltip tooltip-bottom" data-tip={contactCTA}>
                    <button
                      className="flex items-center justify-center space-x-4 rounded-full bg-(--green) p-5 text-white cursor-pointer"
                      onClick={contactFn}
                    >
                      {contactIcon}
                    </button>
                  </div>
                ))}
              </div>
            </ContactUsCard>

            <ContactUsCard title="Visit our store location:" className="row-span-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1625.4783164662417!2d121.03392743413092!3d14.307902529289628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d786cc958323%3A0x6426c3b99529899e!2sSUNNY%20FOODS%20INC.!5e0!3m2!1sen!2sph!4v1763358420686!5m2!1sen!2sph"
                className="mt-5 h-full rounded-lg"
                loading="lazy"
              />
            </ContactUsCard>

            <ContactUsCard title="Send us your inquiries here:" className="flex justify-center">
              <div className="mt-5 space-y-5">
                <fieldset className="fieldset">
                  <p className="label text-lg font-bold">Full name:</p>
                  <input type="text" className="input w-full rounded-md" placeholder="Full name" />
                </fieldset>

                <fieldset className="fieldset">
                  <p className="label text-lg font-bold">Email address:</p>
                  <input
                    type="text"
                    className="input w-full rounded-md"
                    placeholder="Email address"
                  />
                </fieldset>

                <fieldset className="fieldset">
                  <p className="label text-lg font-bold">Message:</p>
                  <textarea
                    className="textarea w-full resize-none rounded-md"
                    placeholder="Leave a comment..."
                  />
                </fieldset>

                <button className="btn btn-success w-full rounded-md text-white md:text-lg">
                  Submit
                </button>
              </div>
            </ContactUsCard>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Contact;
