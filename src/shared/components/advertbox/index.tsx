import React from "react";

function AdvertBox() {
  return (
    <div className="w-full h-fit text-white gap-[18rem] py-2 bg-custom-gradient flex justify-end items-end pr-[7rem]">
      <span className="text-sm">
        Celebrate Pride Month with Uni-Q at 20% off our music and services.
        <span className="font-semibold underline ml-1 cursor-pointer hover:text-gray-400">
          {" "}
          Learn More
        </span>
      </span>
      <button
        type="button"
        className="hover:scale-110 transition-all duration-300"
      >
        <img src={"/svg/close-circle.svg"} width={24} height={24} alt="" />
      </button>
    </div>
  );
}

export default AdvertBox;
