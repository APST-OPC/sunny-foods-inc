import {
  ArrowLeft01FreeIcons,
  Home01FreeIcons,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Link } from "react-router";

export default function NotFoundPage() {
  const handleGoBack = () => {
    if (typeof window !== "undefined") {
      if (document.referrer) {
        window.history.back();
      } else {
        window.location.href = "/";
      }
    }
  };

  return (
    <main className="flex min-h-dvh w-full flex-col items-center justify-center bg-zinc-50 px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <div className="mb-4 flex justify-center">
          <h1 className="text-9xl font-black tracking-tight text-zinc-200 select-none">
            404
          </h1>
        </div>

        {/* Pang 404 Page na Headline */}
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
          Page Not Found
        </h1>

        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-zinc-500 sm:text-base">
          The link you followed might be broken.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <button
            onClick={handleGoBack}
            className="btn btn-lg w-full rounded-xl">
            <HugeiconsIcon
              icon={ArrowLeft01FreeIcons}
              size={16}
              strokeWidth={2}
            />
            Go Back
          </button>

          <Link to="/" className="btn btn-neutral btn-lg w-full rounded-xl">
            <HugeiconsIcon icon={Home01FreeIcons} size={16} strokeWidth={2} />
            Return Home
          </Link>
        </div>
      </div>
    </main>
  );
}
