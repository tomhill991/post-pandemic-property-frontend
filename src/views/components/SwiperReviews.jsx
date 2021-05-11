import React from "react"
// import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/swiper.scss';
import moment from 'moment'

// let reviewsData = [
//   {
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
//     created_at: '2021-05-02 11:06:42.109904000 +0000',
//     name: 'Tom Hill',
//     image: 'http://res.cloudinary.com/dvzul9adr/image/upload/cdms6y3ewr73j0m3lat8zdu5j1x6.jpg'
//   },
//   {
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
//     created_at: '2021-05-02 11:06:42.109904000 +0000',
//     name: 'Tom Hill',
//     image: 'http://res.cloudinary.com/dvzul9adr/image/upload/cdms6y3ewr73j0m3lat8zdu5j1x6.jpg'
//   },
//   {
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
//     created_at: '2021-05-02 11:06:42.109904000 +0000',
//     name: 'Tom Hill',
//     image: 'http://res.cloudinary.com/dvzul9adr/image/upload/cdms6y3ewr73j0m3lat8zdu5j1x6.jpg'
//   }
// ]
const SwiperReviews = props => {
  return (
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={14}
        slidesOffsetBefore={9}
        slidesOffsetAfter={15}
        onSwiper={(swiper) => {}}
        onSlideChange={() => console.log('slide change')}
      >
        {
          props.reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="review">
                <div className="review-head">
                  <img src={review.image ? review.image : 'http://res.cloudinary.com/dvzul9adr/image/upload/cdms6y3ewr73j0m3lat8zdu5j1x6.jpg'} alt=""/>
                  <div className="title">
                    <p className="name">Tom Hill</p>
                    <p className="date">{moment(review.created_at).format('L')}</p>
                  </div>
                </div>
                <div className="description">
                  <p>{review.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
  );
}

export default SwiperReviews
