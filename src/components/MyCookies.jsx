import { useState } from "react";
import CookieConsent, { Cookies } from "react-cookie-consent";

export default function MyCookies() {
  const [showCookieConsent, setShowCookieConsent] = useState(
    Cookies.get("consentStatus") ? false : true
  );

  const cookieHandler = (isAccepted) => {
    const acceptedValue = isAccepted ? "granted" : "denied";

    // console.log("New status: ", acceptedValue);
    window.gtag("consent", "update", {
      ad_storage: acceptedValue,
      ad_user_data: acceptedValue,
      ad_personalization: acceptedValue,
      functionality_storage: acceptedValue,
      personalization_storage: acceptedValue,
      security_storage: acceptedValue,
      analytics_storage: acceptedValue,
    });

    // window.fbq("consent", isAccepted ? "grant" : "revoke");

    const oneYearFromNow = new Date();
    oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);

    Cookies.set(
      "consentStatus",
      `{"customOK":${isAccepted},"analyticsOK":${isAccepted},"advertismentOK":${isAccepted}}`,
      {
        domain: ".codere.es",
        expires: oneYearFromNow,
      }
    );
    setShowCookieConsent(false);
  };

  return (
    <div>
      {showCookieConsent && (
        <CookieConsent
          cookieName="consentStatus"
          expires={365}
          buttonClasses="hidden"
          buttonText=""
          overlay={false}
          disableButtonStyles
          extraCookieOptions={{ domain: ".codere.es" }}
          overlayClasses="cookie-overlay "
          containerClasses="bg-[#000c]!"
          contentClasses="p-2 pt-5"
        >
          <div className="">
            <h3 className="text-2xl md:text-3xl">Configuración de cookies</h3>
            <div className="text-xs">
              Esta página web, propiedad de Codere Online S.A.U, utiliza cookies
              propias y de terceros con la finalidad de permitir tu navegación,
              elaborar información estadística y analizar tus hábitos de
              navegación, así como mostrarte la publicidad ajustada a tus
              preferencias. Puedes hacer clic en ACEPTAR para permitir el uso de
              todas las cookies, rechazarlas todas haciendo clic en RECHAZAR, o
              elegir qué tipo de cookies deseas aceptar o rechazar, mediante la
              opción configurar cookies. Puedes obtener más información en
              nuestra{" "}
              <a href="https://www.codere.es/ayuda/politica-de-cookies">
                política de cookies
              </a>
              . Está página web está optimizada para Google Chrome, en caso de
              encontrar algún funcionamiento incorrecto por favor use el citado
              navegador.
            </div>
          </div>
          <div className="cookie-button-group flex flex-col md:flex-row gap-2 mt-2">
            <button
              className="bg-[#79c000]! hover:bg-[#79c000cc]!"
              onClick={() => cookieHandler(true)}
            >
              Aceptar
            </button>
            <button
              className="bg-[#79c000]! hover:bg-[#79c000cc]!"
              onClick={() => cookieHandler(false)}
            >
              Rechazar
            </button>
            <button
              className="bg-white! text-black!"
              rel="nofollow"
              href="https://m.apuestas.codere.es/deportesEs/#/mso/CookiesConsentPage"
            >
              Configurar Cookies
            </button>
          </div>
        </CookieConsent>
      )}
    </div>
  );
}
