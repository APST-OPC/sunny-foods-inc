import type { Toast as ToastBaseType } from 'react-hot-toast';
import type { IconType } from 'react-icons/lib';

import { useEffect, useState } from 'react';

import { cn } from '~/libs/cn';

interface IToast {
  t: ToastBaseType;
  type: 'success' | 'error';
  icon: IconType;
  message: string;
}

const toastType = {
  success: {
    progress: 'progress-success',
    alert: 'alert-success',
  },
  error: {
    progress: 'progress-error',
    alert: 'alert-error',
  },
};

export const Toast = (props: IToast) => {
  const { icon, t, message, type } = props;
  const { duration, visible } = t;

  const [progress, setProgress] = useState<number>(100);

  useEffect(() => {
    const start = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const perc = Math.max(100 - (elapsed / (duration as number)) * 100, 0);

      setProgress(perc);

      if (perc <= 0) clearInterval(interval);
    }, 16);

    return () => clearInterval(interval);
  }, [duration]);

  return (
    <div
      className={cn(
        'alert alert-soft transition-all duration-300',
        toastType[type].alert,
        visible ? 'opacity-100' : 'opacity-0'
      )}
    >
      {icon({ size: 40 })}

      <div className="w-full">
        <p>{message}</p>

        <progress
          className={cn('progress h-1.5 w-full', toastType[type].progress)}
          value={progress}
          max={100}
        />
      </div>
    </div>
  );
};

export default Toast;
