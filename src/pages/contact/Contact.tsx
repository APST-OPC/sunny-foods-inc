import { useState } from 'react';

const Contact = () => {
  const [contactOpen, setContactOpen] = useState<boolean>(false);
  const [contactMethod, setContactMethod] = useState<'Call' | 'Text' | null>(null);

  const handleContactBtnClick = (contactMethod: 'Call' | 'Text' | null) => {
    setContactMethod(contactMethod);
    setContactOpen(true);
  };

  const renderModal = () => {
    return (
      <dialog
        id="contact-method"
        className="modal modal-middle backdrop-blur-xs"
        open={contactOpen}
      >
        <div className="modal-box">
          <button
            className="btn btn-ghost btn-circle fixed top-2 right-2"
            onClick={() => {
              setContactOpen(false);
              setTimeout(() => setContactMethod(null), 500);
            }}
          >
            ✕
          </button>
          {contactMethod === 'Call' ? (
            <>
              <p>You can call us through these numbers:</p>
              <button
                className="btn btn-ghost"
                onClick={() => window.open('viber://contact?number=%2B9392379999', '_blank')}
              >
                0939-237-9999
              </button>
              <button
                className="btn btn-ghost"
                onClick={() => window.open('viber://contact?number=%2B9187399999', '_blank')}
              >
                0918-739-9999
              </button>
            </>
          ) : (
            <>
              <p>You can send us a message through these numbers:</p>

              <button
                className="btn btn-ghost"
                onClick={() => window.open('viber://chat?number%2B9392379999', '_blank')}
              >
                0939-237-9999
              </button>
              <button
                className="btn btn-ghost"
                onClick={() => window.open('viber://chat?number%2B9187399999', '_blank')}
              >
                0918-739-9999
              </button>
            </>
          )}
        </div>
      </dialog>
    );
  };

  return (
    <section className="container mx-auto my-10 space-y-10">
      <h2 className="text-center text-4xl font-bold">Comments? Suggestions? Need help?</h2>
      <div className="grid grid-cols-2 gap-10">
        <div className="card bg-base-100 flex flex-col justify-center space-y-5 p-5 text-center shadow-xl">
          <p>We got you! You can contact us through the following buttons below.</p>

          <button
            className="btn btn-success w-full rounded-md text-white"
            onClick={() => handleContactBtnClick('Call')}
          >
            Call us on Viber
          </button>

          <button
            className="btn btn-success w-full rounded-md text-white"
            onClick={() => handleContactBtnClick('Text')}
          >
            Send us a message
          </button>

          {renderModal()}

          <button
            className="btn btn-success rounded-md text-white"
            onClick={() => window.open('mailto:sales@sunnyfoods.com.ph', '_blank')}
          >
            Email us
          </button>
        </div>

        <div className="card bg-base-100 p-5 shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1625.4783164662417!2d121.03392743413092!3d14.307902529289628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d786cc958323%3A0x6426c3b99529899e!2sSUNNY%20FOODS%20INC.!5e0!3m2!1sen!2sph!4v1763358420686!5m2!1sen!2sph"
            className="h-full rounded-lg"
            loading="lazy"
          />
        </div>
      </div>

      <fieldset className="fieldset bg-base-100 space-y-2 rounded-2xl p-5 shadow-xl">
        <div className="space-y-1">
          <p className="label text-lg font-bold">Full name:</p>
          <input type="text" className="input w-full rounded-md" placeholder="Full name" />
        </div>

        <div className="space-y-1">
          <p className="label text-lg font-bold">Email address:</p>
          <input type="text" className="input w-full rounded-md" placeholder="Email address" />
        </div>

        <div className="space-y-1">
          <p className="label text-lg font-bold">Message:</p>
          <textarea className="textarea w-full resize-none rounded-md" />
        </div>

        <button className="btn btn-success rounded-md text-white">Submit</button>
      </fieldset>
    </section>
  );
};

export default Contact;
