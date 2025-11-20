import type { IContactUs, IContactUsCard } from './type';

import { FaFacebookSquare, FaViber } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { cn } from '~/libs/cn';

const contactBtns: IContactUs[] = [
  {
    contactIcon: <FaViber size={80} color="#7360f2" />,
    contactCTA: 'Chat with us on Viber',
    contactFn: () => window.open('viber://chat?number=%2B9392379999', '_blank'),
  },
  {
    contactIcon: <MdEmail size={80} color="#000000" />,
    contactCTA: 'Send us an email',
    contactFn: () => window.open('mailto:sales@sunnyfoods.com.ph', '_blank'),
  },
  {
    contactIcon: <FaFacebookSquare color="#1877f2" size={80} />,
    contactCTA: 'Visit our Facebook page',
    contactFn: () => window.open('https://www.facebook.com/SUNNYFOODSINC.2025', '_blank'),
  },
  {
    contactIcon: <FaInstagram size={80} color="#833ab4" />,
    contactCTA: 'Visit our Instagram',
    contactFn: () => window.open('https://www.instagram.com/sunnyfoods.com.ph', '_blank'),
  },
];

const ContactUsCard = (props: IContactUsCard) => {
  const { className, title, children } = props;

  return (
    <div className={cn('card bg-[#F4ECE4] p-5 shadow-xl', className)}>
      <div className="border-success/50 absolute bottom-1/4 left-0 h-1/2 rounded border-r-4" />

      {title && <p className="text-xl font-bold">{title}</p>}

      {children}
    </div>
  );
};

const Contact = () => {
  return (
    <main className="space-y-5 py-20">
      <header className="mx-auto space-y-5 px-10 text-center">
        <h2 className="text-center text-4xl font-bold text-black md:text-6xl">
          Comments<span className="text-(--red)">?</span> Suggestions
          <span className="text-(--red)">?</span> Need help<span className="text-(--red)">?</span>
        </h2>

        <p className="text-2xl text-black">We got you! You can contact us here.</p>
      </header>

      <section className="container mx-auto flex flex-col gap-10 p-5 md:flex-row">
        <div className="flex h-full w-full flex-col gap-10 md:w-1/3">
          <ContactUsCard>
            <p className="text-xl font-bold">Follow us</p>

            <div className="h-1 w-24 bg-(--red)/50" />

            <div className="mt-5 flex flex-wrap justify-evenly">
              {contactBtns.map(({ contactCTA, contactIcon, contactFn }, ids) => (
                <div
                  key={ids}
                  className="md:tooltip md:tooltip-bottom m-1 flex items-center space-y-3 space-x-3"
                  data-tip={contactCTA}
                >
                  <button
                    className="flex size-20 cursor-pointer items-center justify-center rounded-full text-white"
                    onClick={contactFn}
                  >
                    {contactIcon}
                  </button>
                </div>
              ))}
            </div>
          </ContactUsCard>

          <ContactUsCard>
            <p className="text-xl font-bold">Our location</p>

            <div className="h-1 w-24 bg-(--red)/50" />

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1625.4783164662417!2d121.03392743413092!3d14.307902529289628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d786cc958323%3A0x6426c3b99529899e!2sSUNNY%20FOODS%20INC.!5e0!3m2!1sen!2sph!4v1763358420686!5m2!1sen!2sph"
              className="mt-5 h-full w-full rounded-lg border-2 border-gray-400"
              loading="lazy"
            />
          </ContactUsCard>
        </div>

        <ContactUsCard
          title="Send us your inquiries here"
          className="col-span-2 row-span-2 w-full md:w-2/3"
        >
          <div className="h-1 w-24 bg-(--red)/50" />

          <div className="mt-5 flex flex-col space-y-2">
            <fieldset className="fieldset">
              <p className="label text-lg font-bold text-black">Full name:</p>
              <input id="fullName" type="text" className="input w-full rounded-md" placeholder="Full name" />
            </fieldset>

            <fieldset className="fieldset">
              <p className="label text-lg font-bold text-black">Email address:</p>
              <input id="emailAddress" type="text" className="input w-full rounded-md" placeholder="Email address" />
            </fieldset>

            <fieldset className="fieldset">
              <p className="label text-lg font-bold text-black">Message:</p>
              <textarea
                className="textarea w-full resize-none rounded-md"
                id="msg"
                placeholder="Leave a message..."
              />
            </fieldset>

            <button className="btn btn-error w-full text-white md:text-lg">
              Send us a message
            </button>
          </div>
        </ContactUsCard>
      </section>
    </main>
  );
};

export default Contact;
