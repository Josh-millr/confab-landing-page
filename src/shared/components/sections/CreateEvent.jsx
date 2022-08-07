import { Button } from "@components/index";
import { RiAddFill } from "react-icons/ri";

export const CreateEvent = () => {
  return (
    <div className="grid grid-rows-1 py-[48px]">
      <div className="grid grid-cols-1 grid-rows-1 gap-y-[56px] px-pageMargin-sm sm:grid-cols-2 sm:px-pageMargin-md lg:px-pageMargin-lg">
        {/* Title */}
        <h1 className="font-heading text-h2 text-black md:text-h1">
          host
          <br /> <span className="text-opal">for free</span>
        </h1>
        {/* Description */}
        <div className="grid grid-cols-1 grid-rows-1 gap-y-[24px]">
          <Button label="New event" icon={RiAddFill} type="stroke" size="md" />
          <p className="max-w-[400px] font-body text-body-sm text-black">
            Virtual meetings, and conferences, anyone can share, join or host
            (virtual events).
          </p>
        </div>
      </div>
      {/* For Banner */}
      <div className=""></div>
    </div>
  );
};
