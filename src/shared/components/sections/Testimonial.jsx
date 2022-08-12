import React, { useState, useEffect, useRef } from "react";
import { TestimonialCard } from "@components/index";
import { Swiper, SwiperSlide } from "swiper/react";
import { useWindowWidth } from "@utils/useWindowWidth.js";
import { Autoplay, FreeMode } from "swiper";
import "swiper/css";

export const Testimonial = ({ data }) => {
  let [domLoaded, setDomLoaded] = useState(false);
  let windowSize = useWindowWidth();
  let [slides, setSlides] = useState(0);

  useEffect(() => {
    switch (windowSize) {
      case "Default":
        setSlides(1);
        break;
      case "sm":
        setSlides(1);
        break;
      case "md":
        setSlides(2);
        break;
      case "lg":
        setSlides(3);
        break;
    }

    setDomLoaded(true);
  }, [windowSize]);

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
      {domLoaded && (
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
            slidesPerView={slides}
            spaceBetween={20}
          >
            {testimonials}
          </Swiper>

          {/* Acts as divider to divide slides */}
          <div className="h-[50px]" />

          <Swiper
            modules={[Autoplay, FreeMode]}
            loop={true}
            freeMode={true}
            speed={4000}
            freeModeMomentum={true}
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
            }}
            slidesPerView={slides}
            spaceBetween={20}
          >
            {testimonials}
          </Swiper>
        </div>
      )}
    </section>
  );
};
