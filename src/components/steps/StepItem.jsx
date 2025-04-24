import React from "react";

export default function StepItem({ step, order }) {
  return (
    <div className="flex flex-row md:gap-3 gap-4 items-center _md:max-w-[28%] max-w-full avner md:p-0 p-3 w-full">
      <span className="md:text-[110px] text-[16vw] font-medium text-[#c546d3]">
        {order}
      </span>
      <div className="flex flex-col gap-2">
        <h3 className="xl:text-3xl md:text-xl font-semibold">{step.title}</h3>
        <p className="xl:text-base md:text-xs">{step.text}</p>
      </div>
    </div>
  );
}
