import React from "react";
import { NoticeCard, Button } from "@components/index";
import { RiEyeLine, RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

export const NoticeBoard = ({ data }) => {
  let events = data.events;
  let eventList = events.map(({ id, title, date, author, jobRole, img }) => (
    <NoticeCard
      key={id}
      title={title}
      date={date}
      author={author}
      jobRole={jobRole}
      image={img}
    />
  ));

  return (
    <section>
      <div className="grid-row-1 grid grid-cols-1 gap-y-[48px] bg-white py-[64px] sm:py-[72px] md:gap-y-[48px] lg:py-[80px]">
        {/* Column 1 */}
        <header className="flex gap-x-[32px] px-pageMargin-sm sm:px-pageMargin-md lg:px-pageMargin-lg">
          <div className="flex w-full items-end justify-between">
            <div className="grid gap-y-[8px] font-heading text-h3 sm:text-h2 lg:text-h1">
              <h2 className=" text-black ">Upcoming</h2>
              <h2 className="text-opal">Events</h2>
            </div>
            <div>
              <Button
                label="View all"
                type="stroke"
                icon={RiEyeLine}
                size="md"
              />
            </div>
          </div>
          {/* Tablet & Desktop only component */}
          <div className="hidden place-content-center items-end gap-x-[88px] sm:gap-x-[32px] md:flex">
            <div className="h-fit rounded-full bg-white p-[16px] text-black">
              <RiArrowLeftSLine size={32} />
            </div>
            <div className="h-fit rounded-full bg-black p-[16px] text-white">
              <RiArrowRightSLine size={32} />
            </div>
          </div>
        </header>
        {/* Column 2 */}
        <div className="grid grid-cols-1 grid-rows-1 gap-y-[40px] sm:grid-cols-[auto_auto] sm:items-end sm:gap-x-[52px] sm:gap-y-[0px] lg:gap-x-[172px]">
          <p className="px-pageMargin-sm font-body text-body-md text-smoke sm:max-w-[224px] sm:pl-pageMargin-md lg:max-w-[254px] lg:pl-pageMargin-lg">
            Virtual meetings, and conferences, anyone can share, join or host
            (virtual events).
          </p>
          <div className="flex gap-x-[16px] overflow-hidden pl-pageMargin-sm sm:gap-x-[24px] sm:p-[0px] lg:gap-x-[40px]">
            {eventList}
          </div>
        </div>
        {/* Column 3 - Mobile only component*/}
        <div className="flex place-content-center gap-x-[88px] sm:gap-x-[32px] md:hidden">
          <div className="h-fit rounded-full bg-white p-[16px] text-black">
            <RiArrowLeftSLine size={32} />
          </div>
          <div className="h-fit rounded-full bg-black p-[16px] text-white">
            <RiArrowRightSLine size={32} />
          </div>
        </div>
      </div>
    </section>
  );
};
