import { FaXTwitter } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const Socials = () => {
  return (
         <div className="lg:flex hidden fixed left-16 top-[10rem] text-white flex-col items-center justify-center space-y-7">
               <FaXTwitter className='bg-[#4D1F29] p-1 w-5 h-5 rounded-md'/> 
               <FaDribbble className='bg-[#4D1F29] p-1 w-5 h-5 rounded-md'/>
               <FaLinkedinIn className='bg-[#4D1F29] p-1 w-5 h-5 rounded-md'/>
               <CiMail className='bg-[#4D1F29] p-1 w-5 h-5 rounded-md'/>
        </div>
  )
}

export default Socials