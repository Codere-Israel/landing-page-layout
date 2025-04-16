import React from "react";

export default function Footer() {
  const LOGOS_PREFIX = "https://www.codere.es/assets1/logosAndSponsors";
  const regulations = [
    { imgSrc: "logo-responsabilidad.webp" },
    {
      imgSrc: "autopro.webp",
      url: "https://www.ordenacionjuego.es/participantes-juego/juego-seguro/rgiaj",
    },
    {
      imgSrc: "JugarSeguro.svg",
      url: "https://www.ordenacionjuego.es/participantes-juego/juego-seguro",
    },
    {
      imgSrc: "logo-juego-autorizado.webp",
      url: "https://www.ordenacionjuego.es/participantes-juego/juego-autorizado",
    },
    {
      imgSrc: "logo18.webp",
      url: "https://www.codere.es/Paginas/juego-responsable.aspx#procreg",
    },
    { imgSrc: "sin-dev.webp" },
  ];
  return (
    <div className="text-center text-sm">
      <div className="px-3">
        <h1 className="font-bold text-4xl!">Contacta con nosotros</h1>
        <h3>apuestas@codere.com</h3>
        <p>
          Codere Apuestas opera en España bajo Codere Online, SAU, con las
          siguientes licencias otorgadas por la{" "}
          <a href="https://www.ordenacionjuego.es/operadores-juego/operadores-licencia/operadores/codere-online-sau">
            DGOJ
          </a>
          :
        </p>
        <p>
          225-11/GA/A86346038/SGR, AOC/2014/002, ADC/2014/001, AHC/2014/002,
          223-11/GO/ A86346038/SGR, MAZ/2015/032, RLT/2016/009, BLJ/2016/007. ©
          2018 Codere. Todos los derechos reservados.
        </p>
      </div>

      <div className="mt-5 bg-black w-full text-center py-3 m-auto flex flex-wrap justify-center items-center gap-3 px-2">
        {regulations.map((regItem, i) => (
          <a
            key={i}
            target={regItem.url ? "_self" : null}
            href={regItem.url ? regItem : null}
          >
            <img
              className="md:max-h-[40px] max-h-[15px] md:p-2 p-0"
              src={`${LOGOS_PREFIX}/${regItem.imgSrc}`}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
