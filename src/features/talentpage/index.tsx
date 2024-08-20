import React from "react";
import Button from "shared/reusables/button";

function TalentPage() {
  return (
    <main className="w-full px-[3rem] py-[4rem]">
      <div
        className="w-full bg-[#1E1E1E99]  bg-cover h-[382px] relative"
        style={{
          backgroundImage: "url('/svg/talent-bg.jpeg')",
          backgroundPositionY: "-200px",
        }}
      >
        <div className="bg-[#1E1E1E99] absolute inset-0" />
        <div className=" relative z-10 flex flex-col items-center gap-4 pt-10">
          <span className="text-white text-[16px]">Talent Hunt</span>
          <span className="text-[64px] font-extrabold text-white largeText">
            SHOW YOUR{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #732982 27.2%, #24408E 34.74%, #008026 42.29%, #FF8C00 49.83%, #FFED00 57.37%, #E40303 64.91%)",
              }}
            >
              TALENT
            </span>
          </span>
          <span className="w-[480px] text-white font-normal text-[16px] text-center">
            Wanna be part of the UniQ Records family? Whether you're an aspiring
            artist, a die-hard fan, or just love good music, we've got a spot
            for you.
          </span>
          <Button text="Join Now" btnstyle="mt-2" />
        </div>
      </div>
    </main>
  );
}

export default TalentPage;
