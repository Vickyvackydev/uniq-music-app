import React from "react";
import Button from "shared/reusables/button";

const artstslist = [
  {
    displayImage: "/svg/img-1.png",
    name: "Blazing",
    songType: "Electronic/Pop",
    description:
      "A sonic powerhouse blending electrifying beats with catchy pop melodies.",
    songlists: "14",
  },
  {
    displayImage: "/svg/img-2.png",
    name: "Solstice",
    songType: "R&B/Soul",
    description:
      "A celestial touch to the world of R&B, with smooth vocals that glide over groovy instrumentals.",
    songlists: "8",
  },
  {
    displayImage: "/svg/img-3.png",
    name: "Aurora",
    songType: "Alternative",
    description:
      "The heartbeat of the indie rock scene. Known for their raw, unfiltered sound and thought-provoking lyrics.",
    songlists: "28",
  },
  {
    displayImage: "/svg/img-4.png",
    name: "Zephyr",
    songType: "Hip-Hop/Rap",
    description:
      "Crafts dreamy soundscapes that transport listeners to a serene, otherworldly realm.",
    songlists: "2",
  },
];
function ArtistPage() {
  return (
    <main className="lg:px-14 px-5 py-16">
      <div className="flex justify-between lg:items-center items-start lg:gap-0 gap-5 lg:flex-row flex-col">
        <div className="flex flex-col gap-3">
          <span className="text-[#979797] text-[16px]">Our Artists</span>
          <span className="lg:text-[64px] text-[40px] text-black font-extrabold lg:leading-[65px] leading-tight largeText">
            AMAZING <br /> UNIQ{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  " linear-gradient(90deg, #732982 38.54%, #24408E 46.67%, #008026 54.79%, #FF8C00 62.92%, #FFED00 71.04%, #E40303 79.17%",
              }}
            >
              STARS
            </span>
          </span>
          <span className="lg:w-[480px] w-[280px] break-words text-[#616161] text-[16px]">
            Meet the game-changers. Our artists are not just performers, they’re
            storytellers, visionaries, and trendsetters. From rap to rock, pop
            to hip-hop, get to know the faces behind the beats.
          </span>
        </div>
        <Button
          textColor="text-[#1E1E1E]"
          text="All Artists"
          btnstyle="border-black"
          svgIcon="/svg/arrow-right-black.svg"
        />
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-5 mt-12">
        {artstslist.map((lists) => (
          <div className="flex flex-col gap-5">
            <div className="w-[292px] h-[420px]">
              <img src={lists.displayImage} alt="" />
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-[#1E1E1E] text-[16px] font-semibold largeText">
                {lists.name}
              </span>
              <span className="text-[#979797] text-[16px]">
                {lists.songType}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[#1E1E1E] font-normal text-[16px] w-[280px] break-words">
                {lists.description}
              </span>
              <span className="text-[#979797] text-[16px]">
                {lists.songlists} Songs, 2 Album
              </span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default ArtistPage;
