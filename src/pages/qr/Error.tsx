import { ArrowLeft01Icon, QrCode } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const ErrorScreen = () => {
  return (
    <section className="flex h-dvh w-full items-center justify-center bg-zinc-950">
      <div className="w-full max-w-md rounded-2xl border-2 border-dashed border-zinc-800 bg-transparent p-8 text-center">
        <div className="mx-auto mb-4 flex justify-center text-zinc-600">
          <HugeiconsIcon icon={QrCode} size={42} strokeWidth={1.2} />
        </div>

        <h2 className="text-lg font-semibold text-zinc-200">
          Invalid QR Code Data
        </h2>

        <p className="mx-auto mt-2 max-w-xs text-xs leading-relaxed text-zinc-500">
          The link embedded in this QR code contains an invalid identifier. If
          you are the owner, please check your deployment configuration or
          regenerate your QR target.
        </p>
        <button
          onClick={() => window.history.back()}
          className="btn btn-error btn-sm mt-6 text-white">
          <HugeiconsIcon icon={ArrowLeft01Icon} size={18} />
          Go back
        </button>
      </div>
    </section>
  );
};

export default ErrorScreen;
