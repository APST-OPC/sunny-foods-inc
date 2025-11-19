import type { PropsWithChildren, ReactElement } from "react";

export interface IContactUs {
  contactIcon: ReactElement;
  contactCTA: string;
  contactFn?: () => void;
}

export interface IContactUsCard extends PropsWithChildren {
  className?: string;
  title?: string;
}