import React from "react";
import { NoticeCard, Button } from "@components/index";
import { RiEyeLine, RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

export const NoticeBoard = ({}) => {
  return (
    <div className="grid-row-1 grid grid-cols-1 bg-white px-pageMargin-sm py-[64px] sm:px-pageMargin-md sm:py-[72px] lg:px-pageMargin-lg lg:py-[80px]">
      {/* Column 1 */}
      <div className="flex justify-between py-[16px]">
        <div className="grid gap-y-[8px]">
          <h3 className="font-heading text-h3 text-black sm:text-h2 lg:text-h1">
            Upcoming
          </h3>
          <h3 className="font-heading text-h3 text-opal sm:text-h2 lg:text-h1">
            Events
          </h3>
        </div>
        <div className="">
          <Button label="View all" type="stroke" icon={RiEyeLine} size="md" />
        </div>
      </div>
      {/* Column 2 */}
      <div className="grid grid-cols-1 grid-rows-1 gap-y-[40px] sm:gap-y-[0px]">
        <p className="text-body max-w-[320px] font-body text-body-md text-smoke">
          Virtual meetings, and conferences, anyone can share, join or host
          (virtual events).
        </p>
        <NoticeCard />
      </div>
      {/* Column 3 */}
      <div className="flex place-content-center py-[48px]">
        <div className="flex place-content-center gap-x-[88px]">
          <div className="rounded-full bg-white p-[16px] text-black">
            <RiArrowLeftSLine size={32} />
          </div>
          <div className="rounded-full bg-black p-[16px] text-white">
            <RiArrowRightSLine size={32} />
          </div>
        </div>
      </div>
    </div>
  );
};
