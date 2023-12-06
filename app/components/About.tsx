import image1 from '@/public/images/look.png'
import Image from 'next/image'

const About = () => {
  return (
    <div id='about' className='w-full pt-24 lg:px-32 px-8 flex-col lg:items-center items-start justify-start space-y-4'>
        <h1 className='font-bold text-3xl text-center'>About</h1>
        <div className='lg:grid lg:grid-cols-10 flex flex-col items-center justify-start gap-4'>
            <div className='col-span-4 flex flex-col items-start justify-start gap-4 lg:pr-8 leading-7'>
                <p>I’m David Osilama, a user-centered product designer who creates scalable designs that blend business goals with user needs.</p>
                <p>I don't just design pretty things, I dive into problems from the user perspective, research market competitors before crafting products that solves the problems.</p>
            </div>
            <Image src={image1} alt='' className='col-span-2' />
            <div className='col-span-4 flex flex-col lg:items-end items-start justify-start gap-4 lg:pl-8 lg:text-right leading-7'>
                <p>I'm a pro at using Figma, Illustrator, Photoshop, and After Effects to bring my designs to life. I'm always learning and experimenting with new tools to stay ahead of the curve.</p>
                <p>I work well in an agile system independently and collaborate well with cross functional teams.</p>
            </div>
        </div>
    </div>
  )
}

export default About