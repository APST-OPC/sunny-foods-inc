import type { ReactElement } from "react";
import type { SubmitHandler } from "react-hook-form";
import type { IContactCard, IContactForm } from "./type";

import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as yup from "yup";

import { cn } from "~/libs/cn";
import { useSendEmail } from "~/queries/useSendEmail";

import { TextArea, TextField, Toast } from "./components";
import { contactBtns, contactInfo } from "./utils";

const ContactCard = (props: IContactCard) => {
  const { title, children, className } = props;

  return (
    <div className={cn("flex flex-col bg-[#F4ECE4] p-5", className)}>
      <p className="text-2xl font-bold tracking-tight">{title}</p>

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
            message="Thank you for your inquiry. It has been successfully
                  submitted, and our team will contact you shortly."
            variant="success"
          />
        ));
      },

      onError: (err) => {
        toast.custom((t) => (
          <Toast t={t} message={err.message} variant="error" />
        ));
      },
    });
  };

  return (
    <main className="container mx-auto px-5 py-20 md:space-y-20 md:px-0">
      <header className="space-y-2">
        <p className="text-sm font-bold tracking-widest text-(--red) uppercase">
          Contact Us
        </p>

        <section className="flex flex-col items-center gap-2 md:flex-row">
          <h1 className="text-base-content text-4xl leading-none font-black tracking-tighter sm:text-6xl">
            We value your feedback and questions.
          </h1>

          <p className="md:w-1/3">
            Whether you need assistance with our services, have inquiries, or
            want to share your feedback, our team is always ready to support you
            every step of the way.
          </p>
        </section>
      </header>

      <article className="divider" />

      <article className="grid gap-5 md:grid-cols-3">
        <ContactCard title="Send us your inquiries here" className="row-span-2">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-3">
            <TextField
              control={control}
              label="Full name"
              disabled={isPending}
              name="fullname"
            />

            <TextField
              control={control}
              label="Email address"
              disabled={isPending}
              name="email"
            />

            <TextArea
              control={control}
              disabled={isPending}
              label="Message"
              name="message"
              className="h-60"
            />

            <button
              type="submit"
              className="btn border(--warm-red) w-full border bg-(--warm-red) text-white md:text-lg"
              disabled={isPending}>
              {isPending ? "Sending ..." : "Send us a message"}
            </button>
          </form>
        </ContactCard>

        <ContactCard title="Our location">
          <iframe
            title="maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1625.4783164662417!2d121.03392743413092!3d14.307902529289628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d786cc958323%3A0x6426c3b99529899e!2sSUNNY%20FOODS%20INC.!5e0!3m2!1sen!2sph!4v1763358420686!5m2!1sen!2sph"
            className={cn(
              "h-full w-full rounded-lg border-2 border-gray-400",
              loading && "skeleton",
            )}
            loading="lazy"
            onLoad={() => setLoading(false)}
            onError={() => setLoading(false)}
          />

          <p className="mt-5 md:hidden">
            Bldg. 2 Blk. 1 Governors Park Drive, Southwoods Industrial Park
            Mabuhay, Carmona, Cavite (4116)
          </p>
        </ContactCard>

        <ContactCard title="Our social links" className="row-span-2">
          <section className="flex h-full flex-col justify-evenly gap-2.5">
            {contactBtns.map(({ contactCTA, contactIcon, openWindow }, ids) => (
              <button
                key={ids}
                className="link link-hover flex cursor-pointer items-center gap-2"
                onClick={openWindow}>
                {contactIcon({
                  className: "size-[50px] text-(--red) md:size-[60px]",
                })}
                <p className="md:text-lg">{contactCTA}</p>
              </button>
            ))}
          </section>
        </ContactCard>

        <ContactCard title="Our contact information">
          <section className="flex h-full flex-col justify-evenly gap-2.5">
            {contactInfo.map(({ contactCTA, contactIcon }, ids) => (
              <div
                key={ids}
                className="link link-hover flex cursor-pointer items-center gap-2">
                {contactIcon({
                  className: "size-[50px] text-(--red) md:size-[60px]",
                })}
                <p className="md:text-lg">{contactCTA}</p>
              </div>
            ))}
          </section>
        </ContactCard>
      </article>
    </main>
  );
};

export default Contact;
