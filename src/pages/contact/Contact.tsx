import type { IContactCard, IContactForm } from './type';
import type { ReactElement } from 'react';
import type { SubmitHandler } from 'react-hook-form';

import { useForm } from 'react-hook-form';
import { FaCircleCheck, FaCircleExclamation } from 'react-icons/fa6';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { useSendEmail } from '~/queries/useSendEmail';

import { TextArea, TextField } from './components';
import { contactBtns } from './utils';

const ContactCard = (props: IContactCard) => {
  const { title, className, children } = props;

  return (
    <div className={className}>
      <p className="text-2xl font-bold">{title}</p>

      <div className="h-1 w-24 rounded-full bg-(--red)/50" />

      {children}
    </div>
  );
};

const Contact = (): ReactElement => {
  const { mutate, isSuccess, isError, error } = useSendEmail();

  const schema: yup.ObjectSchema<IContactForm> = yup.object({
    fullname: yup.string().required('required*'),
    email: yup.string().email('Invalid email format').required('required*'),
    message: yup.string().required('required*'),
  });

  const { reset, handleSubmit, control } = useForm<IContactForm>({
    defaultValues: {
      fullname: '',
      email: '',
      message: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IContactForm> = (data: IContactForm) => {
    mutate(data, {
      onSuccess: () => {
        reset();
      },
    });
  };

  return (
    <main className="space-y-5 py-20">
      <header className="mx-auto space-y-5 px-10 text-center">
        <h2 className="text-4xl font-bold md:text-6xl">We value your feedback and questions.</h2>

        <p className="text-xl text-gray-600">Contact our support team anytime.</p>
      </header>

      <section className="container mx-auto">
        <div className="divider m-3 mx-auto h-5 w-4/5 before:bg-linear-to-r before:from-[#F9F5F1] before:via-(--red) before:to-(--red) after:bg-linear-to-l after:from-[#F9F5F1] after:via-(--red) after:to-(--red)" />

        <div className="flex flex-col gap-10 p-5 md:flex-row">
          <div className="flex w-full flex-col gap-10 md:w-1/3">
            <ContactCard title="Follow us">
              <div className="mt-5 flex flex-wrap justify-evenly">
                {contactBtns.map(({ contactCTA, contactIcon, contactFn }, ids) => (
                  <div
                    key={ids}
                    className="tooltip tooltip-bottom before:bg-gray-500 before:text-white after:bg-gray-500"
                    data-tip={contactCTA}
                  >
                    <button
                      className="btn btn-circle btn-ghost size-full rounded-full border-none p-2"
                      onClick={contactFn}
                    >
                      {contactIcon}
                    </button>
                  </div>
                ))}
              </div>
            </ContactCard>

            <ContactCard title="Our location" className="flex h-full flex-col">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1625.4783164662417!2d121.03392743413092!3d14.307902529289628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d786cc958323%3A0x6426c3b99529899e!2sSUNNY%20FOODS%20INC.!5e0!3m2!1sen!2sph!4v1763358420686!5m2!1sen!2sph"
                className="mt-5 h-full w-full rounded-lg border-2 border-gray-400"
                loading="lazy"
              />

              <p className="mt-5 md:hidden">
                Bldg. 2 Blk. 1 Governors Park Drive, Southwoods Industrial Park Mabuhay, Carmona,
                Cavite (4116)
              </p>
            </ContactCard>
          </div>

          <ContactCard
            title="Send us your inquires here"
            className="card w-full bg-[#F4ECE4] p-5 shadow-xl"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="mt-5 flex flex-col space-y-3">
              {isSuccess && (
                <div role="alert" className="alert alert-success alert-soft">
                  <FaCircleCheck size={24} />
                  <span>
                    Thank you for your inquiry. It has been successfully submitted, and our team
                    will contact you shortly.
                  </span>
                </div>
              )}
              {isError && (
                <div role="alert" className="alert alert-error alert-soft">
                  <FaCircleExclamation size={24} />
                  <span>{error?.message}</span>
                </div>
              )}

              <TextField control={control} label="Fullname" disabled={isSuccess} name="fullname" />
              <TextField control={control} label="Email" disabled={isSuccess} name="email" />
              <TextArea control={control} disabled={isSuccess} label="Message" name="message" />
              <button
                type="submit"
                className="btn border(--warm-red) w-full border bg-(--warm-red) text-white md:text-lg"
                disabled={isSuccess}
              >
                {isSuccess ? 'Sending ...' : 'Send us a message'}
              </button>
            </form>
          </ContactCard>
        </div>

        <div className="divider m-3 mx-auto h-5 w-4/5 before:bg-linear-to-r before:from-[#F9F5F1] before:via-(--red) before:to-(--red) after:bg-linear-to-l after:from-[#F9F5F1] after:via-(--red) after:to-(--red)" />
      </section>
    </main>
  );
};

export default Contact;
