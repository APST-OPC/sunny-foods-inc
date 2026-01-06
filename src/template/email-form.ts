import type { IContactForm } from '~/pages/contact/type';

export const buildEmailHtml = (props: IContactForm) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Email</title>
  </head>

  <body style="margin: 0; padding: 0">
    <table
      width="100%"
      cellpadding="0"
      cellspacing="0"
      role="presentation"
      style="
        background-color: #f5f7fa;
        padding: 20px;
        font-family: Arial, Helvetica, sans-serif;
      ">

      <tr>
        <td
          align="center"
          style="background-color: #1f2937; padding: 16px; color: #ffffff">
          <img
            src="https://www.sunnyfoods.com.ph/assets/sunnyfoods-logo-DRoWJhEX.png"
            alt="Sunny Foods Logo"
            width="75"
            style="display: block; margin: 0 auto 8px" />

          <p style="margin: 0; font-size: 18px; font-weight: bold">
            Sunny Foods Inc
          </p>

          <p style="margin: 0; font-size: 11px; opacity: 0.9">
            Delicious • Healthy • Affordable
          </p>
        </td>
      </tr>

      <tr>
        <td
          style="
            background-color: #ffffff;
            padding: 24px;
            font-size: 14px;
            line-height: 1.5;
          ">
          <p style="margin-top: 0">You have received a new inquiry.</p>

          <p>
            <strong>Greetings from ${props.fullname}!</strong>
          </p>

          <p>
            <strong>Client:</strong><br />
            ${props.fullname}<br />
            <i>&lt;${props.email}&gt;</i>
          </p>

          <p>${props.message}</p>
        </td>
      </tr>
    </table>
  </body>
</html>

`;
