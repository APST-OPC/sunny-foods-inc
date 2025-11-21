import type { ReactElement } from "react";

export interface IContactUs {
  contactIcon: ReactElement;
  contactCTA: string;
  contactFn?: () => void;
}

export interface IContactForm {
  fullName: string;
  emailAddress: string;
  message: string;
}