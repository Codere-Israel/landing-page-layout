import React from "react";
import Steps from "./steps/Steps";
import Tyc from "./Tyc";
import PaymentMethods from "./PaymentMethods";
import SlideButton from "./SlideButton";
import { REGIS_URL } from "../helper/consts";

export default function () {
  return (
    <div>
      <div
        className={`hero w-[100vw] relative mt-[66px] md:h-[35vw] h-[129vw] bg-cover bg-center`}
      >
        <div className="md:hidden block">
          <SlideButton />
        </div>
        <button
          onClick={() => window.open(REGIS_URL, "_self")}
          className="md:block hidden absolute bottom-[5.25vw] text-[2vw]! left-[19.25vw] w-[18vw]!  rounded-md! "
        >
          Registrate
        </button>
      </div>
      <div className="md:w-3/5 w-11/12 m-auto">
        <Steps />
        <Tyc />
        <PaymentMethods />
      </div>
    </div>
  );
}
