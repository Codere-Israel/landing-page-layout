import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";

export default function Tyc() {
  const tycList = [
    "PERIODO DE LA PROMOCIÓN: Promoción válida únicamente para nuevos usuarios registrados desde el 16 de diciembre de 2024 a las 00:01 en adelante.",
    "EXPLICACIÓN: (PROMOCIÓN EXCLUSIVA PARA NUEVOS REGISTROS)",
    "La promoción consiste en que el usuario obtendrá el 100% de su primer depósito, previa inscripción en la promoción, hasta un máximo de 200€, divididos en 50% de bono de casino y 50% de freebet. Es decir, si el usuario deposita 200€, recibirá 100€ en freebet y 100€ en bono de casino. El Bono de Bienvenida se mostrará en un pop-up tras el registro. Si el usuario rechaza el pop-up en dos ocasiones, perderá la oportunidad de acceder a la promoción.",
    "Se contabilizará el primer depósito realizado una vez completado el proceso de registro.",
    "El depósito mínimo es de 20€. El depósito máximo antes de completar la verificación será de 150€.",
    "Se dispondrá de un plazo de 30 días desde la fecha de registro como nuevo usuario para inscribirse en la promoción.",
    "No será posible aprovechar ninguna otra promoción de depósito hasta que pasen 30 días desde el momento en el que se haya inscrito en la promoción.",
    "CONDICIONES BONO 50% DEPORTES:",
    "Para recibir el bono, se deberán realizar apuestas (con una cuota mínima de 2.00) por un valor equivalente al al 50% del deposito realizado. Las apuestas pueden realizarse de forma fraccionada hasta alcanzar el 50% del valor correspondiente al primer depósito. No serán válidas las apuestas realizadas con freebets. La Freebet entregada tendrá un valor equivalente al 50% del importe del depósito realizado. En caso de que el monto a entregar no sea un múltiplo de 5€, se redondeará al alza. Una vez realizado este depósito, se dispondrá de un plazo de 7 días para liberar el bono, debiendo las apuestas ser realizadas y quedar resueltas dentro de este plazo. Pasado períodos, no se podrá reclamar el Bono de Bienvenida. No se podrá solicitar ningún retiro de fondos hasta que se haya jugado el bono. En caso de solicitar un retiro antes de cumplir este requisito, el Bono de Bienvenida será invalidado. Las freebets se asignarán en un plazo máximo de 3 días hábiles, una vez cumplidas las condiciones anteriormente mencionadas. La freebet deberá utilizarse con base a los Términos y Condiciones de Bonificaciones, punto 1",
    "CONDICIONES BONO 50% CASINO:",
    "El pago del bono de casino, equivalente al 50% del primer depósito, será acreditado de forma automática una vez realizado el primer depósito. El bono se podrá utilizar en todos los juegos de la pestaña casino. El bono tendrá una duración de 4 días desde su entrega. El importe del bono no es retirable. Los requisitos de apuesta para liberar el importe del bono y las ganancias asociadas al mismo son de treinta veces (x30) la cantidad de la bonificación. Por ejemplo, si ganas un bono de 5€, deberás jugar 150€ para canjear cualquier ganancia del mismo. El máximo a ser liberado en ganancias será de 500€. El resto de las ganancias obtenidas con el bono, serán canceladas.",
    "Para más información ingresar a https://m.apuestas.codere.es/deportesEs/#/mso/PromotionsPage?url=https://www.codere.es/PromosCalidad/actives/WB_xsl_optin.html",
  ];

  const [showTyc, setShowTyc] = useState(false);

  return (
    <div className="mt-5">
      <div className="text-center underline">
        <span>{showTyc ? "-" : "+"}</span>
        <span className="cursor-pointer" onClick={() => setShowTyc(!showTyc)}>
          Términos y Condiciones
        </span>
      </div>
      {showTyc && (
        <Fade triggerOnce>
          <ul className="list-unstyled">
            {tycList.map((tycItem, i) => (
              <li className="pt-2 ps-5" key={i}>
                {tycItem}
              </li>
            ))}
          </ul>
        </Fade>
      )}
    </div>
  );
}
