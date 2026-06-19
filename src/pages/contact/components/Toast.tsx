import type { Toast as ToastType } from "react-hot-toast";
import type { IconType } from "react-icons/lib";

import {
  FaCircleCheck,
  FaCircleExclamation,
  FaCircleInfo,
} from "react-icons/fa6";

import { cn } from "~/libs/cn";

interface IToast {
  t: ToastType;
  variant: keyof typeof toastVariants;
  message: string;
}

const toastVariants: Record<
  string,
  { icon: IconType; alertColor: string; progressColor: string }
> = {
  success: {
    icon: () => <FaCircleCheck />,
    alertColor: "alert-success",
    progressColor: "progress-success",
  },
  info: {
    icon: () => <FaCircleInfo />,
    alertColor: "alert-info",
    progressColor: "progress-info",
  },
  error: {
    icon: () => <FaCircleExclamation />,
    alertColor: "alert-error",
    progressColor: "progress-error",
  },
};

export const Toast = (props: IToast) => {
  const { message, t, variant } = props;
  const { visible } = t;

  return (
    <div
      className={cn(
        "alert alert-soft transition-all duration-300",
        toastVariants[variant].alertColor,
        visible ? "opacity-100" : "opacity-0",
      )}>
      {toastVariants[variant].icon({ size: 40 })}

      <p>{message}</p>
    </div>
  );
};

export default Toast;
