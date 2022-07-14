import React from "react";
import Image from "next/image";
import { RiMenu3Line, RiAddLine } from "react-icons/ri";
import { Button } from "@components/index";

export const NavBar = () => {
  const menuHandler = () => console.log("menu opened or closed");
  return (
    <nav className="w-full flex px-pageMargin-01 py-[42px]">
      <div className="w-2/6 items-center my-auto">
        <Image
          src="/confab-logo.png"
          alt="confab logo"
          width={88}
          height={27}
        />
      </div>
      {/*  */}
      <div className="flex w-4/6 justify-end gap-[24px] ">
        <Button label="New event" icon={RiAddLine} />
        {/* toggle menu */}
        <button onClick={menuHandler}>
          <RiMenu3Line size={32} />
        </button>
      </div>
    </nav>
  );
};
