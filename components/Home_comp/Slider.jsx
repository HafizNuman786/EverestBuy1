/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css/autoplay";
import { images } from "@/utils/data";
import Image from "next/image";
SwiperCore.use([Autoplay]);

export default function Slider() {
  return (
    // <div className="swiper-container">
    <Swiper
      className="swiper-wrapper  rounded-lg"
      slidesPerView={1}
      // autoplay={{
      //   delay: 1000,
      // }}
      autoplay={false}
    >
      <div className="px-4">
        {images.map((image,index) => (
          <SwiperSlide className="swiper-slide" key={index}>
            <Image width={500} height={100} src={image.src} alt={image.alt} />
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
    // </div>
  );
}
