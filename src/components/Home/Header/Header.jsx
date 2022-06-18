import React from "react";
import CVT from "./CVT";
import HeaderSocials from "./HeaderSocials";
import ME from "../../../assets/saya1.png";

const Header = () => {
  return (
    <div className=" w-full h-screen text-center py-5">
      <h5>Hello I'm</h5>
      <h1 className="font-bold text-5xl mt-4 ">Randika Saptianda</h1>
      <h5 className="text-slate-400 mt-5">Website Developer</h5>
      <CVT />
      <div className="mt-8 flex items-center lg:items-end justify-evenly">
        <HeaderSocials />
        <img src={ME} alt="ME" className=" w-[17rem] h-[22rem] bg-gradient-to-b from-[#d0a1e4] ...  overflow-hidden object-cover rounded-t-full pt-3 lg:w-[22rem] lg:h-[28rem] lg:p-8 " />
        <a href="#contact" className="rotate-90 text-[#d0a1e4] hover:text-white duration-300  invisible sm:visible">
          Scroll Down
        </a>
      </div>
    </div>
  );
};

export default Header;
