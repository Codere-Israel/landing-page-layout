import React from "react";
import { LOGIN_URL, REGIS_URL } from "../helper/consts";
import { observer } from "mobx-react";
import myStore from "../mobX/myStore";

const Header = observer(() => {
  return (
    <div className="absolute w-full top-0 h-[66px] bg-[#252a30]">
      {myStore.component && (
        <div className="flex items-center h-full justify-between md:px-10 px-3">
          <img
            className="md:w-[150px] w-[28vw]"
            src={`https://www.codere.es/assets1/icons/logo-${
              myStore.component !== null && myStore.component?.type === "Sport"
                ? "deportes"
                : "casino"
            }.svg`}
          />

          <div className="flex gap-3">
            <button
              onClick={() => window.open(LOGIN_URL, "_self")}
              role="button"
              className="bg-[#79c000]! hover:bg-[#79c000cc]! md:block hidden"
            >
              Acceso
            </button>
            <button
              onClick={() => window.open(REGIS_URL, "_self")}
              className=""
            >
              Regístrate
            </button>
          </div>
        </div>
      )}
    </div>
  );
});

export default Header;
