import React from "react";
import '../styles/global.css';
import { useState, useEffect } from "react";


const AdviceComponent = () => {

    return (
        <div className="w-[90%] h-[80%]  m-auto flex flex-col items-center gap-5 " >
            <p className=" text-[#52ffa8] pt-10">Advice #5</p>
            <h1 className=" text-white text-[28px] break-words text-center">"It is easy to sit up and take notice, whats's difficult is getting up and taking action"</h1>
        </div>
    )
}
export default AdviceComponent;