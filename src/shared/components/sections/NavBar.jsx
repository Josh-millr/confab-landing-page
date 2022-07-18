import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { RiMenu3Line, RiAddLine } from "react-icons/ri";
import { Button } from "@components/index";


export const NavBar = () => {
  let [displayNav, setDisplayNav] = useState(false);
  let [currentWindowWidth, setCurrentWidowWidth] = useState(0);

  useEffect(() => {
    let windowWidth = window.innerWidth;
    setCurrentWidowWidth(windowWidth);
    setDisplayNav(true);
  }, []);

  return (
    <nav className="flex w-full px-pageMargin-sm py-[42px] sm:px-pageMargin-md sm:py-[32px] md:gap-x-[22px] lg:px-pageMargin-lg">
      <div className="my-auto w-2/6 items-center sm:w-1/6">
        <Image
          src="/confab-logo.png"
          alt="confab logo"
          width={88}
          height={27}
        />
      </div>

      {displayNav && (
        <div className="flex w-4/6 justify-end gap-[24px] sm:w-5/6 ">
          {/* Visible only on tablet and desktop sizes */}
          {currentWindowWidth >= 725 && (
            <ul className="flex flex-row items-center justify-end gap-x-[20px] whitespace-nowrap font-link text-link-md font-medium text-black">
              <li>
                <Link href="/">
                  <a>Browse</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Enter a code/link</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Confab</a>
                </Link>
              </li>
            </ul>
          )}

          <Button label="New event" icon={RiAddLine} type="primary" size="md" />
          {/* Mobile Menu Toggle */}
          <button onClick={() => null}>
            <RiMenu3Line size={32} />
          </button>
        </div>
      )}
    </nav>
  );
};
