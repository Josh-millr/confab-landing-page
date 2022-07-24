import React from "react";
import { TestimonialCard } from "@components/index";

export const Testimonial = () => {
  return (
    <section>
      <div className="grid gap-y-[64px] bg-cloudy py-[124px] sm:gap-y-[48px] sm:py-[64px] lg:gap-y-[40px] lg:py-[124px]">
        <div className="">
          <TestimonialCard />
        </div>
        <div className="">
          <TestimonialCard />
        </div>
      </div>
    </section>
  );
};

// Fetching data from the JSON file
// import fsPromises from 'fs/promises';
// import path from 'path'