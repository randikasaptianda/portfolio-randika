import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="text-[#d0a1e4] mr-[4.5rem] invisible sm:visible flex flex-col items-center gap-5 ">
      <a href="https://github.com/randikasaptianda" className="hover:text-white  duration-300 " target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/randika-saptianda-874863224/" className="hover:text-white  duration-300 " target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://www.instagram.com/_saptianda/" className="hover:text-white  duration-300 " target="_blank">
        <BsInstagram />
      </a>
      <a className="rotate-90 mb-2 invisible lg:visible ">-----</a>
    </div>
  );
};

export default HeaderSocials;
