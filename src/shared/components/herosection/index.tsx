import React from "react";
import Navbar from "../navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Button from "shared/reusables/button";

function HeroSection() {
  return (
    <div className="relative w-full">
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
          <div className="h-[720px] lg:w-full w-[335px] lg:pt-[8rem] pt-0">
            <div
              className="absolute inset-0 bg-cover bg-center "
              style={{
                backgroundImage:
                  "url('/svg/first_image.jpg'), linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%)",
                backgroundBlendMode: "overlay",
              }}
            ></div>
            <motion.div
              className="relative z-10 flex mt-[6rem] lg:mr-14 mr-0 flex-col lg:items-end items-center justify-center gap-0"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.span
                className="lg:text-[150px] text-3xl largeText font-extrabold text-white lg:text-right text-center"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                UNIQ RECORDS
              </motion.span>
              <motion.span
                className="italic lg:text-[20px] text-sm text-white  lg:mt-10 mt-0"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                ...freshest sounds, hottest artists
              </motion.span>
            </motion.div>

            <motion.div
              className="flex justify-between items-center lg:flex-row flex-col px-12 z-10 relative mt-[20rem] lg:ml-0 ml-8 "
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="lg:w-[360px] w-[280px] lg:text-left text-center text-[16px] break-words text-white">
                We're all about celebrating music in its purest form. We believe
                that every artist has a unique voice that deserves to be heard.
              </span>

              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Button text="Explore" btnstyle="lg:mt-0 mt-6 lg:mr-0 mr-4" />
              </motion.div>
            </motion.div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[720px] lg:w-full w-[335px] lg:pt-[8rem] pt-0">
            <div
              className="absolute  bg-cover bg-center inset-0"
              style={{
                backgroundImage:
                  "url('/svg/second_image.png'), linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%)",
                backgroundBlendMode: "overlay",
              }}
            ></div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10 flex mt-[6rem] lg:mr-14 mr-8 flex-col items-end justify-center gap-0"
            >
              <motion.span
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="lg:text-[150px] text-3xl largeText font-extrabold text-white lg:text-right text-center"
              >
                RATED MUSICS
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="italic lg:text-[20px] text-sm  text-white lg:mt-10 mt-0"
              >
                ...top-rated sounds, reiging artists
              </motion.span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex justify-between lg:flex-row flex-col items-center px-12 z-10 relative mt-[20rem] lg:ml-0 ml-8 "
            >
              <span className="lg:w-[360px] w-[280px] lg:text-left text-center text-[16px] break-words text-white ">
                We're all about celebrating music in its purest form. We believe
                that every artist has a unique voice that deserves to be heard.
              </span>

              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Button text="Explore" btnstyle="lg:mt-0 mt-6 lg:mr-0 mr-4" />
              </motion.div>
            </motion.div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[720px] lg:w-full w-[335px] lg:pt-[8rem] pt-0">
            <div
              className="absolute bg-cover bg-center inset-0"
              style={{
                backgroundImage:
                  "url('/svg/third-image.jpeg'), linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%)",
                backgroundBlendMode: "overlay",
              }}
            ></div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10 flex mt-[6rem] lg:mr-14 mr-9 flex-col items-end justify-center gap-0 "
            >
              <motion.span
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="lg:text-[150px] text-3xl largeText font-extrabold text-white lg:text-right text-center"
              >
                UNIQ SOUNDS
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="italic lg:text-[20px] text-sm text-white lg:mt-10 mt-0"
              >
                ...cool soundtracks, reiging artists
              </motion.span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex justify-between lg:flex-row flex-col items-center px-12 z-10 relative mt-[20rem] lg:ml-0 ml-8"
            >
              <span className="lg:w-[360px] w-[280px] lg:text-left text-center text-[16px] break-words text-white ">
                We're all about celebrating music in its purest form. We believe
                that every artist has a unique voice that deserves to be heard.
              </span>

              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Button text="Explore" btnstyle="lg:mt-0 mt-6 lg:mr-0 mr-4" />
              </motion.div>
            </motion.div>
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

  /* Media query for screens wider than 768px */
  @media (min-width: 768px) {
    .swiper-button-next,
    .swiper-button-prev {
       margin-left: 20px;
       margin-right: 20px;
      
    }
  }

  /* Media query for screens wider than 1024px */
  @media (min-width: 1024px) {
    .swiper-button-next,
    .swiper-button-prev {
      margin-left: 70px;
      margin-right: 70px;
    }
  }

  /* Media query for screens smaller than 768px */
  @media (max-width: 767px) {
    .swiper-button-next,
    .swiper-button-prev {
      margin-left: 30px;
      margin-right: 30px;
    }
  }
`}</style>
    </div>
  );
}

export default HeroSection;
