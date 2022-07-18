import React from "react";
import Image from "next/image";
import { RiArrowRightLine } from "react-icons/ri";

export const Hero = () => {
  return (
    <header className="grid gap-y-[35px]">
      <section className="grid grid-cols-1 grid-rows-1 items-center justify-center gap-y-[8px] px-pageMargin-sm py-[42px] sm:grid-cols-2 sm:gap-x-[0px] sm:py-[80px] sm:px-pageMargin-md lg:px-pageMargin-lg">
        <div className="grid-row-2 grid grid-cols-1 text-center font-heading text-h2 sm:text-left md:pl-[32px] md:text-h1">
          <h1 className="text-black">VIRTUAL</h1>
          <h1 className=" text-opal">CONFERENCES</h1>
        </div>
        {/*  */}
        <div className="items-start text-center sm:h-full sm:text-right md:ml-auto md:pr-[32px]">
          <p className="m-auto max-w-[350px] font-body text-body-md text-smoke sm:m-[0]">
            Virtual meetings, and conferences, anyone can share, join or host
            (virtual events).
          </p>
        </div>
      </section>
      <section className="rounded-[24px] bg-[url('/images/illustration.png')] bg-cover bg-center">
        <div className="mx-pageMargin-sm grid grid-cols-1 grid-rows-1 sm:mx-pageMargin-md lg:mx-pageMargin-lg">
          {/* column 1 */}
          <div className="flex items-center justify-end">
            <div className="mt-[24px] mb-[75px] flex h-[74px] w-[74px] items-center justify-center rounded-full bg-crayola">
              <h2 className=" font-heading text-[20px] text-white">NEW</h2>
            </div>
          </div>
          {/* column 2 */}
          <div className="flex items-center justify-center">
            <div className="grid grid-rows-1 gap-y-[52px] rounded-[30px] bg-white py-[42px] px-[30px]">
              {" "}
              {/* w-[344px]  */}
              <div className="grid grid-rows-1 gap-y-[8px] font-heading">
                <h1 className="text-h4 text-black">
                  make a unique illustration design character
                </h1>
                <h3 className="text-h5 text-crayola">thu, 19 may 2022</h3>
              </div>
              {/* */}
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
                    <p className="font-body text-body-sm">
                      Art Director & Illustrator
                    </p>
                  </div>
                  <div className="flex items-center justify-end">
                    <RiArrowRightLine size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* column 3 */}
          <div className="bg-coral"></div>
        </div>
      </section>
    </header>
  );
};
