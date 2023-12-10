"use client";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaXTwitter } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";

import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full">
      <div className="fixed top-0 z-40 w-full bg-white flex items-center justify-between px-16 py-8">
        <div className="text-2xl font-semibold">
          <span className="bg-[#4D1F29] text-white">OSI</span>LAMA
        </div>
        <ul className="lg:flex hidden items-center justify-start gap-8">
          <Link href="#works">Works</Link>
          <Link href="#about">About</Link>
          <Link href="#contact">Contact</Link>
          <Link href="https://read.cv/david.osilama" target={"_blank"}>Resume</Link>
        </ul>
        <GiHamburgerMenu
          onClick={() => setIsOpen(true)}
          className="lg:hidden flex h-6 w-6"
        />
      </div>
      {isOpen ? (
        <div onClick={() => setIsOpen(!isOpen)} className="fixed left-0 top-0 z-50 w-[100vw] h-[100vh] bg-white">
          <div className="flex-col items-center justify-start space-y-16">
            <div className="flex items-center justify-between px-16 py-8">
              <div className="text-2xl font-semibold">
                <span className="bg-[#4D1F29] text-white">OSI</span>LAMA
              </div>
              <IoMdClose
                onClick={() => setIsOpen(false)}
                className="lg:hidden flex h-6 w-6"
              />
            </div>
            <ul className="w-full text-center font-semibold flex flex-col items-center justify-start space-y-10">
              <Link href="#works">Works</Link>
              <Link href="#about">About</Link>
              <Link href="#contact">Contact</Link>
              <Link href="https://read.cv/david.osilama" target={"_blank"}>Resume</Link>
            </ul>
            <div className="absolute bottom-8 w-full flex items-center justify-center space-x-7 text-white">
            <Link href='https://dribbble.com/osid' target={"_blank"}><FaDribbble className='bg-[#4D1F29] p-1 w-6 h-6 rounded-md'/></Link>
               <Link href='https://www.behance.net/isojfie' target={"_blank"}><FaBehance className='bg-[#4D1F29] p-1 w-6 h-6 rounded-md'/></Link>
               <Link href='https://www.linkedin.com/in/david-osilama-258931158/' target={"_blank"}><FaLinkedinIn className='bg-[#4D1F29] p-1 w-6 h-6 rounded-md'/></Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
