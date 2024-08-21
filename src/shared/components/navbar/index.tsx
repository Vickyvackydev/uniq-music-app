import { useMediaQuery } from "hooks";
import { Link } from "react-router-dom";
import Button from "shared/reusables/button";
import { FaBars, FaTimes } from "react-icons/fa";
import { useAppQuery } from "context/AppContext";
import { Transition } from "@headlessui/react";

function Navbar() {
  const { menu, setMenu } = useAppQuery();
  const mobileScreen = useMediaQuery("(max-width: 640px)");
  return (
    <>
      {mobileScreen ? (
        <nav className="absolute z-50  w-full p-7">
          <div className="flex items-center justify-between ">
            {!menu && (
              <img src={"/svg/logo.svg"} width={120} height={120} alt="logo " />
            )}

            {menu ? (
              <span onClick={() => setMenu(false)}>
                <FaTimes className="text-xl text-white cursor-pointer" />
              </span>
            ) : (
              <span onClick={() => setMenu(true)}>
                <FaBars className="text-xl text-white cursor-pointer" />
              </span>
            )}
          </div>

          <Transition
            as="div"
            enter="transition-all ease-in duration-300"
            enterFrom="transform -translate-x-full"
            enterTo="transform -translate-x-0"
            leave="transition-all ease-out duration-300"
            leaveFrom="transform -translate-x-0"
            leaveTo="transform -translate-x-full"
            show={menu}
          >
            <div className="absolute z-50 ml-5 mt-7">
              <div className="flex items-center justify-center  flex-col gap-y-16 text-white text-[16px]">
                <Link to={"/about"}>About</Link>
                <Link to={"/about"}>Services</Link>
                <Link to={"/about"}>Pricing</Link>
                <Link to={"/about"}>Blog</Link>
              </div>
              <div>
                <Button text="Contact us" btnstyle="mt-7" />
              </div>
            </div>
          </Transition>
        </nav>
      ) : (
        <nav className="w-full absolute h-[100px] z-50 bg-transparent border-b-[0.5px] border-white flex justify-between items-center px-8">
          <div>
            <img src={"/svg/logo.svg"} width={120} height={120} alt="logo " />
          </div>
          <div className="flex items-center gap-x-16 text-white text-[16px]">
            <Link to={"/about"}>About</Link>
            <Link to={"/about"}>Services</Link>
            <Link to={"/about"}>Pricing</Link>
            <Link to={"/about"}>Blog</Link>
          </div>
          <div>
            <Button text="Contact us" />
          </div>
        </nav>
      )}
    </>
  );
}

export default Navbar;
