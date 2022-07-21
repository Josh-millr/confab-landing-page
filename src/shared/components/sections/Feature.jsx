import React from "react";
import Image from "next/image";

export const Feature = () => {
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

  let featList = featureItems.map(({ img, heading, paragraph, id }) => {
    return (
      <div key={id} className="grid gap-y-[16px]">
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
          <p className="font-body text-body-sm font-medium text-smoke">
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
      <div className="grid py-[80px] px-pageMargin-sm sm:m-pageMargin-md md:gap-y-[40px] lg:m-pageMargin-lg lg:gap-y-[48px]">
        {/* column 1 */}
        <div className=""></div>
        {/* column 2 */}
        <div className="grid grid-cols-1 gap-y-[32px] sm:grid-cols-2 lg:grid-cols-3">
          {featList}
          <div className=""></div>
        </div>
      </div>
    </section>
  );
};
