import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@components/index";
import { RiCompassLine } from "react-icons/ri";

export const Feature = () => {
  let [containerHeight, setContainerHeight] = useState("0px");

  useEffect(() => {
    const IMAGE_HEIGHT = 793;
    const IMAGE_WIDTH = 396;

    let windowPadding = window.innerWidth <= 768 ? 80 : 160;
    let windowWidth = window.innerWidth - windowPadding;
    let imageUnitWidth = IMAGE_WIDTH / IMAGE_HEIGHT;

    let containerHeight = windowWidth * imageUnitWidth;
    setContainerHeight(`${containerHeight}px`);
  }, []);

  let featureItems = [
    {
      id: 9127,
      img: "/illustrations/eye-minified.svg",
      heading: "watch exclusive",
      paragraph: {
        paraStart: "Free and",
        paraHighlight: "exclusive event",
        paraEnd: "conferences with special guest and speakers.",
      },
    },
    {
      id: 72345,
      img: "/illustrations/admirer-emoji-minified.svg",
      heading: "top speakers",
      paragraph: {
        paraStart: "Anyone can",
        paraHighlight: "become a host",
        paraEnd: "and customize the number of participants.",
      },
    },
  ];

  let featureList = featureItems.map(({ img, heading, paragraph, id }) => {
    return (
      <div key={id} className="grid gap-y-[16px] md:pl-[40px] lg:pl-[0]">
        <div>
          <Image
            className=""
            src={img}
            height={58}
            width={58}
            alt="Illustraton of an eye"
          />
        </div>
        <div className="grid gap-y-[8px]">
          <h3 className="font-heading text-h4 text-black">{heading}</h3>
          <p className="max-w-[320px] font-body text-body-sm font-medium text-smoke">
            {paragraph.paraStart}{" "}
            <span className="text-crayola">{paragraph.paraHighlight}</span>{" "}
            {paragraph.paraEnd}
          </p>
        </div>
      </div>
    );
  });
  return (
    <section>
      <div className="relative grid py-[80px] px-pageMargin-sm sm:px-pageMargin-md md:gap-y-[40px] lg:gap-y-[48px] lg:px-pageMargin-lg">
        {/* column 1 */}
        <div
          style={{ height: containerHeight }}
          className="relative hidden md:block"
        >
          <Image
            src="/illustrations/Live-streaming-featured-minified.svg"
            alt="responsive Image of live streaming platform"
            layout="fill"
          />
        </div>
        {/* column 2 */}
        <div className="grid grid-cols-1 grid-rows-1 gap-y-[32px] sm:grid-cols-2 sm:grid-rows-2 md:grid-rows-1 lg:grid-cols-3 lg:gap-x-[40px]">
          {featureList}
          <div className="grid gap-y-[32px] rounded-[24px] bg-cloudy px-[16px] py-[40px] sm:col-[1_/_span_4] sm:px-[32px] lg:col-auto">
            <p className="max-w-[320px] font-body text-body-md font-medium text-smoke">
              Virtual meetings, and conferences, anyone can share, join or host
              (virtual events).
            </p>
            <div className="flex gap-x-[8px]">
              <Button label="Get Started" type="primary" size="md" />
              <Button
                label="Browse"
                type="stroke"
                size="md"
                icon={RiCompassLine}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
//
