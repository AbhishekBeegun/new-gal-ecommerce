import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from "@/components/Navbar/Navbar"
import Horizontal from "@/components/Banners/Horizontal"
import Square from "@/components/Banners/Square"
import Vertical from "@/components/Banners/Vertical"
import Link from "next/link"
import Dealsoftheweek from "@/components/Homepage/Dealsoftheweek"
import Newlyadded from "@/components/Homepage/Newlyadded"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
<main>
  <Navbar/>

  <section className="hidden h-[40vh] lg:flex flex-wrap justify-center items-center gap-2 py-10
   px-2 lg:px-64 border border-sky-400">
    <Square/>
    <Square/>
    <Square/>
    {/* <Vertical/>
    <Horizontal/>
    <Vertical/> */}
  </section>

  <section className="px-2 lg:px-64 py-4">
    <div className="flex justify-between py-2">
      <p>Deal of the week</p>
      <Link href={""}>
        <p className="underline">View all</p>
      </Link>
    </div>

    <div>
      <Dealsoftheweek/>
    </div>
  </section>

  <section className="px-2 lg:px-64 py-4">
  <div className="flex justify-between py-2">
      <p>Newly added</p>
      <Link href={""}>
        <p className="underline">View all</p>
      </Link>
  </div>

  <div>
    <Newlyadded/>
  </div>

  </section>
</main>
  )
}
