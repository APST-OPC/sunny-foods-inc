import type { IContactForm } from "~/pages/contact/type";

import { useMutation } from "@tanstack/react-query";

import { sendEmail } from "~/api/email";

export const useSendEmail = () => {
  return useMutation({
    mutationFn: (props: IContactForm) => sendEmail(props),
  });
};
