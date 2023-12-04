"use client";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaXTwitter } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <div className="fixed top-0 z-40 w-full bg-white flex items-center justify-between px-16 py-8">
        <h1 className="text-2xl font-semibold">
          <span className="bg-[#4D1F29] text-white">OSI</span>LAMA
        </h1>
        <ul className="lg:flex hidden items-center justify-start gap-8">
          <Link href="#works">Works</Link>
          <Link href="#about">About</Link>
          <Link href="#contact">Contact</Link>
          <Link href="">Resume</Link>
        </ul>
        <GiHamburgerMenu
          onClick={() => setIsOpen(true)}
          className="lg:hidden flex h-6 w-6"
        />
      </div>
      {isOpen ? (
        <div className="absolute top-0 left-0 z-50 w-[100vw] h-[100vh] bg-white">
          <div className="flex-col items-center justify-start space-y-16">
            <div className="flex items-center justify-between px-16 py-8">
              <h1 className="text-2xl font-semibold">
                <span className="bg-[#4D1F29] text-white">OSI</span>LAMA
              </h1>
              <IoMdClose
                onClick={() => setIsOpen(false)}
                className="lg:hidden flex h-6 w-6"
              />
            </div>
            <ul className="w-full text-center flex flex-col items-center justify-start space-y-10">
              <Link href="#works">Works</Link>
              <Link href="#about">About</Link>
              <Link href="#contact">Contact</Link>
              <Link href="">Resume</Link>
            </ul>
            <div className="absolute bottom-8 w-full flex items-center justify-center space-x-7">
              <FaXTwitter />
              <FaDribbble />
              <FaLinkedinIn />
              <CiMail />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
