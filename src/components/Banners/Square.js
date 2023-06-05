import React from 'react'
import Link from "next/link"
const Square = () => {
  return (
    <Link href={""} className="h-[300px] w-[350px] flex flex-col border border-black rounded-xl relative">
      <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-adff/k2-_a30c407e-1392-4dba-80be-2bda272ef56d.v1.jpg?odnHeight=256&odnWidth=385&odnBg=&odnDynImageQuality=70"
      className="w-full h-full absolute object-cover rounded-xl -z-10"/>
      <h2 className="text-white text-[2rem] uppercase font-semibold px-5 pt-10">title</h2>      
      <a href="" className="underline text-white px-5">Link to</a>
    </Link>
  )
}

export default Square