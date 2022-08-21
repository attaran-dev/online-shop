import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
// import "swiper/css";

function Slider() {
  return (
    <div className="w-full flex justify-center items-center">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide>
          <div className="w-full h-[580px]">
            <img
              src="assets/images/main page/side-view-male-artist-playing-violin.jpg"
              alt="slide-1"
              className="w-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[580px]">
            <img
              src="assets/images/main page/blurred-view-piano-keys_1232-348.webp"
              alt="slide-2"
              className="w-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[580px]">
            <img
              src="assets/images/main page/closeup-black-electric-guitar-dark-background_169016-20246.jpg"
              alt="slide-3"
              className="w-full"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
