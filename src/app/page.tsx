import Image from 'next/image'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import ImgWithText from './components/ImgWithText'

export default function Home() {
  return (
    <>
    <NavBar />
    <main className="">
      <Hero />
      <ImgWithText />
    </main>
    </>
  )
}
