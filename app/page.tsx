import Image from 'next/image'
import Header from './components/Header'
import Intro from './components/Intro'
import Socials from './components/Socials'
import Works from './components/Works'
import About from './components/About'
import Tools from './components/Tools'
import Articles from './components/Articles'
import Contact from './components/Contact'
import Footer from './components/Footer'


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start overflow-x-hidden text-[#4D1F29]">
      <Header/>
      <Intro/>
      <Socials/>
      <Works/>
      <About/>
      <Tools/>
      <Articles/>
      <Contact/>
      <Footer/>
    </main>
  )
}
