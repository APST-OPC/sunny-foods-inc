import type { ReactElement } from "react";
import type { SubmitHandler } from "react-hook-form";
import type { IContactCard, IContactForm } from "./type";

import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaCircleCheck, FaCircleExclamation } from "react-icons/fa6";
import * as yup from "yup";

import { cn } from "~/libs/cn";
import { useSendEmail } from "~/queries/useSendEmail";

import { TextArea, TextField, Toast } from "./components";
import { contactBtns, contactInformation } from "./utils";

const ContactCard = (props: IContactCard) => {
  const { title, className, children } = props;

  return (
    <div className={cn("card bg-[#F4ECE4] p-5", className)}>
      <p className="text-2xl font-extrabold tracking-tighter">{title}</p>

      <div className="mb-5 h-1 w-24 rounded-full bg-(--red)" />

      {children}
    </div>
  );
};

const Contact = (): ReactElement => {
  const { mutate, isPending } = useSendEmail();
  const [loading, setLoading] = useState(true);

  const schema: yup.ObjectSchema<IContactForm> = yup.object({
    fullname: yup.string().required("required*"),
    email: yup.string().email("Invalid email format").required("required*"),
    message: yup.string().required("required*"),
  });

  const { reset, handleSubmit, control } = useForm<IContactForm>({
    defaultValues: {
      fullname: "",
      email: "",
      message: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IContactForm> = (data: IContactForm) => {
    mutate(data, {
      onSuccess: () => {
        reset();

        toast.custom((t) => (
          <Toast
            t={t}
            icon={() => <FaCircleCheck />}
            type="success"
            message="Thank you for your inquiry. It has been successfully submitted, and our team will
                  contact you shortly."
          />
        ));
      },

      onError: (error) => {
        toast.custom((t) => (
          <Toast
            t={t}
            icon={() => <FaCircleExclamation />}
            type="error"
            message={error.message}
          />
        ));
      },
    });
  };

  return (
    <main className="container mx-auto px-5 py-20 md:space-y-20 md:px-0">
      <header className="space-y-5">
        <p className="text-error font-extrabold tracking-widest uppercase">
          Contact Us
        </p>

        <div className="flex flex-col items-center gap-5 md:flex-row">
          <h2 className="text-4xl font-black tracking-tighter text-pretty md:w-2/3 md:text-7xl">
            We value your feedback and questions.
          </h2>

          <p className="md:w-1/3">
            Whether you need assistance with our services, have inquiries, or
            want to share your feedback, our team is always ready to support you
            every step of the way.
          </p>
        </div>
      </header>

      <article className="divider" />

      <article className="flex flex-col gap-5">
        <section className="grid gap-5 md:grid-cols-3">
          <ContactCard
            title="Send us your inquiries here"
            className="row-span-2">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col space-y-3">
              <TextField
                control={control}
                label="Full name"
                disabled={isPending}
                name="fullname"
                placeholder="Your full name"
              />

              <TextField
                control={control}
                label="Email address"
                disabled={isPending}
                name="email"
                placeholder="Your email"
              />

              <TextArea
                control={control}
                label="Message"
                disabled={isPending}
                name="message"
                className="md:h-60"
                placeholder="Type in your message"
              />

              <button
                type="submit"
                className="btn bg-error border text-white uppercase"
                disabled={isPending}>
                {isPending ? "Sending ..." : "Send us a message"}
              </button>
            </form>
          </ContactCard>

          <ContactCard title="Our social links">
            <div className="grid gap-2.5 md:grid-cols-2">
              {contactBtns.map(
                ({ contactCTA, contactIcon, openWindow }, ids) => (
                  <div key={ids} className="flex items-center gap-2.5">
                    <button
                      className="btn btn-error btn-circle"
                      onClick={openWindow}>
                      {contactIcon({ size: 30, color: "white" })}
                    </button>

                    <p>{contactCTA}</p>
                  </div>
                ),
              )}
            </div>
          </ContactCard>

          <iframe
            title="maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1625.4783164662417!2d121.03392743413092!3d14.307902529289628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d786cc958323%3A0x6426c3b99529899e!2sSUNNY%20FOODS%20INC.!5e0!3m2!1sen!2sph!4v1763358420686!5m2!1sen!2sph"
            className={cn(
              "order-first row-span-2 h-full w-full rounded-2xl md:order-0",
              loading && "skeleton",
            )}
            loading="lazy"
            onLoad={() => setLoading(false)}
            onError={() => setLoading(false)}
          />

          <ContactCard title="Our contact information">
            <div className="space-y-3">
              {contactInformation.map(({ contactCTA, contactIcon }, ids) => (
                <div
                  key={ids}
                  className="grid grid-cols-[15%_85%] items-center">
                  {contactIcon({ size: 40 })}

                  <p>{contactCTA}</p>
                </div>
              ))}
            </div>
          </ContactCard>
        </section>
      </article>
    </main>
  );
};

export default Contact;
