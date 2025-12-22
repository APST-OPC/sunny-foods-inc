import type { PropsWithChildren, ReactElement } from 'react';
import type { Control, FieldValues, Path } from 'react-hook-form';

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
