import React, { useEffect, useState } from "react";
import Button from "shared/reusables/button";
import { motion } from "framer-motion";
import { useMediaQuery } from "hooks";

const testimonials = [
  {
    id: 1,
    displayImage: "/svg/profile-1.jpeg",
    name: "Alex Gutiérrez",
    role: "Music Fan",
    date: "02/12/2023",
    text: "UniQ Records has completely transformed my playlist! Every new release is a banger, and I love discovering fresh sounds and unique artists. Keep the hits coming!",
  },
  {
    id: 2,
    displayImage: "/svg/profile-2.jpeg",
    name: "Janet Connor",
    role: "UniQ Artist",
    date: "22/04/2024",
    text: "Being part of the UniQ Records family has been an incredible journey. The support, the creativity, and the love from the fans are unmatched.",
  },
  {
    id: 3,
    displayImage: "/svg/profile-1.jpeg",
    name: "Katie Aderonke",
    role: "Music Fan",
    date: "17/06/2024",
    text: "From the beats to the vibes, UniQ Records never disappoints. Their concerts are out of this world, and the community they've built is amazing.",
  },
];
function Fanspage() {
  const [selected, setSelected] = useState<number | null>(1);
  const mobilescreen = useMediaQuery("(max-width: 640px)");
  const variants = {
    hidden: { opacity: 0, x: 0 },
    visible: { opacity: 1, x: 0 },
    active: { x: -100, scale: 1.05, zIndex: 10 },
    inactive: { x: 0, scale: 1, zIndex: 1 },
  };

  useEffect(() => {
    const stateAction = (index: number | null) => {
      if (mobilescreen) {
        setSelected(null);
      } else if (!mobilescreen) {
        setSelected(index);
      }
    };
    stateAction(selected);
  }, [mobilescreen, selected]);
  return (
    <main
      className="w-full h-full relative lg:px-[6rem] px-5 py-[5rem]"
      style={{
        backgroundImage: "url('/svg/map-bg.jpeg')",
      }}
    >
      <div className="bg-[#1E1E1E99] absolute inset-0"></div>
      <div className="relative z-10 flex justify-between lg:flex-row flex-col lg:gap-0 gap-7">
        <div>
          <div className="w-[480px] flex flex-col gap-4">
            <span className="text-white font-normal text-[16px]">
              Testimonial
            </span>
            <span className="lg:text-[64px] text-3xl font-extrabold text-white largeText lg:leading-[60px] leading-tight">
              WHAT OUR{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #732982 27.2%, #24408E 34.74%, #008026 42.29%, #FF8C00 49.83%, #FFED00 57.37%, #E40303 64.91%)",
                }}
              >
                FANS
              </span>{" "}
              <br className="lg:hidden flex" />
              SAY
            </span>
            <span className="text-[16px] font-normal text-white w-[240px]">
              Don’t just take our word for it. Hear what our fans and artists
              have to say about their UniQ Records experience!
            </span>
          </div>
          <div className="lg:mt-[10rem] mt-[5rem]">
            <Button text="Reviews" />
          </div>
        </div>
        <div className=" flex flex-col gap-9">
          {testimonials.map((data) => (
            <motion.div
              initial="visible"
              animate={
                selected === data.id
                  ? "active"
                  : selected !== null
                  ? "inactive"
                  : "visible"
              }
              variants={variants}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onClick={() => setSelected(data.id)}
              className={`lg:w-[430px] w-full cursor-pointer h-fit bg-white transform transition-all duration-200  rounded-xl px-[1rem] gap-3 flex items-start py-[1.5rem] ${
                selected === data.id &&
                !mobilescreen &&
                "absolute right-[15rem] z-10 shadow-blur top-[8rem] scale-105"
              }`}
            >
              <div>
                <img
                  src={data.displayImage}
                  alt=""
                  className="rounded-full"
                  width={72}
                  height={72}
                />
              </div>
              <div className="w-[360px] flex flex-col gap-2">
                <span className="text-[18px] font-semibold largeText">
                  {data.name}
                </span>
                <span className="text-[16px] font-normal text-[#979797]">
                  {data.role}
                </span>
                <span className="text-[#1E1E1E] text-[16px] font-normal leading-[30px]">
                  {data.text}
                </span>
                <span className="text-[#979797] font-normal text-[16px]">
                  {data.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Fanspage;
