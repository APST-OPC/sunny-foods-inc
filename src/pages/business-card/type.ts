import type { IconSvgElement } from "@hugeicons/react";

export interface IBusinessCard {
  data: ICardData[];
}

export interface ICardData {
  id: string;
  img: string;
  name?: string;
  role?: string;
  qrLink: string;
  buttons: IButtonData[];
}

export interface IButtonData {
  buttonType: "viber" | "email" | "website";
  buttonText: string;
  buttonContent: string;
}

export interface IBusinessCardButton {
  icon: IconSvgElement;
  onClick: () => void;
  buttonText: string;
}
