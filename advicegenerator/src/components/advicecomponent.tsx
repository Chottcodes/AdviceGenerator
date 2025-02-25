import React from "react";
import "../styles/global.css";
import { useState, useEffect } from "react";

type parameters = {
  adviceNumber: number;
  adviceQuote: string;
};

const AdviceComponent = ({ adviceNumber, adviceQuote }: parameters) => {
  return (
    <div className="w-[90%] h-[80%] m-auto flex flex-col items-center gap-5 ">
      <div className=" w-full h-[80%] flex flex-col items-center gap-5">
        <p className=" text-[#52ffa8] pt-10">Advice #{adviceNumber}</p>
        <h1 className=" text-white text-[28px] break-words text-center">
          {adviceQuote}"
        </h1>
      </div>
      <div>
        <img src="/src/assets/pattern-divider-mobile.svg" alt="divider" />
      </div>
    </div>
  );
};
export default AdviceComponent;
