import React, { useEffect } from "react";
import { TestimonialCard } from "@components/index";


export const Testimonial = ({ data }) => {
  let testimonialData = data.testimonials;

  let testimonails = testimonialData.map(
    ({ id, title, description, country, name, jobRole }) => (
      <TestimonialCard
        key={id}
        title={title}
        description={description}
        name={name}
        jobRole={jobRole}
        country={country}
      />
    )
  );

  return (
    <section>
      <div className="grid gap-y-[64px] bg-cloudy py-[124px] sm:gap-y-[48px] sm:py-[64px] lg:gap-y-[40px] lg:py-[124px]">
        <div className="fff flex flex-nowrap gap-x-[16px] sm:gap-x-[24px] lg:gap-x-[40px]">
          {testimonails}
        </div>
        <div className="flex flex-nowrap gap-x-[16px] sm:gap-x-[24px] lg:gap-x-[40px]">
          {testimonails}
        </div>
      </div>
    </section>
  );
};
