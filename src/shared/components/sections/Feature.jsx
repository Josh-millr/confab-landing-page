import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@components/index";
import { RiCompassLine } from "react-icons/ri";

export const Feature = () => {
  let [containerHeight, setContainerHeight] = useState("0px");

  useEffect(() => {
    // Image Dimention
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
      img: "/illustrations/Sketch-annotation-element-brush-pen-icon-eye.svg",
      heading: "watch exclusive",
      paragraph: {
        paraStart: "Free and",
        paraHighlight: "exclusive event",
        paraEnd: "conferences with special guest and speakers.",
      },
    },
    {
      id: 72345,
      img: "/illustrations/Sketch-annotation-element-brush-pen-icon-smiley-love.svg",
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
          <h1 className="font-heading text-h4 text-black">{heading}</h1>
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

    </section>
  );
};
//
