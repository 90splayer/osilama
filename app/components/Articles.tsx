import ftx from '@/public/images/ftx.png'
import { GoArrowUpRight } from "react-icons/go";
import Image from 'next/image';

const Articles = () => {
  return (
    <div className="w-full pt-16 lg:px-32 px-8 flex-col items-start justify-start">
      <h1 className="font-medium text-2xl text-center mb-4">Articles</h1>
      <div className="grid grid-cols-10 items-center gap-4 border-t-2 py-8 px-8">
        <div className='col-span-3 h-full'>
            <Image src={ftx} alt='' className='lg:object-contain lg:h-auto h-full w-full object-cover object-left'/>
        </div>
        <div className='col-span-7 flex items-center justify-between'>
            <div className='flex flex-col items-start justify-start space-y-4'>
                <h1 className='font-semibold lg:text-2xl text-base'>What happened to FTX</h1>
                <p className='text-xs font-light'>Uncover the story of how crypto gaint FTX declared bankrupt</p>
            </div>
            <GoArrowUpRight className='w-8 h-8 font-semibold'/>
        </div>
      </div>
      <div className="grid grid-cols-10 items-center gap-4 border-t-2 py-8 px-8">
        <div className='col-span-3 h-full'>
            <Image src={ftx} alt='' className='lg:object-contain lg:h-auto h-full w-full object-cover object-left'/>
        </div>
        <div className='col-span-7 flex items-center justify-between'>
            <div className='flex flex-col items-start justify-start space-y-4'>
                <h1 className='font-semibold lg:text-2xl text-base'>What happened to FTX</h1>
                <p className='text-xs font-light'>Uncover the story of how crypto gaint FTX declared bankrupt</p>
            </div>
            <GoArrowUpRight className='w-8 h-8 font-semibold'/>
        </div>
      </div>
      <div className="grid grid-cols-10 items-center gap-4 border-y-2 py-8 px-8">
        <div className='col-span-3 h-full'>
            <Image src={ftx} alt='' className='lg:object-contain lg:h-auto h-full w-full object-cover object-left'/>
        </div>
        <div className='col-span-7 flex items-center justify-between'>
            <div className='flex flex-col items-start justify-start space-y-4'>
                <h1 className='font-semibold lg:text-2xl text-base'>What happened to FTX</h1>
                <p className='text-xs font-light'>Uncover the story of how crypto gaint FTX declared bankrupt</p>
            </div>
            <GoArrowUpRight className='w-8 h-8 font-semibold'/>
        </div>
      </div>
    </div>
  );
}

export default Articles