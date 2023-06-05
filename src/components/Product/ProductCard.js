import React from 'react'

const ProductCard = () => {
  return (
    <div className="flex flex-col h-[300px] lg:h-[350px] w-[200px] lg:w-[250px] border border-red-600">
        <img src="https://dxtvlpbretzvp.cloudfront.net/media/brandhouse%2FLC32G55TQWMXZN%2FLC32G55TQWMXZN.webp"
        className="w-full object-cover h-[220px] border border-sky-700" />
        <div className="px-4 flex flex-col justify-evenly h-full">
            <p className="font-semibold text-lg">Rs 19990 </p>
            <p className="text-xs">SAMSUNG ODYSSEY GAMING LED MONITOR 32" LC32G55TQWMXZN</p>
        </div>
        <p>Cim payment</p>
    </div>
  )
}

export default ProductCard