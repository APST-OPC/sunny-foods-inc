import { useMutation } from '@tanstack/react-query';
import { sendEmail } from '~/api/email';
import type { IContactForm } from '~/pages/contact/type';

export const useSendEmail = () => {
  return useMutation({
    mutationFn: (props: IContactForm) => sendEmail(props),
  });
};
