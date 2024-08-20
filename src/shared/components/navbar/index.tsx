import { Link } from "react-router-dom";
import Button from "shared/reusables/button";

function Navbar() {
  return (
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
  );
}

export default Navbar;
