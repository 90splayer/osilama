import Image from 'next/image'
import React from 'react'
import work1 from '@/public/images/soundbox.png'
import work2 from '@/public/images/ios.png'
import work3 from '@/public/images/takeoff.png'
import work4 from '@/public/images/2go.png'
import Link from 'next/link'

const Works = () => {
  return (
    <div id='works' className='w-full pt-24 lg:px-32 px-8 flex-col lg:items-start items-center justify-start space-y-4'>
        <h1 className='font-medium text-2xl'>Works</h1>
        <div className='w-full grid grid-cols-2 gap-8'>
            <Link href='https://www.behance.net/gallery/185917303/Soundbox' className='w-full col-span-1 flex-col items-start justify-start space-y-4'>
                <Image src={work1} alt='' className='w-full h-auto object-cover'/>
                <div className='flex-col items-start justify-start space-y-2'>
                    <h1 className='font-medium text-lg'>Soundbox</h1>
                    <p className='text-xs'>Web App</p>
                </div>
            </Link>
            <Link href='https://www.behance.net/gallery/173589715/IOS-notes-undoredo' className='w-full col-span-1 flex-col items-start justify-start space-y-4'>
                <Image src={work2} alt='' className='w-full h-auto object-cover'/>
                <div className='flex-col items-start justify-start space-y-2'>
                    <h1 className='font-medium text-lg'>IOS notes undo exploration</h1>
                    <p className='text-xs'>User experience design</p>
                </div>
            </Link>
            <Link href='https://www.behance.net/gallery/173335167/Takeoff-App' className='w-full col-span-1 flex-col items-start justify-start space-y-4'>
                <Image src={work3} alt='' className='w-full h-auto object-cover'/>
                <div className='flex-col items-start justify-start space-y-2'>
                    <h1 className='font-medium text-lg'>Takeoff</h1>
                    <p className='text-xs'>User experience design</p>
                </div>
            </Link>
            <Link href='https://www.behance.net/gallery/173351039/2go-app-revamp' className='w-full col-span-1 flex-col items-start justify-start space-y-4'>
                <Image src={work4} alt='' className='w-full h-auto object-cover'/>
                <div className='flex-col items-start justify-start space-y-2'>
                    <h1 className='font-medium text-lg'>2go app revamp</h1>
                    <p className='text-xs'>Mobile App</p>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Works