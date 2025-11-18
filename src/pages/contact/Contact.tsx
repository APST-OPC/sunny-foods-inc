import { useState } from 'react';
import Chat from '~/assets/icons/ic_message.svg';
import Email from '~/assets/icons/ic_email.svg';
import Facebook from '~/assets/icons/ic_facebook.svg';

const Contact = () => {
  const [contactOpen, setContactOpen] = useState<boolean>(false);

  const renderModal = () => {
    return (
      <dialog className="modal modal-middle backdrop-blur-xs" open={contactOpen}>
        <div className="modal-box">
          <button
            className="btn btn-ghost btn-circle fixed top-2 right-2"
            onClick={() => setContactOpen(false)}
          >
            ✕
          </button>

          <div className="mt-5 flex flex-col space-y-2">
            <p>You can call us or send us a message through these numbers:</p>

            <button
              className="btn btn-ghost btn-success rounded-md hover:text-white"
              onClick={() => window.open('viber://chat?number=%2B9392379999', '_blank')}
            >
              0939-237-9999
            </button>

            <button
              className="btn btn-ghost btn-success rounded-md hover:text-white"
              onClick={() => window.open('viber://chat?number=%2B9187399999', '_blank')}
            >
              0918-739-9999
            </button>
          </div>
        </div>
      </dialog>
    );
  };

  return (
    <main className="space-y-5 pt-20">
      <header className="container mx-auto space-y-5 px-4 text-center">
        <h2 className="font-solitreo text-center text-4xl font-bold md:text-5xl">
          Comments? Suggestions? Need help?
        </h2>

        <p>We got you! You can contact us here.</p>
      </header>

      <div className="bg-gray-500 bg-[url(~/assets/chuck-eye.webp)] bg-cover bg-center bg-no-repeat bg-blend-overlay">
        <section className="container mx-auto space-y-10 p-10">
          <div className="grid grid-cols-2 gap-10">
            <div className="card bg-base-100 flex w-full flex-col space-y-3 p-5 text-center shadow-xl">
              <button
                className="btn btn-success rounded-md text-white space-x-4"
                onClick={() => setContactOpen(true)}
              >
                <img src={Chat} className="h-[50%]" />
                <p className="text-lg">Contact us</p>
              </button>

              <button
                className="btn btn-success rounded-md text-white space-x-4"
                onClick={() => window.open('mailto:sales@sunnyfoods.com.ph', '_blank')}
              >
                <img src={Email} className="h-[50%]" />
                <p className="text-lg">Email us</p>
              </button>

              <button className="btn btn-success rounded-md text-white space-x-4">
                <img src={Facebook} className="h-[50%]" />
                <p className="text-lg">Check our Facebook page</p>
              </button>

              {renderModal()}
            </div>

            <div className="card bg-base-100 row-span-2 flex w-full justify-center space-y-5 p-5 shadow-xl">
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
                  className="textarea h-[18svh] w-full resize-none rounded-md"
                  placeholder="Leave a comment..."
                />
              </fieldset>

              <button className="btn btn-success rounded-md text-lg text-white">Submit</button>
            </div>

            <div className="card bg-base-100 w-full p-5 shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1625.4783164662417!2d121.03392743413092!3d14.307902529289628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d786cc958323%3A0x6426c3b99529899e!2sSUNNY%20FOODS%20INC.!5e0!3m2!1sen!2sph!4v1763358420686!5m2!1sen!2sph"
                className="h-[23svh] rounded-lg"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Contact;
