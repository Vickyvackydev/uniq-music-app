import React from "react";
import { ButtonPropertyTypes } from "types";

function Button(props: ButtonPropertyTypes) {
  return (
    <button
      type="button"
      onClick={props.handleClick}
      className={`w-[220px] h-[48px] border relative  ${
        props.textColor || "text-white"
      } flex items-center gap-3  justify-center rounded-sm ${
        props.btnstyle
      } hover:scale-110 transition-all duration-300 `}
    >
      <span className={`text-[16px] `}>{props.text}</span>
      <img
        src={props.svgIcon || `/svg/arrow-right.svg`}
        width={24}
        height={24}
        alt="button"
      />
    </button>
  );
}

export default Button;
