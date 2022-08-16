import React from "react";

export const Button = ({ label, icon: Icon, type, size }) => {
  let buttonProps = {
    base: "flex place-items-center gap-x-[8px] whitespace-nowrap rounded-full font-btn w-[fit-content] h-fit",
    type: {
      primary: "bg-black text-white",
      stroke: "border-[2px] text-black",
    },
    size: {
      md: "px-[16px] py-[8px] text-btn font-semibold",
      sm: "p-[8px] text-btn font-semibold",
    },
  };
  return (
    <button type="button"
      className={`${buttonProps.base} ${type && buttonProps.type[type]} 
      ${size && buttonProps.size[size]}`}>

      {Icon != undefined && <Icon size={16} />}
      {label != undefined && <span>{label}</span>}
      
    </button>
  );
};
