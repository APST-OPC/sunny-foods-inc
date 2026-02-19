import type { IContactForm } from '~/pages/contact/type';

import axios from 'axios';
import { buildEmailHtml } from '~/template/email-form';

const URI = '/_api/v1/email-service';

export const sendEmail = async (props: IContactForm): Promise<IContactForm> => {
  const payload = {
    from: 'Sunny Foods Web <noreply@chr.gg>',
    to: 'Sunny Foods Sales <sales@sunnyfoods.com.ph>',
    subject: `You have received a new inquiry from ${props.fullname}`,
    body: {
      html: buildEmailHtml(props),
    },
  };

  const response = await axios.post(URI, payload);

  return response.data;
};
