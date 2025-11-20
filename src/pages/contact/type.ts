import type { ReactElement } from "react";

export interface IContactUs {
  contactIcon: ReactElement;
  contactCTA: string;
  contactFn?: () => void;
}