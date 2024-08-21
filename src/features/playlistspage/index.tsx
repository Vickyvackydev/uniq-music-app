import { useMediaQuery } from "hooks";
import React from "react";
import Button from "shared/reusables/button";

const musiclists = [
  {
    displayImage: "/svg/music-label-1.png",
    title: "Anthems",
    feat: "Echo West",
    playlist: "Single",
  },
  {
    displayImage: "/svg/music-label-2.png",
    title: "All The Forms",
    feat: "Aurora feat. Nova",
    playlist: "You Matter",
  },
  {
    displayImage: "/svg/third-music.svg",
    title: "High On Mighty",
    feat: "Zephyr",
    playlist: "Drowning EP",
  },
  {
    displayImage: "/svg/music-label-4.png",
    title: "Rainbow Shower",
    feat: "Blazing feat. Skeptic",
    playlist: "Blazing",
  },
  {
    displayImage: "/svg/music-label-5.png",
    title: "Come Around",
    feat: "Solstice",
    playlist: "Damn That",
  },
];
function PlayListPage() {
  const mobilescreen = useMediaQuery("(max-width: 640px)");
  return (
    <main
      className="w-full h-full  bg-cover bg-center py-14 lg:px-16 px-4"
      style={{
        backgroundImage: "url('/svg/head-phone-bg.jpeg')",
      }}
    >
      <div className="flex justify-between items-start lg:flex-row flex-col lg:gap-0 gap-5">
        <div>
          <div className="flex flex-col">
            <span className="text-[#979797] text-[16px] mb-3">Pride Month</span>
            <span className="lg:text-[64px] text-2xl font-extrabold largeText text-[#1E1E1E] lg:leading-[70px] leading-tight">
              UNIQ <br />
              CELEBRATES <br />
              <span
                className="text-transparent bg-clip-text "
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #732982 27.2%, #24408E 34.74%, #008026 42.29%, #FF8C00 49.83%, #FFED00 57.37%, #E40303 64.91%)",
                }}
              >
                PRIDE
              </span>{" "}
            </span>
            <div className="flex flex-col gap-4 mt-2 text-[16px] text-[#616161]">
              <span className="lg:w-[360px] w-[280px] break-words">
                Music is a universal language that transcends all boundaries.
                We’re turning up the volume on love, diversity, and inclusivity.
                Join us as we celebrate the LGBTQ+ community!
              </span>
              <span className="lg:w-[360px] w-[280px] break-words">
                Join the conversation on social media using these hashtags
                #PrideMonth #LoveIsLove #LGBTQ #LoveWins #PrideCelebration
              </span>
            </div>
          </div>
          <Button
            text="Full Playlist"
            btnstyle="border-black lg:mt-[13rem] mt-[5rem]"
            svgIcon="/svg/arrow-right-black.svg"
            textColor="text-[#1E1E1E]"
          />
        </div>
        <div className="lg:w-[400px] w-full lg:h-[736px] h-full lg:pb-0 pb-4 px-8 bg-[#F7F7F7CC] bg-opacity-[80%] flex flex-col items-center gap-5 pt-6">
          <span className="largeText font-semibold">Recommended Playlist</span>
          <div className="w-full flex flex-col gap-5">
            {musiclists.map((lists) => (
              <div className="w-full flex justify-between items-center">
                <div className="flex items-center gap-6">
                  <img
                    src={lists.displayImage}
                    alt=""
                    width={mobilescreen ? 50 : 100}
                    height={mobilescreen ? 50 : 100}
                  />
                  <div className="flex flex-col items-start">
                    <span className="font-semibold largeText text-[16px] text-[#1E1E1E]">
                      {lists.title}
                    </span>
                    <span className="text-[#979797] text-[16px] font-normal">
                      {lists.feat}
                    </span>
                    <span className="text-[#979797] text-[16px] font-normal">
                      {lists.playlist}
                    </span>
                  </div>
                </div>
                <button type="button">
                  <img src="/svg/play-circle.svg" alt="" />
                </button>
              </div>
            ))}
          </div>
          <button className="mt-3">
            <img src="/svg/arrow-down.svg" alt="" />
          </button>
        </div>
      </div>
    </main>
  );
}

export default PlayListPage;
