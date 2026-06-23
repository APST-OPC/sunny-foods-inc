import type { ReactElement } from "react";
import type { SubmitHandler } from "react-hook-form";
import type { IContactCard, IContactDetail, IContactForm } from "./type";

import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as yup from "yup";

import { cn } from "~/libs/cn";
import { useSendEmail } from "~/queries/useSendEmail";

import { TextArea, TextField, Toast } from "./components";
import { contactDeets, socialContacts } from "./utils";

const ContactCard = (props: IContactCard) => {
  const { title, children, className } = props;

  return (
    <div className={cn("flex flex-col p-5", className)}>
      <p className="text-2xl font-bold tracking-tight">{title}</p>

      <div className="mb-5 h-1 w-24 rounded-full bg-(--red)" />

      {children}
    </div>
  );
};

const ContactLink = (props: IContactDetail) => {
  const { contactIcon, contactLink, contactLabel, openWindow, className } =
    props;

  return (
    <button
      type="button"
      className={cn(
        "link link-hover transition-transform duration-300 ease-out hover:-translate-y-2",
        className,
      )}
      onClick={openWindow}>
      {contactIcon({})}

      <div>
        <p className="font-bold tracking-tight md:text-lg">{contactLabel}</p>
        <p>{contactLink}</p>
      </div>
    </button>
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
            message="Thank you for your inquiry. It has been successfully submitted, and our team will contact you shortly."
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
    <main className="container mx-auto px-5 py-20 md:space-y-10 xl:px-0">
      <header className="space-y-2">
        <p className="text-sm font-bold tracking-widest text-(--red) uppercase">
          Contact Us
        </p>

        <section className="flex flex-col items-center gap-2 xl:flex-row">
          <h1 className="text-base-content text-4xl leading-none font-black tracking-tighter sm:text-6xl">
            We value your feedback and questions.
          </h1>

          <p className="xl:w-1/3">
            Whether you need assistance with our services, have inquiries, or
            want to share your feedback, our team is always ready to support you
            every step of the way.
          </p>
        </section>
      </header>

      <article className="divider" />

      <ContactCard className="mb-10" title="Our social links">
        <div className="flex w-full flex-col justify-evenly gap-8 py-4 md:flex-row">
          {socialContacts.map(
            ({ contactLabel, contactLink, contactIcon, openWindow }, ids) => (
              <ContactLink
                key={ids}
                openWindow={openWindow}
                className="flex items-center gap-3 text-start md:flex-col md:text-center"
                contactIcon={() =>
                  contactIcon({ className: "size-14 text-(--red)" })
                }
                contactLabel={contactLabel}
                contactLink={contactLink}
              />
            ),
          )}
        </div>
      </ContactCard>

      <article className="grid gap-5 xl:grid-cols-2">
        <ContactCard
          title="Send us your inquiries here"
          className="bg-[#F4ECE4]">
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
              className="h-70"
            />

            <button
              type="submit"
              className="btn border(--warm-red) w-full border bg-(--warm-red) text-white md:text-lg"
              disabled={isPending}>
              {isPending ? "Sending ..." : "Send us a message"}
            </button>
          </form>
        </ContactCard>

        <section className="flex flex-col bg-[#F4ECE4]">
          <ContactCard title="Our contact information">
            <div className="grid gap-10 md:grid-cols-2">
              {contactDeets
                .filter((i) => i.contactLabel !== "Our Location")
                .map(
                  (
                    { contactLabel, contactLink, contactIcon, openWindow },
                    ids,
                  ) => (
                    <ContactLink
                      key={ids}
                      openWindow={openWindow}
                      className="grid grid-cols-[20%_80%] items-center gap-3 text-start"
                      contactIcon={() =>
                        contactIcon({ className: "size-10 text-(--red)" })
                      }
                      contactLabel={contactLabel}
                      contactLink={contactLink}
                    />
                  ),
                )}
            </div>
          </ContactCard>

          <ContactCard title="Our location" className="h-full">
            <div className="mb-5 grid grid-cols-[20%_80%] md:hidden">
              {contactDeets[3].contactIcon({
                className: "size-10 text-(--red)",
              })}

              <p className="text-start">{contactDeets[3].contactLink}</p>
            </div>

            <iframe
              title="maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1625.4783164662417!2d121.03392743413092!3d14.307902529289628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d786cc958323%3A0x6426c3b99529899e!2sSUNNY%20FOODS%20INC.!5e0!3m2!1sen!2sph!4v1763358420686!5m2!1sen!2sph"
              className={cn(
                "lg:h-[90%] w-full rounded-lg border-2 border-gray-400",
                loading && "skeleton",
              )}
              loading="lazy"
              onLoad={() => setLoading(false)}
              onError={() => setLoading(false)}
            />
          </ContactCard>
        </section>
      </article>
    </main>
  );
};

export default Contact;
