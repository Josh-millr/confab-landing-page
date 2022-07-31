import Image from "next/image";

export const ActivityCard = ({
  img,
  paraStart,
  paraEnd,
  paraHighlight,
  imgHeight,
  imgWidth,
  heading,
  alt,
  flow,
}) => {
  let textFlowProps = {
    left: "text-left",
    right: "text-right",
    center: "text-center",
  };
  return (
    <div className="grid gap-y-[16px] md:pl-[40px] lg:pl-[0]">
      <div>
        <Image src={img} height={imgHeight} width={imgWidth} alt={alt} />
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
