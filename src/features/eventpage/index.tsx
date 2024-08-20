import React from "react";
import Button from "shared/reusables/button";

function EventPage() {
  return (
    <main className="px-[4rem] py-[4rem] w-full">
      <div className="flex flex-col items-center justify-center ">
        <div className="flex flex-col items-center w-[520px] gap-3">
          <span className="text-[#979797] text-[16px] font-normal">
            Album & Event
          </span>
          <span className="text-[64px] font-extrabold text-[#1E1E1E] text-center leading-[65px] largeText">
            FRESH DROPS AND{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #732982 27.2%, #24408E 34.74%, #008026 42.29%, #FF8C00 49.83%, #FFED00 57.37%, #E40303 64.91%)",
              }}
            >
              EVENTS
            </span>
          </span>
          <span className="text-center text-[16px] text-[#979797] w-[450px]">
            From underground clubs to big stages, we’re bringing the noise to a
            city near you. Don’t miss out on the most epic music, artists and
            events. Let’s get this party started!
          </span>
        </div>
        <div className="w-full flex flex-col gap-5 mt-5">
          <div className="flex items-center gap-5">
            <div className="">
              <img
                src="/svg/paper-bg.jpeg"
                alt=""
                className="w-[680px] max-w-[608px] h-[292px] max-h-[292px]"
              />
            </div>
            <div className="w-full max-w-[292px] h-full max-h-[292px]">
              <img
                src="/svg/planet-bg.jpeg"
                alt=""
                className="w-[292px] max-w-[292px] h-[292px] max-h-[292px]"
              />
            </div>
            <div className="relative ">
              <div className="absolute bg-[#1E1E1E99] inset-0" />
              <Button
                text="All Album"
                btnstyle="absolute z-10 top-[8rem] left-[2rem]"
              />
              <img
                src="/svg/gal-bg.png"
                alt=""
                className="max-w-[292px] w-[292px] h-[292px]  max-h-[292px]"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-5">
              <div className="w-full max-w-[292px] h-full max-h-[292px]">
                <img
                  src="/svg/boys-bg.jpeg"
                  alt=""
                  className="w-[292px] max-w-[292px] h-[292px] max-h-[292px]"
                />
              </div>
              <div className="">
                <img
                  src="/svg/band-bg.jpeg"
                  alt=""
                  className="w-[608px] max-w-[608px] h-[292px] max-h-[292px]"
                />
              </div>
              <div className="relative ">
                <div className="absolute bg-[#1E1E1E99] inset-0" />
                <Button
                  text="All Events"
                  btnstyle="absolute z-10 top-[8rem] left-[2rem]"
                />
                <img
                  src="/svg/party-bg.jpeg"
                  alt=""
                  className="max-w-[292px] w-[292px] h-[292px]  max-h-[292px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default EventPage;
