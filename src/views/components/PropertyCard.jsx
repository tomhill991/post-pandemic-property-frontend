import React, {useState, useEffect} from "react"
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/swiper.scss';
SwiperCore.use([Pagination]);

const PropertyCard = props => {
  const [property, setProperty] = useState(props.property)
  // const [swiper, setSwiper] = useState(null)

  useEffect(() => {
    setProperty(props.property)
  }, [props.property])

  return (
    <div className="property-card property-details">
      <span className="close" onClick={() => props.closeCard(null)}></span>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => {}}
        onSlideChange={() => console.log('slide change')}
      >
        {
          property.attributes.images.map(image => (
            <SwiperSlide>
              <img src={image} alt=""/>
            </SwiperSlide>
          ))
        }
      </Swiper>
      <div className="content">
        <div className="top half">
          <p className="normal">{property.attributes.title}</p>
          <p className="large">Price per night: ${property.attributes['price-per-day']}</p>
        </div>
        <div className="bottom half">
          <p className="normal">Maximum {property.attributes['max-guests']} guests allowed</p>
        </div>

        <a href={"/properties/" + property.id} className="button red">
          <span>View property</span>
        </a>
      </div>
    </div>
  );
}

export default PropertyCard
