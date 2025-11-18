import type { PropsWithChildren } from "react";

export interface IContactUs {
  contactIcon: string;
  contactCTA: string;
  contactFn?: () => void;
}

export interface IContactUsCard extends PropsWithChildren {
  className?: string;
  title?: string;
}