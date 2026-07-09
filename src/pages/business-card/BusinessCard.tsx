import type { IBusinessCardButton, IButtonData } from "./type";

import { Globe02Icon, Mail01Icon, ViberIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useParams } from "react-router-dom";

import businessCardInfo from "~/shared/data/businessCard.json";

import ErrorScreen from "./Error";

const BusinessCardButton = (props: IBusinessCardButton) => {
  const { icon, onClick, buttonText } = props;

  return (
    <button
      className="btn btn-lg w-full justify-start rounded-sm border border-(--warm-red) bg-(--warm-red) text-white"
      onClick={onClick}>
      <HugeiconsIcon
        icon={icon}
        size={38}
        color="currentColor"
        strokeWidth={1.5}
      />

      {buttonText}
    </button>
  );
};

const BusinessCard = () => {
  const { id } = useParams<{ id: string }>();
  const card = businessCardInfo.find((card) => card.id === id);

  const imageUrl = (img: string) =>
    new URL(`../../assets/logos/${img}`, import.meta.url).href;

  const getViberLink = (phoneNumber: string | undefined): string => {
    if (!phoneNumber) return "";

    const cleanNumber = phoneNumber.replace(/[\s\-+()]/g, "");

    return `viber://chat?number=${cleanNumber}`;
  };

  const renderButtonData = ({
    buttonContent,
    buttonText,
    buttonType,
  }: IButtonData): IBusinessCardButton => {
    switch (buttonType) {
      case "viber":
        return {
          buttonText: buttonText,
          icon: ViberIcon,
          onClick: () => window.open(getViberLink(buttonContent), "_blank"),
        };
      case "email":
        return {
          buttonText: buttonText,
          icon: Mail01Icon,
          onClick: () => window.open(`mailto:${buttonContent}`, "_blank"),
        };
      default:
        return {
          buttonText: buttonText,
          icon: Globe02Icon,
          onClick: () => window.open(buttonContent, "_blank"),
        };
    }
  };

  if (!card) {
    return <ErrorScreen />;
  }

  return (
    <main className="min-h-dvh bg-(--light-brown)/10">
      <header className="flex h-25 w-full items-center justify-center bg-linear-to-b from-[#460f0f] to-[#7a1f1f]">
        <h4 className="bg-linear-to-r from-white to-(--red) bg-clip-text pr-1 text-[23px] font-extrabold tracking-wide text-transparent italic">
          Premium Quality In Every Bite
        </h4>
      </header>

      <section className="flex flex-col items-center p-7 text-center">
        <div className="avatar">
          <div className="ring-offset-base-100 w-48 rounded-full ring-4 ring-[#7a1f1f] ring-offset-2">
            <img src={imageUrl(card?.img)} alt="Sunny Foods Inc" />
          </div>
        </div>

        {(card.name || card.role) && (
          <div className="mt-5">
            <p className="text-2xl font-bold">{card.name}</p>

            <p className="text-lg font-medium">{card.role}</p>
          </div>
        )}

        <div className="mt-10 flex flex-col items-center gap-3">
          {card.buttons.map((item, index) => {
            const button = renderButtonData(item as IButtonData);

            return (
              <BusinessCardButton
                key={index}
                buttonText={button.buttonText}
                icon={button.icon}
                onClick={button.onClick}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default BusinessCard;
