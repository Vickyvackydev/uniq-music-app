import React from "react";
import Button from "shared/reusables/button";

function EventPage() {
  return (
    <main className="lg:px-[4rem] px-5 py-[4rem] w-full">
      <div className="flex flex-col items-center justify-center ">
        <div className="flex flex-col items-center w-[520px] gap-3">
          <span className="text-[#979797] text-[16px] font-normal">
            Album & Event
          </span>
          <span className="lg:text-[64px] text-2xl font-extrabold  text-[#1E1E1E] text-center lg:leading-[65px] leading-tight largeText">
            FRESH DROPS <br className="lg:hidden flex" />
            AND{" "}
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
          <span className="text-center lg:text-[16px] text-sm text-[#979797] lg:w-[450px] w-[280px]">
            From underground clubs to big stages, we’re bringing the noise to a
            city near you. Don’t miss out on the most epic music, artists and
            events. Let’s get this party started!
          </span>
        </div>
        <div className="w-full flex flex-col gap-5 mt-5">
          <div className="flex items-center gap-5 lg:flex-row flex-col">
            <div className="">
              <img
                src="/svg/paper-bg.jpeg"
                alt=""
                className="lg:w-[680px] w-full max-w-[608px] lg:h-[292px] h-full lg:max-h-[292px]"
              />
            </div>
            <div className="w-full lg:max-w-[292px] max-w-full h-full max-h-[292px]">
              <img
                src="/svg/planet-bg.jpeg"
                alt=""
                className="lg:w-[292px] w-full max-w-[292px] h-[292px] max-h-[292px]"
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
                className="lg:max-w-[292px] max-w-full lg:w-[292px] w-full h-[292px]  max-h-[292px]"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-5 lg:flex-row flex-col">
              <div className="w-full max-w-[292px] h-full max-h-[292px]">
                <img
                  src="/svg/boys-bg.jpeg"
                  alt=""
                  className="lg:w-[292px] w-full max-w-[292px] h-[292px] max-h-[292px]"
                />
              </div>
              <div className="">
                <img
                  src="/svg/band-bg.jpeg"
                  alt=""
                  className="lg:w-[680px] w-full max-w-[608px] lg:h-[292px] h-full lg:max-h-[292px]"
                />
              </div>
              <div className="relative w-full">
                <div className="absolute bg-[#1E1E1E99] inset-0" />
                <Button
                  text="All Events"
                  btnstyle="absolute z-10 top-[8rem] left-[2rem]"
                />
                <img
                  src="/svg/party-bg.jpeg"
                  alt=""
                  className="lg:max-w-[292px] max-w-full lg:w-[292px] w-full h-[292px]  max-h-[292px]"
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
