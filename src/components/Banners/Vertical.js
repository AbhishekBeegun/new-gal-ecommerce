import React from 'react'

const Vertical = () => {
  return (
    <div className="w-[350px] h-[450px] rounded-xl border flex flex-col justify-evenly border-black relative">
      <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-acee/k2-_6e93ba87-e5ca-4fca-b9d9-28e9c9ddc37f.v1.jpg?odnHeight=578&odnWidth=385&odnBg=&odnDynImageQuality=70"
      className="absolute h-full w-full object-cover rounded-xl -z-10"
      />
      <h2 className="text-white text-[2rem] uppercase font-semibold px-5 pt-10">title</h2>      
      <a href="" className="underline text-white px-5">Link to</a>

    </div>
  )
}

export default Vertical