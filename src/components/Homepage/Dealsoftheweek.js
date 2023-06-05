import React from 'react'
import ProductCard from "../Product/ProductCard"
import {Swiper, SwiperSlide}  from 'swiper/react'
import 'swiper/css';
const Dealsoftheweek = () => {

    const arry = [1,2,3,4,5,6,7,8,9]
  return (
    <div className="flex">
    <Swiper  
    spaceBetween={10}
    slidesPerView={2.2}
    breakpoints={{
    // when window width is >= 768px
    768: {
      width: 768,
      slidesPerView: 2.5, 
    },
  }}    
>

 {arry.map( (item) => {
   return(
   <div key={item}>
     <SwiperSlide>
       <ProductCard/>
     </SwiperSlide>
    </div>
    )}
 )}
     </Swiper>
    </div>
  )
}

export default Dealsoftheweek