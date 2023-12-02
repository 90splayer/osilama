import xc from '@/public/images/logo.png'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='w-full flex items-center justify-center space-x-2 py-4'>
      <p className='text-center'>Built by</p>
      <Link href='https://michaelojogbo.vercel.app/' target={"_blank"}>
      <Image src={xc} alt='xc' className='w-5 h-auto object-contain'/>
      </Link>
    </div>
  )
}

export default Footer