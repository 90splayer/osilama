import Image from 'next/image'
import React from 'react'
import work1 from '@/public/images/works1.png'
import work2 from '@/public/images/works2.png'
import work3 from '@/public/images/works3.png'
import work4 from '@/public/images/works4.png'

const Works = () => {
  return (
    <div id='works' className='w-full pt-16 lg:px-32 px-8 flex-col lg:items-start items-center justify-start space-y-4'>
        <h1 className='font-medium text-2xl'>Works</h1>
        <div className='grid grid-cols-2 gap-8'>
            <div className='col-span-1 flex-col items-start justify-start space-y-4'>
                <Image src={work1} alt=''/>
                <div className='flex-col items-start justify-start space-y-2'>
                    <h1 className='font-semibold text-lg'>Takeoff</h1>
                    <p className='text-xs'>Mobile App</p>
                </div>
            </div>
            <div className='col-span-1 flex-col items-start justify-start space-y-4'>
                <Image src={work2} alt=''/>
                <div className='flex-col items-start justify-start space-y-2'>
                    <h1 className='font-semibold text-lg'>Takeoff</h1>
                    <p className='text-xs'>Mobile App</p>
                </div>
            </div>
            <div className='col-span-1 flex-col items-start justify-start space-y-4'>
                <Image src={work3} alt=''/>
                <div className='flex-col items-start justify-start space-y-2'>
                    <h1 className='font-semibold text-lg'>Takeoff</h1>
                    <p className='text-xs'>Mobile App</p>
                </div>
            </div>
            <div className='col-span-1 flex-col items-start justify-start space-y-4'>
                <Image src={work4} alt=''/>
                <div className='flex-col items-start justify-start space-y-2'>
                    <h1 className='font-semibold text-lg'>Takeoff</h1>
                    <p className='text-xs'>Mobile App</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Works