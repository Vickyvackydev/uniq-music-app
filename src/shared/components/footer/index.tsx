import React from "react";
// @ts-ignore
import { footerLinks } from "constants";
import { Link } from "react-router-dom";

const FooterColumns = ({
  title,
  links,
}: {
  title: string;
  links: Array<string>;
}) => (
  <div className="flex flex-col gap-5">
    <span className="largeText font-semibold text-[18px] text-white">
      {title}
    </span>
    <div className="flex flex-col gap-5">
      {links.map((links) => (
        <Link to={"#"} className="text-[#D9D9D9] font-normal text-[16px]">
          {links}
        </Link>
      ))}
    </div>
  </div>
);
function Footer() {
  return (
    <footer
      className="w-full lg:h-[647px] h-full bg-cover relative lg:px-[4rem] px-5 py-[6rem]"
      style={{
        backgroundImage: "url('/svg/laptop-bg.jpeg')",
        backgroundPositionY: "-800px",
      }}
    >
      <div className="bg-[#1E1E1EE5] absolute inset-0"></div>
      <div className="relative z-10">
        <div className="flex items-start lg:gap-[13rem] gap-[6rem] lg:flex-row flex-col">
          <FooterColumns
            title={footerLinks[0].title}
            links={footerLinks[0].links}
          />
          <FooterColumns
            title={footerLinks[1].title}
            links={footerLinks[1].links}
          />
          <FooterColumns
            title={footerLinks[2].title}
            links={footerLinks[2].links}
          />
          <div className="w-full flex flex-col gap-5 h-full border-[0.5px] border-white px-8 py-[2rem]">
            <span className="text-[18px] font-semibold largeText text-white">
              Subscribe
            </span>
            <div className="w-full h-[48px] flex items-start">
              <input
                type="text"
                className="bg-white outline-none h-full placeholder:text-[#979797] font-normal text-[16px] px-3 "
                placeholder="Enter email address"
              />
              <button className="bg-[#616161] h-full w-full flex justify-center items-center hover:bg-red-500">
                <img src="/svg/arrow-right.svg" alt="" />
              </button>
            </div>
            <span className="text-[#D9D9D9] text-[16px]">
              Follow us to keep up with the latest news, releases, and other
              action.
            </span>
          </div>
        </div>
        <hr className="my-16" />
        <div className="flex justify-between lg:flex-row flex-col lg:items-center items-start lg:gap-0 gap-10">
          <img src="/svg/logo.svg" alt="" />
          <span className="text-[#D9D9D9] font-normal lg:text-[16px] text-xs">
            All Right Reserved. Chibuzo Anthony for Uxcel, 2024
          </span>
          <div className="flex items-center gap-2">
            <img src="/svg/instagram.svg" alt="" />
            <img src="/svg/x.svg" alt="" />
            <img src="/svg/facebook.svg" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
