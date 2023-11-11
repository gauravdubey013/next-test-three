"use client";

import Link from "next/link";
import React from "react";
import { Squash as Hamburger } from "hamburger-react";
import { RiSearch2Line } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <div className="w-full flex justify-center flex-col bg-[#F6F1EB]">
        <div className="hidden h-[35px] md:flex items-center justify-end gap-7 text-[13px] hover:text-[#444444] mr-7">
          <Link href={"/"}>India</Link>
          <Link href={"/"}>Find a store</Link>
          <Link href={"/"}>Contact Us</Link>
        </div>

        {/* nav */}
        <div className="nav sticky px-5 flex justify-between gap-3 items-center w-full h-[3.2692307692rem] z-30 box-border shadow">
          <div className="flex items-center justify-center gap-1 md:gap-8">
            <div className="w-auto md:w-[90px] h-[35px] flex items-center">
              <Hamburger size={20} />
              <span className="hidden md:flex text-[14px]">Menu</span>
            </div>
            <div className="w-auto md:w-[13rem] h-[35px] flex items-center gap-1 md:bg-white rounded-[2px] md:border-[1px] md:border-[#444444]">
              <RiSearch2Line size={20} className="ml-[10px] -scale-x-100" />
              <input
                type="text"
                placeholder="Search"
                className=" hidden md:flex text-[14px] focus:placeholder:text-[#444] outline-none"
              />
            </div>
          </div>

          <div className="w-auto h-auto flex-shrink-0 items-center">
            <Link href={"/"}>
              <Image src={"/logoEcom.png"} width={90} height={40} />
            </Link>
          </div>

          <div className="w-auto md:w-[13rem] font-light flex gap-[1.5rem]">
            <Link href={"/"} className="acc flex gap-1">
              <AiOutlineUser size={20} />
              <span className="text-[14px] hidden md:flex text-gray-500 hover:text-[#444444]">Account</span>
            </Link>
            <Link href={"/"} className="acc flex gap-1">
              <BsHandbag size={20} />
              <span className="text-[14px] hidden md:flex text-gray-500 hover:text-[#444444]">Cart</span>
              <span className="text-[12px] text-gray-500">(0)</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
