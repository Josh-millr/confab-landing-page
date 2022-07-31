import Image from "next/image";

export const ActivityCard = ({
  img,
  paraStart,
  paraEnd,
  paraHighlight,
  heading,
  alt,
  flow,
  active,
}) => {
  let textFlowProps = {
    left: "text-left",
    right: "text-right",
    center: "text-center",
  };

  return (
    <div
      className={`grid gap-y-[16px] px-[24px] py-[32px] lg:max-w-[420px] ${
        active && "rounded-[32px] bg-white"
      }`}
    >
      <div className="relative h-[168px] w-[124px] lg:h-[270px] lg:w-[200px]">
        <Image src={img} layout="fill" alt={alt} />
      </div>
      <div
        className={`grid gap-y-[8px] ${flow === textFlowProps[flow] && flow}`}
      >
        <h1 className="font-heading text-h4 text-black">{heading}</h1>
        <p className="max-w-[320px] font-body text-body-sm font-medium text-smoke">
          {paraStart} <span className="text-crayola">{paraHighlight}</span>{" "}
          {paraEnd}
        </p>
      </div>
    </div>
  );
};
