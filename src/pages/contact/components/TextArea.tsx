import type { FieldValues } from 'react-hook-form';
import type { ITextInput } from './type';

import { useController } from 'react-hook-form';
import { cn } from '~/libs/cn';

export const TextArea = <T extends FieldValues>(props: ITextInput<T>) => {
  const { name, control, label, className, placeholder, disabled } = props;

  const {
    field,
    fieldState: { error },
  } = useController<T>({ name, control });

  const valueCheck = !!field.value;

  return (
    <fieldset className="fieldset">
      <p className="label text-lg font-semibold text-black">{label}</p>

      <textarea
        {...field}
        placeholder={placeholder}
        disabled={disabled}
        className={cn(
          'textarea h-90 w-full resize-none rounded-md',
          error && 'border-error',
          valueCheck && !error && 'border-success',
          className
        )}
      />

      <div className="h-0.5">{error && <p className="text-error">{error.message}</p>}</div>
    </fieldset>
  );
};

export default TextArea;
