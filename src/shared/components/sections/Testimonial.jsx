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
      <div className="grid gap-y-[64px] overflow-hidden bg-cloudy py-[124px] sm:gap-y-[48px] sm:py-[64px] lg:gap-y-[40px] lg:py-[124px]">
        <div className="relative left-[-14%] flex flex-nowrap gap-x-[16px] sm:gap-x-[24px] lg:gap-x-[40px]">
          <Swiper
            modules={[Autoplay, FreeMode]}
            loop={true}
            freeMode={true}
            spaceBetween={0}
            slidesPerView="auto"
            speed={1000}
            freeModeMomentum={true}
            autoplay={{
              delay: 1,
              disableOnInteraction: true,
            }}
          >
            {testimonials}
          </Swiper>
        </div>
        <div className="relative left-[-36%] flex flex-nowrap gap-x-[16px] sm:gap-x-[24px] lg:gap-x-[40px]">
          {testimonials}
        </div>
      </div>
    </section>
  );
};
