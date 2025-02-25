import React from "react";

type ButtonProps ={
    onClick: () => void;
    style?: string;
    imgstyles?: string;
}

const ButtonComponent: React.FC<ButtonProps> = ({onClick,style,imgstyles})=> {
    return (
        <button className={style} onClick={onClick}><img className={imgstyles} src="/src/assets/icon-dice.svg" alt="dice" /></button>
    )
}
export default ButtonComponent;