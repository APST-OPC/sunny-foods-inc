import type { ReactElement } from 'react';
import { cn } from '~/libs/cn';

const CustomDivider = (): ReactElement => {
  return (
    <div
      className={cn(
        'divider mx-auto -mt-5 h-5 w-4/5',
        'before:bg-linear-to-r before:from-[#F9F5F1] before:via-(--red) before:to-(--red)',
        'after:bg-linear-to-l after:from-[#F9F5F1] after:via-(--red) after:to-(--red)'
      )}
    />
  );
};

export default CustomDivider;
