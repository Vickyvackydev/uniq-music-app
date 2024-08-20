import React from "react";
import Navbar from "../navbar";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Button from "shared/reusables/button";

function HeroSection() {
  return (
    <div className="relative">
      <Navbar />
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="h-full"
      >
        <SwiperSlide>
          <div className="h-[720px] ">
            <div
              className="absolute inset-0 bg-cover bg-center "
              style={{
                backgroundImage:
                  "url('/svg/first_image.jpg'), linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%)",
                backgroundBlendMode: "overlay",
              }}
            ></div>
            <div className="relative z-10 flex mt-[6rem] mr-14 flex-col items-end justify-center gap-0">
              <span className="text-[150px] largeText font-extrabold text-white ">
                UNIQ RECORDS
              </span>
              <span className="italic text-[20px] text-white mt-[-3rem]">
                ...freshest sounds, hottest artists
              </span>
            </div>

            <div className="flex justify-between items-center px-12 z-10 relative mt-[20rem]">
              <span className="w-[360px] text-[16px] break-words text-white ">
                We're all about celebrating music in its purest form. We believe
                that every artist has a unique voice that deserves to be heard.
              </span>

              <div>
                <Button text="Explore" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[720px]">
            <div
              className="absolute  bg-cover bg-center inset-0"
              style={{
                backgroundImage:
                  "url('/svg/second_image.png'), linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%)",
                backgroundBlendMode: "overlay",
              }}
            ></div>
            <div className="relative z-10 flex mt-[6rem] mr-14 flex-col items-end justify-center gap-0">
              <span className="text-[150px] largeText font-extrabold text-white ">
                RATED MUSICS
              </span>
              <span className="italic text-[20px] text-white mt-[-3rem]">
                ...top-rated sounds, reiging artists
              </span>
            </div>
            <div className="flex justify-between items-center px-12 z-10 relative mt-[20rem]">
              <span className="w-[360px] text-[16px] break-words text-white ">
                We're all about celebrating music in its purest form. We believe
                that every artist has a unique voice that deserves to be heard.
              </span>

              <div>
                <Button text="Explore" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[720px]">
            <div
              className="absolute bg-cover bg-center inset-0"
              style={{
                backgroundImage:
                  "url('/svg/third-image.jpeg'), linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%)",
                backgroundBlendMode: "overlay",
              }}
            ></div>
            <div className="relative z-10 flex mt-[6rem] mr-14 flex-col items-end justify-center gap-0">
              <span className="text-[150px] largeText font-extrabold text-white ">
                UNIQ SOUNDS
              </span>
              <span className="italic text-[20px] text-white mt-[-3rem]">
                ...cool soundtracks, reiging artists
              </span>
            </div>
            <div className="flex justify-between items-center px-12 z-10 relative mt-[20rem]">
              <span className="w-[360px] text-[16px] break-words text-white ">
                We're all about celebrating music in its purest form. We believe
                that every artist has a unique voice that deserves to be heard.
              </span>

              <div>
                <Button text="Explore" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide></SwiperSlide> */}
      </Swiper>
      {/* Custom Styles for Swiper */}
      <style>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white;
           margin-left: 70px;
          margin-right: 70px;
        }
        .swiper-pagination-bullet {
          background-color: white;
        }
        .swiper-pagination-bullet-active {
          background-color: white;
          opacity: 1;
        }
      `}</style>
    </div>
  );
}

export default HeroSection;
