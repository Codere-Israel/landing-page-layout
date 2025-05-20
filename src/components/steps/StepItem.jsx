import { observer } from "mobx-react";
import React from "react";
import myStore from "../../mobX/myStore";

const StepItem = observer(({ step, order }) => {
  return (
    <div className="flex flex-row md:gap-3 gap-4 items-center _md:max-w-[28%] max-w-full avner md:p-0 p-3 w-full">
      <span
        style={{
          color: myStore.component?.type === "Sport" ? "#79c000" : "#c546d3",
        }}
        className={`md:text-[110px] text-[16vw] font-medium`}
      >
        {order}
      </span>
      <div className="flex flex-col gap-2">
        <h3 className="xl:text-3xl md:text-xl font-semibold">{step.title}</h3>
        <p className="xl:text-base md:text-xs">{step.description}</p>
      </div>
    </div>
  );
});

export default StepItem;
