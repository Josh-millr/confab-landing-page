import React from "react";
import Image from "next/image";

export const LogoStrip = () => {
  return (
    <section className="grid grid-cols-1 grid-rows-1 items-center bg-cloudy py-[64px] px-[54px] sm:py-[48px] sm:px-[40px] md:py-[64px] md:px-[64px] lg:py-[64px] lg:px-[214px]">
      <div className="grid grid-cols-3 grid-rows-2 justify-items-center gap-x-[48px] gap-y-[24px] sm:grid-cols-6 sm:grid-rows-1 md:gap-x-[64px]">
        <div>
          <Image
            src="/illustrations/cnbc.png"
            alt="A logo of cnbc"
            width={42}
            height={32}
          />
        </div>
        <div>
          <Image
            src="/illustrations/forbes.png"
            alt="A logo of forbes"
            width={70}
            height={19}
          />
        </div>
        <div>
          <Image
            src="/illustrations/fortune.png"
            alt="A logo of fortune"
            width={79}
            height={19}
          />
        </div>
        <div>
          <Image
            src="/illustrations/ft.png"
            alt="A logo of ft"
            width={90}
            height={28}
          />
        </div>
        <div>
          <Image
            src="/illustrations/tc.png"
            alt="A logo of tc"
            width={46}
            height={22}
          />
        </div>
        <div>
          <Image
            src="/illustrations/wsj.png"
            alt="A logo of wsj"
            width={52}
            height={28}
          />
        </div>
      </div>
      <div className="m-auto pt-[48px] md:pt-[80px] lg:pt-[56px]">
        <p className="max-w-[344px] text-center font-body text-body-sm font-medium text-smoke">
          Used by over <span className="text-crayola">50+ million</span> users
          worldwide and trusted by top-tier companies.
        </p>
      </div>
    </section>
  );
};
