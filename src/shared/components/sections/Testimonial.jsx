import React, { useEffect, useRef } from "react";
import { TestimonialCard } from "@components/index";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper";
import "swiper/css";

export const Testimonial = ({ data }) => {
  let testimonialData = data.testimonials;

  let testimonials = testimonialData.map(
    ({ id, quote, description, country, name, jobRole }) => (
      <SwiperSlide key={id}>
        <TestimonialCard
          title={quote}
          description={description}
          name={name}
          jobRole={jobRole}
          country={country}
        />
      </SwiperSlide>
    )
  );

  return (
    <section>
      <div></div>
      {/* grid gap-y-[64px] sm:gap-y-[48px] lg:gap-y-[40px]*/}
      <div className=" bg-cloudy py-[124px]  sm:py-[64px]  lg:py-[124px]">
        <Swiper
          modules={[Autoplay, FreeMode]}
          loop={true}
          freeMode={true}
          speed={5000}
          freeModeMomentum={true}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
          // When window width is >= 0p x
          slidesPerView={1}
          spaceBetween={20}
          
          breakpoints={{
            // When window width is >= 0px
            375: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
          }}
        >
          {testimonials}
        </Swiper>
      </div>
    </section>
  );
};
