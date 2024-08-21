import React, { useEffect, useState } from "react";

function AdvertBox() {
  const [showAdvert, setShowAdvert] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAdvert(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {showAdvert && (
        <div className="w-full lg:h-fit h-full text-white gap-[18rem] py-2 bg-custom-gradient lg:flex hidden justify-end items-end pr-[7rem]">
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
            onClick={() => setShowAdvert(false)}
          >
            <img src={"/svg/close-circle.svg"} width={24} height={24} alt="" />
          </button>
        </div>
      )}
    </>
  );
}

export default AdvertBox;
