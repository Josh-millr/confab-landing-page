import React from "react";
import Image from "next/image";
import { RiArrowRightFill } from "react-icons/ri";

export const NoticeCard = ({ title, date, author, jobRole, image }) => {
  return (
    <div className="grid grid-rows-1 gap-y-[88px] rounded-[30px] border-[4px] border-black bg-white py-[42px] px-[30px] md:gap-y-[140px] lg:p-[32px]">
      <div className="grid grid-rows-1 gap-y-[8px] font-heading">
        <h3 className="ld:text-h3 min-w-[220px] max-w-[336px] text-h4 text-black">
          {title}
        </h3>
        <h4 className="text-h5 text-crayola">{date}</h4>
      </div>
      <div className="grid grid-rows-1 gap-y-[16px]">
        <div className="">
          <Image
            className="rounded-[16px]"
            src={image}
            alt="Profile picture"
            height={46}
            width={46}
          />
        </div>
        <div className="grid grid-cols-[auto_auto] grid-rows-1">
          <div className="text-smoke">
            <h4 className="font-heading text-h5">{author}</h4>
            <p className="font-body text-body-sm">{jobRole}</p>
          </div>
          <div className="flex items-center justify-end">
            <RiArrowRightFill size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};
