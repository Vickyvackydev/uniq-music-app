import { useMediaQuery } from "hooks";
import React from "react";
import Button from "shared/reusables/button";

const detailsLogs = [
  {
    users: "8.05M",
    title: "Total Followers",
  },
  {
    users: "27.2K",
    title: "Subscribers",
  },
  {
    users: "39.6M",
    title: "Streams & Downloads",
  },
  {
    users: "152",
    title: "Music Awards",
  },
];
function AboutPage() {
  const mobileScreen = useMediaQuery("(max-width: 640px)");
  return (
    <main className="lg:my-[6rem] my-10 lg:mx-[6rem] mx-5">
      <div className="flex justify-between lg:items-center items-start gap-6 lg:flex-row flex-col">
        <div className="flex flex-col lg:gap-1 gap-4">
          <h6 className="text-[#979797] text-[16px]">About UniQ</h6>
          <span className="lg:text-[64px] text-2xl font-extrabold largeText text-black lg:leading-[65px] leading-none">
            EVERY BEAT HAS ITS <br /> OWN{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #732982 27.2%, #24408E 34.74%, #008026 42.29%, #FF8C00 49.83%, #FFED00 57.37%, #E40303 64.91%)",
              }}
            >
              {" "}
              GROOVE{" "}
            </span>
          </span>
          <span className="lg:w-[480px] w-[300px] text-[16px] text-[#616161]">
            UniQ Records is not just a label, it's a movement. We amplify
            voices, drop the dopest tracks, and make sure the world hears unique
            sounds. We are the heartbeat of tomorrow’s music.
          </span>
        </div>
        <Button
          text="Learn More"
          textColor={"text-black"}
          btnstyle="border-black"
          svgIcon="/svg/arrow-right-black.svg"
        />
      </div>
      <div className="flex items-center gap-[5rem] mt-16 lg:flex-row flex-col">
        {detailsLogs.map((data, index) => (
          <div className="flex items-center gap-[5rem]">
            <div className="flex items-start flex-col">
              <span className="text-[48px] font-extrabold text-[#1E1E1E]">
                {data.users}
              </span>
              <span className="text-[16px] font-normal text-[#979797]">
                {data.title}
              </span>
            </div>
            {index !== 3 && !mobileScreen && (
              <img src="/svg/align.svg" alt="" height={1} width={1} />
            )}
          </div>
        ))}
      </div>
    </main>
  );
}

export default AboutPage;
