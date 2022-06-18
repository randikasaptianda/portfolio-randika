import React from "react";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="bg-[#d0a1e4] mt-20 p-5 text-center text-[#1f1f38]">
      <h1 className="text-3xl font-semibold mt-16 hover:text-white duration-300 cursor-default ">Randika Saptianda</h1>
      <div className="flex flex-col justify-center gap-5 m-14 md:flex md:flex-row ">
        <a href="#" className="hover:text-white duration-300">
          Home
        </a>
        <a href="#about" className="hover:text-white duration-300">
          About
        </a>
        <a href="#experience" className="hover:text-white duration-300">
          Experience
        </a>
        <a href="#portfolio" className="hover:text-white duration-300">
          Portfolio
        </a>
        <a href="#contact" className="hover:text-white duration-300">
          Contact
        </a>
      </div>
      <div className="flex justify-center gap-5 mb-7 ">
        <a href="https://www.facebook.com/randika.saptianda.28/" target="_blank">
          <FaFacebookF className="bg-[#1f1f38] w-10 h-8 p-2 text-white rounded-lg hover:bg-transparent hover:text-[#1f1f38] hover:border-[1px] hover:border-[#1f1f38] duration-300" />
        </a>

        <a href="https://www.instagram.com/_saptianda/" target="_blank">
          <FiInstagram className="bg-[#1f1f38] w-10 h-8 p-2 text-white rounded-lg hover:bg-transparent hover:text-[#1f1f38] hover:border-[1px] hover:border-[#1f1f38] duration-300" />
        </a>
        <a href="https://www.linkedin.com/in/randikasaptianda/" target="_blank">
          <FaLinkedin className="bg-[#1f1f38] w-10 h-8 p-2 text-white rounded-lg hover:bg-transparent hover:text-[#1f1f38] hover:border-[1px] hover:border-[#1f1f38] duration-300" />
        </a>
      </div>
      <h5 className="mb-[10rem] text-[13px] ">&copy; Randika Saptianda Portfolio. All rights reserved</h5>
    </div>
  );
};

export default Footer;
