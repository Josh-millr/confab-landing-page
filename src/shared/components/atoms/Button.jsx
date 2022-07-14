import React from "react";

export const Button = ({ label, icon }) => {
  let IconType = icon;
  return (
    <button
      type="button"
      className="flex flex-row items-center justify-center gap-[8px] whitespace-nowrap rounded-full bg-black px-[16px] py-[8px] text-white"
    >
      <IconType size={16} />
      <span className="font-btn text-btn font-semibold">{label}</span>
    </button>
  );
};
