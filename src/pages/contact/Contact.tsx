import Chat from '~/assets/icons/ic_message.svg';
import Email from '~/assets/icons/ic_email.svg';
import Facebook from '~/assets/icons/ic_facebook.svg';

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
          <div className="flex flex-col md:grid md:grid-cols-2 gap-10">
            <div className="card bg-base-100 w-full justify-evenly space-x-3 p-5 shadow-xl">
              <div className="border-success/50 absolute bottom-1/4 left-0 h-1/2 rounded border-r-4" />

              <p className="text-xl font-bold">You may reach us through the following channels:</p>

              <div className="h-1 w-24 bg-(--red)/50" />

              <div className="mt-5 flex flex-row gap-3 items-center justify-evenly">
                <div className="tooltip tooltip-bottom" data-tip="Chat with us">
                  <button
                    className="btn btn-success btn-circle lg:h-24 lg:w-24 space-x-4 text-white"
                    onClick={() => window.open('viber://chat?number=%2B9392379999', '_blank')}
                  >
                    <img src={Chat} className="h-[50%]" />
                  </button>
                </div>

                <div className="tooltip tooltip-bottom" data-tip="Send us an email">
                  <button
                    className="btn btn-success btn-circle lg:h-24 lg:w-24 space-x-4 text-white"
                    onClick={() => window.open('mailto:sales@sunnyfoods.com.ph', '_blank')}
                  >
                    <img src={Email} className="h-[50%]" />
                  </button>
                </div>

                <div className="tooltip tooltip-bottom" data-tip="Visit our Facebook page">
                  <button className="btn btn-success btn-circle lg:h-24 lg:w-24 space-x-4 text-white">
                    <img src={Facebook} className="h-[50%]" />
                  </button>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 w-full p-5 shadow-xl row-span-2">
              <div className="border-success/50 absolute bottom-1/4 left-0 h-1/2 rounded border-r-4" />

              <p className="text-start text-xl font-bold">Visit our store location:</p>

              <div className="h-1 w-24 bg-(--red)/50" />

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1625.4783164662417!2d121.03392743413092!3d14.307902529289628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d786cc958323%3A0x6426c3b99529899e!2sSUNNY%20FOODS%20INC.!5e0!3m2!1sen!2sph!4v1763358420686!5m2!1sen!2sph"
                className="mt-5 h-full rounded-lg"
                loading="lazy"
              />
            </div>

            <div className="card bg-base-100 flex w-full justify-center p-5 shadow-xl">
              <div className="border-success/50 absolute bottom-1/4 left-0 h-1/2 rounded border-r-4" />

              <p className="text-xl font-bold">Send us your inquiries here:</p>

              <div className="h-1 w-24 bg-(--red)/50" />

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

                <button className="btn btn-success rounded-md text-lg text-white w-full">Submit</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Contact;
