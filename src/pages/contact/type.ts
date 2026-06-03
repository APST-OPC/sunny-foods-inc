import type { PropsWithChildren } from "react";
import type { Control, FieldValues, Path } from "react-hook-form";
import type { IconType } from "react-icons/lib";

export interface IContactButton {
  contactIcon: IconType;
  contactCTA: string;
  openWindow?: () => void;
}

export interface IContactForm {
  fullname: string;
  email: string;
  message: string;
}
export interface ITextInput<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
}

export interface IContactCard extends PropsWithChildren {
  title?: string;
  className?: string;
}
