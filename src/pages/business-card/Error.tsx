import { ArrowLeft01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const ErrorScreen = () => {
  return (
    <section className="flex h-dvh w-full items-center justify-center bg-zinc-950 p-4">
      <div className="w-full max-w-md rounded-2xl border-2 border-dashed border-zinc-800 bg-transparent p-8 text-center">
        <h2 className="text-lg font-semibold text-zinc-200">
          Unrecognized Directory ID
        </h2>

        <p className="mx-auto mt-2 max-w-xs text-xs leading-relaxed text-zinc-500">
          The unique card ID in this URL doesn&apos;t match any digital business
          card in our directory. It looks like this profile was either
          completely deleted or the link has a typo.
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
