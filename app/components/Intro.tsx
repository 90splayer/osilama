import intro from '@/public/images/intro.png'
import Image from 'next/image'
import Link from 'next/link'

const Intro = () => {
  return (
    <div className='lg:grid lg:grid-cols-2 flex flex-col items-center lg:px-32 px-8 mt-24 lg:pt-16 pt-10'>
        <div className='lg:order-1 order-2 col-span-1 flex-col items-start justify-start space-y-4'>
            <h1 className='font-medium'>Hello, I'm</h1>
            <h1 className='text-5xl font-semibold'>David <br/> Osilama</h1>
            <p>A product designer with 5 years experience with a mission to make pixel-perfect designs that prioritize user experience and achieve company goals.</p>
        </div>
        <div className='lg:order-2 order-start col-span-1 flex items-center justify-end'>
        <div className='flex flex-col space-y-2 items-center justify-start'>
            <Image src={intro} alt='car' className='w-48 h-auto object-contain'/>
            <Link href="mailto:ojogbomichael@gmail.com" target={"_blank"} className='bg-[#4D1F29] py-2 rounded-md text-white text-xs text-center w-36'>Send message</Link>
        </div>
        </div>
    </div>
  )
}

export default Intro