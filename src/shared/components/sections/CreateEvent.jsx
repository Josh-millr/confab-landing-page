import Image from "next/image";
import { Button } from "@components/index";
import { RiAddFill } from "react-icons/ri";

export const CreateEvent = () => {
  return (
    <section>
      <div className="overflow-hidden">
        {/* Column 1 */}
        <header className="grid grid-cols-1 grid-rows-1 gap-y-[56px] py-[60px] px-pageMargin-sm sm:grid-cols-2 sm:px-pageMargin-md md:py-[80px] lg:px-pageMargin-lg">
          {/* Title */}
          <h2 className="font-heading text-h2 text-black md:text-h1">
            host
            <br />
            <span className="text-opal">for free</span>
          </h2>
          {/* Description */}
          <div className="grid grid-cols-1 grid-rows-1 gap-y-[24px] sm:items-end sm:justify-self-end">
            <Button
              label="New event"
              icon={RiAddFill}
              type="stroke"
              size="md"
            />
            <p className="max-w-[400px] font-body text-body-sm text-black">
              Virtual meetings, and conferences, anyone can share, join or host
              (virtual events).
            </p>
          </div>
        </header>
        {/* Column 2 */}
        <div className="relative left-[-75%] h-[554px] w-[1064px] sm:left-[-25%] md:left-[-10%] lg:left-[0] lg:h-[665px] lg:w-[auto]">
          <Image
            src="/illustrations/banner-minified.svg"
            alt="image of many people standing"
            layout="fill"
          />
        </div>
      </div>
    </section>
  );
};
