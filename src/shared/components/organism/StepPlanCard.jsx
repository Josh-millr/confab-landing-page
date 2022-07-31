import Image from "next/image";
import { Button } from "@components/index";
import { RiArrowRightCircleFill } from "react-icons/ri";


export const StepPlanCard = ({
  title,
  highlight,
  highlightColor,
  decription,
  img,
  order,
  btn,
}) => {
  return (
    <div className="grid grid-rows-1 gap-y-[16px] bg-white sm:grid-cols-[auto_auto]">
      {/* Column 1 */}
      <div
        className={`relative h-[240px] w-[375px] sm:h-[fit] sm:w-[fit] lg:h-[368px] lg:w-[620px] ${order} justify-self-end sm:justify-self-start`}
      >
        <Image src={img} layout="fill" alt="Image of man holding a laptop" />
      </div>
      {/* Column 2 */}
      <div
        className={`grid h-fit grid-rows-1 gap-y-[8px] px-pageMargin-sm sm:px-[0px]`}
      >
        <div className="grid gap-y-[8px] font-heading text-h3 lg:text-h2">
          <h3 className=" text-black">{title}</h3>
          <h3 className={`${highlightColor}`}>{highlight}</h3>
        </div>
        <div className="grid gap-y-[24px]">
          <p className="max-w-[400px] font-body text-body-md text-smoke">
            {decription}
          </p>
          <Button label="get started" size="md" type={btn} icon={RiArrowRightCircleFill} />
        </div>
      </div>
    </div>
  );
};
