import type { IContactForm, IContactUs } from './type';
import type { ReactElement } from 'react';

import { FaViber } from 'react-icons/fa';
import { AiOutlineFacebook } from 'react-icons/ai';
import { FaInstagram } from 'react-icons/fa6';

import { useForm, type SubmitHandler } from 'react-hook-form';
import useWeb3Forms from '@web3forms/react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { cn } from '~/libs/cn';

const contactBtns: IContactUs[] = [
  {
    contactIcon: <FaViber size={80} color="#7360f2" />,
    contactCTA: 'Chat with us on Viber',
    contactFn: () => window.open('viber://chat?number=%2B9392379999', '_blank'),
  },
  {
    contactIcon: <AiOutlineFacebook size={90} color="#1877f2" />,
    contactCTA: 'Visit our Facebook page',
    contactFn: () => window.open('https://www.facebook.com/SUNNYFOODSINC.2025', '_blank'),
  },
  {
    contactIcon: <FaInstagram size={80} color="#d300c5" />,
    contactCTA: 'Visit our Instagram',
    contactFn: () => window.open('https://www.instagram.com/sunnyfoods.com.ph', '_blank'),
  },
];

const Contact = (): ReactElement => {
  const schema: yup.ObjectSchema<IContactForm> = yup.object().shape({
    fullName: yup.string().required('Fullname is required'),
    emailAddress: yup.string().email('Invalid email format').required('Email is required'),
    message: yup.string().required('Message is required'),
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IContactForm>({
    defaultValues: {
      fullName: '',
      emailAddress: '',
      message: '',
    },
    resolver: yupResolver(schema),
  });

  const { submit: web3Submit } = useWeb3Forms({
    access_key: import.meta.env.VITE_ACCESS_KEY,
    settings: {
      from_name: '',
      subject: 'New Contact Message from your Website',
    },
    onSuccess: () => {
      reset();
    },
    onError: (msg, data) => {
      console.log('message', msg);
      console.log('data', data);
    },
  });

  const onSubmit: SubmitHandler<IContactForm> = (data: IContactForm) => {
    web3Submit({
      ...data,
      from_name: data.emailAddress,
    });
  };

  return (
    <main className="space-y-5 py-20">
      <header className="mx-auto space-y-5 px-10 text-center">
        <h2 className="text-4xl font-bold text-black md:text-6xl">
          Comments<span className="text-(--red)">?</span> Suggestions
          <span className="text-(--red)">?</span> Need help
          <span className="text-(--red)">?</span>
        </h2>

        <p className="text-xl text-gray-600">We got you! You can contact us here.</p>
      </header>

      <section className="container mx-auto">
        <div className="divider m-3 mx-auto h-5 w-4/5 before:bg-linear-to-r before:from-[#F9F5F1] before:via-(--red) before:to-(--red) after:bg-linear-to-l after:from-[#F9F5F1] after:via-(--red) after:to-(--red)" />

        <div className="flex flex-col gap-10 p-5 md:flex-row">
          <div className="flex w-full flex-col gap-10 md:w-1/3">
            <div>
              <p className="text-2xl font-bold">Follow us</p>

              <div className="h-1 w-24 rounded-full bg-(--red)/50" />

              <div className="mt-5 flex flex-wrap justify-evenly">
                {contactBtns.map(({ contactCTA, contactIcon, contactFn }, ids) => (
                  <div key={ids} className="tooltip tooltip-bottom m-1 flex items-center">
                    <div className="tooltip-content bg-gray-500">
                      <p className="text-white">{contactCTA}</p>
                    </div>

                    <button
                      className="flex cursor-pointer items-center justify-center rounded-full text-white"
                      onClick={contactFn}
                    >
                      {contactIcon}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex h-full flex-col">
              <p className="text-2xl font-bold">Our location</p>

              <div className="h-1 w-24 rounded-full bg-(--red)/50" />

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1625.4783164662417!2d121.03392743413092!3d14.307902529289628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d786cc958323%3A0x6426c3b99529899e!2sSUNNY%20FOODS%20INC.!5e0!3m2!1sen!2sph!4v1763358420686!5m2!1sen!2sph"
                className="mt-5 h-full w-full rounded-lg border-2 border-gray-400"
                loading="lazy"
              />

              <p className="mt-5 md:hidden">
                Bldg. 2 Blk. 1 Governors Park Drive, Southwoods Industrial Park Mabuhay, Carmona,
                Cavite (4116)
              </p>
            </div>
          </div>

          <div className="card w-full bg-[#F4ECE4] p-5 shadow-xl">
            <p className="text-2xl font-bold">Send us your inquiries here</p>

            <div className="h-1 w-24 rounded-full bg-(--red)/50" />

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-5 flex flex-col space-y-5">
                <fieldset className="fieldset">
                  <p className="label text-lg font-semibold text-black">Full name:</p>

                  <input
                    {...register('fullName')}
                    type="text"
                    className={cn('input w-full rounded-md', errors.fullName && 'border-error')}
                    placeholder="Full name"
                  />

                  <div className="h-0.5">
                    {errors.fullName && <p className="text-error">{errors.fullName?.message}</p>}
                  </div>
                </fieldset>

                <fieldset className="fieldset">
                  <p className="label text-lg font-semibold text-black">Email address:</p>

                  <input
                    {...register('emailAddress')}
                    type="text"
                    className={cn('input w-full rounded-md', errors.emailAddress && 'border-error')}
                    placeholder="Email address"
                  />

                  <div className="h-0.5">
                    {errors.emailAddress && (
                      <p className="text-error">{errors.emailAddress?.message}</p>
                    )}
                  </div>
                </fieldset>

                <fieldset className="fieldset">
                  <p className="label text-lg font-semibold text-black">Message:</p>

                  <textarea
                    {...register('message')}
                    className={cn(
                      'textarea h-90 w-full resize-none rounded-md',
                      errors.message && 'border-error'
                    )}
                    placeholder="Leave a message..."
                  />

                  <div className="h-0.5">
                    {errors.message && <p className="text-error">{errors.message?.message}</p>}
                  </div>
                </fieldset>

                <button
                  type="submit"
                  className="btn btn-error w-full text-white md:text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending ...' : 'Send us a message'}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="divider m-3 mx-auto h-5 w-4/5 before:bg-linear-to-r before:from-[#F9F5F1] before:via-(--red) before:to-(--red) after:bg-linear-to-l after:from-[#F9F5F1] after:via-(--red) after:to-(--red)" />
      </section>
    </main>
  );
};

export default Contact;
