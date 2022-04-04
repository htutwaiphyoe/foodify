import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import { DishCard } from "components/molecules/DishCard";
import { popularDishes } from "data";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export const Popular = () => {
  return (
    <section className="pt-4 pb-1">
      <div className="text-center">
        <h2 className="text-lg font-bold">Popular Dishes</h2>
        <p>We analyze the food rankings for better services</p>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        spaceBetween={40}
        modules={[Pagination, EffectCoverflow]}
        className="pb-4 mx-auto mt-4 w-80"
        pagination={true}
        coverflowEffect={{
          rotate: 0,
          depth: 70,
          slideShadows: false,
        }}
      >
        {popularDishes.map((dish, index) => (
          <SwiperSlide key={index}>
            <DishCard {...dish} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
