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
          )})`, // no image for mobile
        }}
        className={`hero w-[100vw] relative mt-[66px] md:h-[35vw] h-[129vw] bg-cover bg-center`}
      >
        <div className="md:hidden block">
          <SlideButton />
        </div>
        <button
          onClick={() => window.open(REGIS_URL, "_self")}
          className="md:block hidden absolute bottom-[5.25vw] text-[2vw]! left-[19.25vw] w-[18vw]!  rounded-md! "
        >
          {myStore.component?.ctaText}
        </button>
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
