
import { GoArrowUpRight } from "react-icons/go";
import Image from 'next/image';
import Link from 'next/link';
import ftx from '@/public/images/ftx.png'
import what from '@/public/images/what.png'

const Articles = () => {
  return (
    <div className="w-full pt-16 lg:px-32 px-8 flex-col items-start justify-start">
      <h1 className="font-bold text-3xl mb-4">Articles</h1>
      <Link href='https://medium.com/@solcrasher/what-happened-to-ftx-747be439c42a' className="grid grid-cols-10 items-center gap-4 border-t-2 py-8 px-8">
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
      </Link>
      <Link href='https://medium.com/@solcrasher/web3-the-decentralized-internet-system-that-promises-to-change-everything-forever-5e7fbdb8e915' className="grid grid-cols-10 items-center gap-4 border-y-2 py-8 px-8">
        <div className='col-span-3 h-full'>
            <Image src={what} alt='' className='lg:object-contain lg:h-auto h-full w-full object-cover object-center'/>
        </div>
        <div className='col-span-7 flex items-center justify-between'>
            <div className='flex flex-col items-start justify-start space-y-4'>
                <h1 className='font-semibold lg:text-2xl text-base'>The Decentralized internet system that promises</h1>
                <p className='text-xs font-light'>Web3. The Decentralized internet system that promises to change everything...</p>
            </div>
            <GoArrowUpRight className='w-8 h-8 font-semibold'/>
        </div>
      </Link>
    </div>
  );
}

export default Articles