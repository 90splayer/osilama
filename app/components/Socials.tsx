import { FaXTwitter } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaBehance } from "react-icons/fa";
import Link from "next/link";

const Socials = () => {
  return (
         <div className="lg:flex hidden fixed left-16 top-[10rem] text-white flex-col items-center justify-center space-y-7">
               <Link href='https://dribbble.com/osid' target={"_blank"}><FaDribbble className='bg-[#4D1F29] p-1 w-6 h-6 rounded-md'/></Link>
               <Link href='https://www.behance.net/isojfie' target={"_blank"}><FaBehance className='bg-[#4D1F29] p-1 w-6 h-6 rounded-md'/></Link>
               <Link href='https://www.linkedin.com/in/david-osilama-258931158/' target={"_blank"}><FaLinkedinIn className='bg-[#4D1F29] p-1 w-6 h-6 rounded-md'/></Link>
        </div>
  )
}

export default Socials