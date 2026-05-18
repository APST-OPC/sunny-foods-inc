import { Globe02Icon, Mail01Icon, ViberIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useParams } from "react-router-dom";

import businessCardInfo from "~/shared/data/businessCard.json";

import ErrorScreen from "./Error";

const buttonStyle =
  "btn btn-lg w-full justify-start rounded-sm border border-(--warm-red) bg-(--warm-red) text-white";

const BusinessCard = () => {
  const { id } = useParams<{ id: string }>();
  const card = businessCardInfo.find((card) => card.id === id);

  const getViberLink = (phoneNumber: string | undefined): string => {
    if (!phoneNumber) return "";

    const cleanNumber = phoneNumber.replace(/[\s\-+()]/g, "");

    return `viber://chat?number=${cleanNumber}`;
  };

  if (!card) {
    return <ErrorScreen />;
  }

  return (
    <main className="min-h-dvh bg-(--light-brown)/10">
      <header className="flex h-[100px] w-full items-center justify-center bg-linear-to-b from-[#460f0f] to-[#7a1f1f]">
        <h4 className="bg-linear-to-r from-white to-(--red) bg-clip-text pr-1 text-[23px] font-extrabold tracking-wide text-transparent italic">
          Premium Quality In Every Bite
        </h4>
      </header>

      <section className="flex flex-col items-center p-7">
        <div className="avatar">
          <div className="ring-offset-base-100 w-48 rounded-full ring-4 ring-[#7a1f1f] ring-offset-2">
            <img src={card?.img} alt="Sunny Foods Inc" />
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-3">
          <button
            className={buttonStyle}
            onClick={() =>
              window.open(getViberLink(card?.contactNumber), "_blank")
            }>
            <HugeiconsIcon
              icon={ViberIcon}
              size={38}
              color="currentColor"
              strokeWidth={1.5}
            />
            Chat with us on Viber
          </button>
          <button
            onClick={() => window.open(`mailto:${card?.email}`, "_blank")}
            className={buttonStyle}>
            <HugeiconsIcon
              icon={Mail01Icon}
              size={38}
              color="currentColor"
              strokeWidth={1.5}
            />
            Partner with us
          </button>
          <button
            className={buttonStyle}
            onClick={() => window.open(card?.site, "_blank")}>
            <HugeiconsIcon
              icon={Globe02Icon}
              size={38}
              color="currentColor"
              strokeWidth={1.5}
            />
            Visit our website
          </button>
        </div>
      </section>
    </main>
  );
};

export default BusinessCard;
