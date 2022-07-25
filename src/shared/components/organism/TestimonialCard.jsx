import React from "react";
import Image from "next/image";

export const TestimonialCard = (testimonialInfo) => {
  let { title, description, name, image, jobRole, country } = testimonialInfo;

  return (
    <div className="grid max-w-[400px] gap-y-[32px] rounded-[32px] bg-white p-[24px] sm:gap-y-[48px] lg:gap-y-[64px] lg:p-[32px]">
      <div className="grid gap-y-[32px] sm:gap-y-[48px] lg:gap-y-[64px]">
        {/* column 1 */}
        <div className="grid gap-y-[16px]">
          <h3 className="font-heading text-h3 text-black">
            <span className="text-crayola">&quot;</span>
            {title}
            <span className="text-crayola">&quot;</span>
          </h3>
          <p className="min-w-[279px] font-body text-body-md text-smoke">
            {description}
          </p>
        </div>

        {/* column 2 */}
        <div className="flex gap-x-[16px]">
          <div className="relative h-[48px] w-[48px] rounded-[16px]">
            <Image
              src="/illustrations/muslim-lady.svg"
              alt="Profile picture illustration of a muslim woman"
              layout="fill"
            />
          </div>
          <div className="grid">
            <h5 className="font-heading text-h5 text-stormy">{name}</h5>
            <p className="font-body text-body-sm text-smoke">
              {`${jobRole}, ${country}`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
