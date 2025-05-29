import React from "react";
import Steps from "./steps/Steps";
import Tyc from "./Tyc";
import PaymentMethods from "./PaymentMethods";
import SlideButton from "./SlideButton";
import { REGIS_URL } from "../helper/consts";
import { observer } from "mobx-react";
import myStore from "../mobX/myStore";
import { toJS } from "mobx";
import { useMediaQuery } from "react-responsive";

const Body = observer(() => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${toJS(
            myStore.component[`hero${isDesktopOrLaptop ? "Desktop" : "Mobile"}`]
              ?.default
          )})`,
        }}
        className={`hero w-[100vw] relative mt-[66px] md:h-[35vw] h-[129vw] bg-cover bg-center`} width="400" height="400"
      >
        <div className="md:hidden block">
          <SlideButton />
        </div>

        <div className="md:block hidden absolute bottom-[4.25vw] left-[19.25vw]">
          <button
            role="button"
            onClick={() => window.open(REGIS_URL, "_self")}
            className="w-[18vw]! rounded-md! text-[2vw]! bg-[#0d6efd]!"
          >
            {myStore.component?.ctaText}
          </button>
          <div
            style={{ color: myStore.component?.disclaimer?.color || "#ffffff" }}
            className={`text-center text-[0.65rem] w-[18vw]`}
          >
            {myStore.component?.disclaimer?.text}
          </div>
        </div>
      </div>
      <div className="md:w-3/5 w-11/12 m-auto">
        <Steps />
        <Tyc />
        <PaymentMethods />
      </div>
    </>
  );
});

export default Body;
