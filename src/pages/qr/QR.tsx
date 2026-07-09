import type { ReactElement } from "react";

import QRCodeStyling from "qr-code-styling";
import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import businessCardInfo from "~/shared/data/businessCard.json";

import ErrorScreen from "./Error";

const QR = (): ReactElement => {
  const { id } = useParams<{ id: string }>();
  const qrRef = useRef<HTMLDivElement | null>(null);
  const qrCode = useRef<QRCodeStyling | null>(null);

  const card = businessCardInfo.find((card) => card.id === id);
  const qrValue = `${window.location.origin}/business-card/${card?.id}`;

  useEffect(() => {
    if (!card || !qrRef.current) return;

    qrRef.current.innerHTML = "";
    qrCode.current = new QRCodeStyling({
      nodeCanvas: qrRef.current,
      width: 260,
      height: 260,
      data: qrValue,
      //   image: QRLogo,
      dotsOptions: {
        color: "#000",
      },
      backgroundOptions: {
        color: "#ffffff",
      },
      imageOptions: {
        crossOrigin: "anonymous",
        imageSize: 0.4,
      },
    });

    qrCode.current.append(qrRef.current);
  }, [card, qrValue]);

  const handleDownload = () => {
    qrCode.current?.download({
      name: card?.name ?? "SunnyFoodsInc_QR_Code",
      extension: "png",
    });
  };

  if (!card) {
    return <ErrorScreen />;
  }

  return (
    <div className="flex-col overflow-x-hidden">
      <div className="mt-10 flex flex-col items-center">
        <div ref={qrRef} />
        <p className="mt-4 text-center text-2xl">
          {card?.name ?? "Sunny Foods Inc."}
        </p>
        <div className="mt-6">
          <button
            className="btn border border-(--warm-red) bg-(--warm-red) text-white"
            onClick={handleDownload}>
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default QR;
