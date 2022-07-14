import React from "react";

export const Hero = () => {
  return (
    <header className="">
      <section className="sm:grid-col-2 grid grid-cols-1 grid-rows-1 items-center justify-center gap-y-[8px] px-pageMargin-sm py-[42px] sm:grid-cols-2 sm:grid-rows-1 sm:gap-x-[0px] sm:py-[80px] sm:px-pageMargin-md lg:px-pageMargin-lg">
        <div className="grid-row-2 grid grid-cols-1 text-center font-heading text-h2 sm:text-left md:pl-[32px] md:text-h1">
          <h1 className="text-black">virtual</h1>
          <h1 className=" text-opal">conferences</h1>
        </div>
        {/*  */}
        <div className="items-start text-center sm:h-full sm:text-right md:ml-auto md:pr-[32px]">
          <p className="m-auto max-w-[350px] font-body text-body-md text-smoke sm:m-[0]">
            Virtual meetings, and conferences, anyone can share, join or host
            (virtual events).
          </p>
        </div>
      </section>
    </header>
  );
};
