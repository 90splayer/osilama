import { FaFigma } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeaftereffects } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiJavascript } from "react-icons/si";

const Tools = () => {
  return (
    <div className='w-full pt-16 lg:px-32 px-8 flex-col items-center justify-start space-y-4'>
        <h1 className='font-medium text-2xl text-center'>Tools</h1>
        <div className="flex flex-wrap items-center justify-center px-16 ml-8">
            <div className="mr-8 w-16 h-16 border rounded-md px-4 pb-1 pt-3 flex flex-col items-center justify-center space-y-2 mb-4">
                <SiAdobephotoshop className='w-5 h-5'/>
                <p className="text-[0.5rem]">Photoshop</p>
            </div>
            <div className="mr-8 w-16 h-16 border rounded-md px-4 pb-1 pt-3 flex flex-col items-center justify-center space-y-2 mb-4">
                <SiAdobeaftereffects className='w-5 h-5'/>
                <p className="text-[0.5rem]">Aftereffects</p>
            </div>
            <div className="mr-8 lg:w-20 lg:h-20 w-16 h-16 border rounded-md px-4 pb-1 pt-3 flex flex-col items-center justify-center space-y-2 mb-4">
                <FaFigma className='lg:w-6 lg:h-6 w-5 h-5'/>
                <p className="lg:text-[0.7rem] text-[0.5rem]">Figma</p>
            </div>
            <div className="mr-8 w-16 h-16 border rounded-md px-4 pb-1 pt-3 flex flex-col items-center justify-center space-y-2 mb-4">
                <SiAdobeillustrator className='w-5 h-5'/>
                <p className="text-[0.5rem]">Illustrator</p>
            </div>
            <div className="mr-8 w-16 h-16 border rounded-md px-4 pb-1 pt-3 flex flex-col items-center justify-center space-y-2 mb-4">
                <SiJavascript className='w-5 h-5'/>
                <p className="text-[0.5rem]">Javascript</p>
            </div>
        </div>
    </div>
  )
}

export default Tools