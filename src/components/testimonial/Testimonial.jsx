import React from 'react';
import './Testimonial.css';
import Image1 from "../home/jerry.jpeg"
import { Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';


const data = [
  {
    id:1,
    image:Image1,
    title:"jhon Doe",
    subtitle:"Product designer at  BlackRock",
    comment:"I enjoy working with the theme and learn so much. you guys make the process fun intersting.Good luck! 👍🏻"
  },
  {
    id:2,
    image:Image1,
    title:"jhon Doe",
    subtitle:"Product designer at  BlackRock",
    comment:"I enjoy working with the theme and learn so much. you guys make the process fun intersting.Good luck! 👍🏻"
  }
]

const Testimonial = () => {
  return (
    <>
      <div className="testimonials container section">
         <h2 className="section__title">Clients & Reviews </h2>
         <Swiper className="testimonials__container grid" 
           modules={[ Pagination]}
           spaceBetween={50}
           slidesPerView={1}
           loop={true}
           grabCursor={true}
          
           pagination={{ clickable: true }}
          //  scrollbar={{ draggable: true }}
          //  onSwiper={(swiper) => console.log(swiper)}
          //  onSlideChange={() => console.log('slide change')}
         >
          {data.map(({id,image,title,subtitle,comment}) =>  {
            return(
              <SwiperSlide className="testimonial__item" key={id}>
                <div className="thumb">
                  <img width={"200px"} src={image} alt="" />
                </div>
                <h3 className="testimonials__title">{title}</h3>
                <span className="subtitle">{subtitle}</span>
                <div className="comment">{comment}</div>
              </SwiperSlide>
            )
          })}
         </Swiper>
      </div>
    </>
  )
}

export default Testimonial
