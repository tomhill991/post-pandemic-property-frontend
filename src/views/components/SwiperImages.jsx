import React, {useState, useEffect} from "react"
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/swiper.scss';
SwiperCore.use([Pagination]);

const SwiperImages = props => {
  const [images, setImages] = useState(props.images)
  // const [swiper, setSwiper] = useState(null)

  useEffect(() => {
    setImages(props.images)
  }, [props.images])

  return (
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => {}}
        onSlideChange={() => console.log('slide change')}
      >
        {
          images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt=""/>
            </SwiperSlide>
          ))
        }
      </Swiper>
  );
}

export default SwiperImages
