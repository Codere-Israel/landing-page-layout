import React from "react";

export default function PaymentMethods() {
  const PREFIX = "https://www.codere.es/assets1/lpImages";
  const imageSources = [
    `${PREFIX}/cs-logo_Bizum.webp`,
    `${PREFIX}/cs-logo_HalCash.webp`,
    `${PREFIX}/cs-logo_LocalCodere.webp`,
    `${PREFIX}/cs-logo_Mastercard.webp`,
    `${PREFIX}/cs-logo_PayPal-darkbkg.webp`,
    `${PREFIX}/cs-logo_PaySafe-darkbkg.webp`,
    `${PREFIX}/cs-logo_RapidTransfer-darkbkg.webp`,
    `${PREFIX}/cs-logo_Visa.webp`,
    `${PREFIX}/cs-logo-TransferenciaBancaria.webp`,
    `${PREFIX}/cs-logo-transferencia-inmediata.webp`,
  ];
  return (
    <div className="text-center mt-5 pb-8 font-bold">
      <h1 className="text-4xl! px-2">Métodos para depositar y cobrar</h1>
      <div className="grid md:w-[500px] w-full grid-flow-row-dense grid-cols-5 grid-rows-2 gap-2 m-auto py-3">
        {imageSources.map((src, i) => (
          <img width={100} key={i} src={src} />
        ))}
      </div>
    </div>
  );
}
