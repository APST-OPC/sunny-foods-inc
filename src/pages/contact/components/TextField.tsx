import type { FieldValues } from 'react-hook-form';
import type { ITextInput } from '../type';

import { useController } from 'react-hook-form';
import { cn } from '~/libs/cn';

export const TextField = <T extends FieldValues>(props: ITextInput<T>) => {
  const { name, control, label, className, placeholder = 'Please type here', disabled } = props;

  const {
    field,
    fieldState: { error },
  } = useController<T>({ name, control });

  const valueCheck = !!field.value;

  return (
    <fieldset className="fieldset">
      <p className={cn('label text-lg font-semibold text-black')}>
        {label} <span className="text-error text-xs">{error && <>{error.message}</>}</span>
      </p>

      <input
        {...field}
        type="text"
        placeholder={placeholder}
        disabled={disabled}
        className={cn(
          'input w-full rounded-md focus-within:border-(--foreground) focus-within:outline-0 focus:outline-0',
          error && 'border-error',
          valueCheck && !error && 'border-success',
          className
        )}
      />
    </fieldset>
  );
};

export default TextField;
