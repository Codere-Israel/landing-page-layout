import React from "react";
import StepItem from "./StepItem";
import { observer } from "mobx-react";
import myStore from "../../mobX/myStore";
import { toJS } from "mobx";

const Steps = observer(() => {
  // const stepsData = [
  //   {
  //     title: "Regístrate",
  //     text: "¡Bienvenido a Codere! Regístrate fácil y rápidamente",
  //   },
  //   {
  //     title: "Deposita",
  //     text: "Mínimo 20€ y duplica tu primer depósito hasta 200€ (50% casino/50% deportes)",
  //   },
  //   {
  //     title: "Diviértete y gana",
  //     text: "Cobra más rápido y al instante ¡Así de fácil!",
  //   },
  // ];

  const stepsData = myStore.component?.steps || [];

  // console.log(toJS(myStore.component));

  return (
    <div className="text-white flex md:flex-row flex-col gap-1 items-center block">
      {stepsData.map((step, index) => (
        <React.Fragment key={index}>
          <StepItem step={step} order={index + 1} />
          {index + 1 < stepsData.length && (
            <img width="50" height="50"
              className="h-[100px] rotate-90 md:rotate-0 md:block hidden"
              src="https://www.codere.es/assets1/logosAndSponsors/landingPagesArrow.webp"
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
});
export default Steps;
