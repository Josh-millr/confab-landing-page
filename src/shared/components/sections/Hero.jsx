import React from "react";
import Image from "next/image";
import { Button, NoticeCard } from "@components/index.js";
import {
  RiNotification3Fill,
  RiGroup2Fill,
  RiArrowRightLine,
} from "react-icons/ri";

export const Hero = ({}) => {
  return (
    <div
      role="banner"
      className="grid gap-y-[32px] pb-[42px] md:pb-[82px] lg:pb-[64px]"
    >
      <div className="grid grid-cols-1 grid-rows-1 items-center justify-center gap-y-[8px] px-pageMargin-sm py-[42px] sm:grid-cols-2 sm:gap-x-[0px] sm:py-[80px] sm:px-pageMargin-md lg:px-pageMargin-lg">
        <div className="grid-row-2 grid grid-cols-1 text-center font-heading text-h2 sm:text-left md:pl-[32px] md:text-h1">
          <h1 className="text-black">VIRTUAL</h1>
          <h1 className=" text-opal">CONFERENCES</h1>
        </div>
        <div className="items-start text-center sm:h-full sm:text-right md:ml-auto md:pr-[32px]">
          <p className="m-auto max-w-[350px] font-body text-body-md text-smoke sm:m-[0]">
            Virtual meetings, and conferences, anyone can share, join or host
            (virtual events).
          </p>
        </div>
      </div>
      <div className="h-[60%] rounded-[24px] bg-[url('/images/illustration.png')] bg-cover bg-center md:h-fit">
        <div className="h-full rounded-[24px] bg-[#5CD0C545]">
          <div className="mx-pageMargin-sm grid grid-cols-1 grid-rows-1 md:mx-pageMargin-md md:grid-cols-2 md:grid-rows-2 md:py-[20px] lg:mx-pageMargin-lg">
            {/* column 1 */}
            <div className="relative flex items-center justify-end md:static md:items-start md:justify-start md:px-[16px]">
              <div className="mt-[24px] mb-[75px] flex h-[74px] w-[74px] items-center justify-center rounded-full bg-crayola md:relative md:top-[-50%] md:m-[0px] md:h-[148px] md:w-[148px] lg:h-[180px] lg:w-[180px]">
                <h2 className="font-heading text-[20px] text-white md:text-[32px] lg:text-h4">
                  NEW
                </h2>
              </div>
            </div>
            {/* column 2 */}
            <div className="relative flex items-center justify-center md:static md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3 lg:justify-start">
              <NoticeCard />
            </div>
            {/* column 3 */}
            <div className="relative flex items-center justify-center gap-x-[8px] py-[24px] md:static md:items-end md:pb-[8px] md:pt-[0px] lg:justify-end">
              <Button
                label="Remind me"
                icon={RiNotification3Fill}
                type="primary"
                size="md"
              />
              <div className="flex gap-x-[8px] rounded-full bg-white py-[8px] px-[8px] font-body text-body-sm font-bold text-black">
                <RiGroup2Fill size={24} />
                <p className="whitespace-nowrap">
                  <span className="text-crayola">32</span>/128 participants
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
