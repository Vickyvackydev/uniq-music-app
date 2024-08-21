import React from "react";
import Button from "shared/reusables/button";

const upadtes = [
  {
    displayImage: "/svg/boys-bg.jpeg",
    title: "Love & Music this Pride Month",
    text: "🌈 It’s that magical time of year again when we come together to celebrate love, diversity, and the incredible power of music.",
    date: "7 Jun, 04:38AM",
  },
  {
    displayImage: "/svg/studio-bg.jpeg",
    title: "Creating Perfect Chill-wave Atmosphere",
    text: "Step into a world of dreamy soundscapes with Aurora Vibes as she shares her secrets to creating the perfect chill-wave atmosphere in your music.",
    date: "11 May, 04:12PM",
  },
  {
    displayImage: "/svg/award-bg.jpeg",
    title: "Big Wins & Behind-the-Scenes Moments",
    text: "Join us as we take a celebratory lap around UniQ Records, honoring the artists who stole the show and left a lasting impression at the awards.",
    date: "28 Apr, 04:38AM",
  },
];

function UpdatesPage() {
  return (
    <main className="w-full lg:px-[4rem] px-5 py-[5rem]">
      <div className="flex justify-between lg:items-center lg:flex-row flex-col items-start">
        <div className="flex flex-col gap-2 w-[480px]">
          <span className="text-[16px] font-normal text-[#979797]">
            Our Blog
          </span>
          <span className="lg:text-[64px] text-[40px] font-extrabold text-[#1E1E1E]  largeText  lg:leading-[70px] leading-tight">
            UNIQ NEWS &{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #732982 27.2%, #24408E 34.74%, #008026 42.29%, #FF8C00 49.83%, #FFED00 57.37%, #E40303 64.91%)",
              }}
            >
              UPDATES
            </span>{" "}
          </span>
          <span className="text-[16px] text-[#616161] lg:w-full w-[280px]">
            Dive into the heartbeat of UniQ Records! From behind-the-scenes
            stories to the latest music trends, our blog is your all-access pass
            to the world of music.
          </span>
        </div>
        <Button
          text="Visit Our Blog"
          svgIcon="/svg/arrow-right-black.svg"
          btnstyle="border-[#616161] lg:mt-0 mt-6"
          textColor="text-[#616161]"
        />
      </div>
      <div className="flex items-center lg:flex-row flex-col gap-5 mt-8">
        {upadtes.map((data) => (
          <div className="lg:w-[397.33px] w-full">
            <div className="">
              <img
                src={data.displayImage}
                alt=""
                className="lg:w-[397.33px] w-full h-[240px]"
              />
            </div>
            <div className="mt-4 flex flex-col gap-3">
              <span className="text-[18px] font-semibold largeText text-[#1E1E1E]">
                {data.title}
              </span>
              <span className="lg:w-[397px] w-full text-[16px] text-[#8D8D8D]">
                {data.text}
              </span>
              <span className="text-[16px] text-[#1E1E1E]">{data.date}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default UpdatesPage;
