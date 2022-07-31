import Image from "next/image";

export const Newsletter = ({}) => {
  return (
    <div className="grid grid-rows-1 bg-cloudy px-pageMargin-sm py-[80px] sm:px-pageMargin-md sm:py-[62px] lg:px-pageMargin-lg lg:py-[96px]">
      <div className="md:hidden">
        <Image
          src="/illustrations/Sketch-annotation-element-brush-pen-icon-eye.svg"
          height={40}
          width={40}
          alt="image of a mega phone"
        />
      </div>
      {/* Column 2 */}
      <div className="grid grid-rows-1 gap-y-[16px] md:grid-cols-[auto_auto] md:gap-y-[0px]">
        <div className="grid gap-y-[8px] font-heading text-h3 sm:text-h2 lg:text-h1">
          <h3 className=" text-black ">subscribe our</h3>
          <h3 className="text-opal">Newsletter</h3>
        </div>
        <div className="flex gap-x-[8px] self-end">
          <div className="relative hidden h-[40px] w-[40px] lg:block">
            <Image
              src="/illustrations/Sketch-annotation-element-brush-pen-icon-eye.svg"
              layout="fill"
              alt="image of a mega phone"
            />
          </div>
          <p className="font-body text-body-md font-medium text-smoke sm:max-w-[400px] md:self-end md:justify-self-end">
            Get the latest <span className="text-crayola">free</span> event
            conference notification and a reminder of upcoming speakers.
          </p>
        </div>
      </div>
      {/* Column 3 */}
    </div>
  );
};
