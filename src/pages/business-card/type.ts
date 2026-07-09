import type { IconSvgElement } from "@hugeicons/react";

type IButtonType = "viber" | "email" | "website" | "message";

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
  buttonType: IButtonType;
  buttonText: string;
  buttonContent: string;
}

export interface IBusinessCardButton {
  icon: IconSvgElement;
  onClick: () => void;
  buttonText: string;
}
