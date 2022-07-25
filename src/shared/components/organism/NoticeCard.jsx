import React from "react";
import Image from "next/image";
import { RiArrowRightFill } from "react-icons/ri";

export const NoticeCard = () => {
  return (
    <div className="grid max-w-[344px] grid-rows-1 gap-y-[64px] rounded-[30px]  border-[4px] border-black bg-white py-[42px] px-[30px] md:max-w-[360px] md:gap-y-[140px] lg:p-[32px]">
      <div className="grid grid-rows-1 gap-y-[8px] font-heading">
        <h1 className="ld:text-h3 text-h4 text-black">
          make a unique illustration design character
        </h1>
        <h3 className="text-h5 text-crayola">thu, 19 may 2022</h3>
      </div>
      <div className="grid grid-rows-1 gap-y-[16px]">
        <div className="">
          <Image
            className="rounded-[16px]"
            src="/images/profile-image.png"
            alt="Profile picture"
            height={46}
            width={46}
          />
        </div>
        <div className="grid grid-cols-[auto_auto] grid-rows-1">
          <div className="text-smoke">
            <h3 className="font-heading text-h5">Pablo Stanley</h3>
            <p className="font-body text-body-sm">Art Director & Illustrator</p>
          </div>
          <div className="flex items-center justify-end">
            <RiArrowRightFill size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};
