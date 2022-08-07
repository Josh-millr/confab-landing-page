import Image from "next/image";
import Link from "next/link";
import { Button } from "@components/index";
import {
  RiAddLine,
  RiMediumFill,
  RiTwitterFill,
  RiInstagramFill,
  RiLinkedinFill,
} from "react-icons/ri";

export const Footer = () => {
  return (
    <footer>
      <div className="l:pb-[64px] grid grid-rows-1 gap-y-[24px] px-pageMargin-sm py-[40px] sm:gap-y-[80px] sm:py-[116px] md:px-pageMargin-md lg:px-pageMargin-lg lg:pt-[0px]">
        <div className="grid grid-cols-1 grid-rows-1 gap-y-[56px] sm:grid-cols-2 sm:gap-y-[0px]">
          {/* Space for Logo strip */}
          <div className="flex justify-end gap-x-[16px] text-smoke">
            <RiMediumFill size={24} />
            <RiTwitterFill size={24} />
            <RiInstagramFill size={24} />
            <RiLinkedinFill size={24} />
          </div>
          {/* Space for confab Logo */}
          <div className="sm:[110px] relative h-[30px] w-[120px] sm:order-first sm:h-[32px] lg:h-[48px] lg:w-[164px]">
            <Image src="/confab-logo.png" layout="fill" alt="confab logo" />
          </div>
        </div>
        <div className="grid grid-cols-1 grid-rows-1 gap-y-[40px] ">
          {/* Bootstrap new event section  */}
          <div className="grid gap-y-[32px] lg:hidden">
            <p className="text-medium max-w-[400px] font-body text-body-md text-smoke">
              Virtual meetings, and conferences, anyone can share, join or host
              (virtual events).
            </p>
            <div className="sm:hidden lg:block">
              <Button
                icon={RiAddLine}
                label="New events or meeting"
                size="md"
                type="stroke"
              />
            </div>
          </div>
          {/* Footer link section */}
          <div className="sm:grid sm:grid-cols-2">
            {/* Displays only for tablet and desktop screens */}
            <div className="grid justify-between sm:gap-y-[16px]">
              <p className="text-medium hidden max-w-[400px] font-body text-body-md text-smoke lg:block">
                Virtual meetings, and conferences, anyone can share, join or
                host (virtual events).
              </p>
              <div className="hidden sm:block">
                <Button
                  icon={RiAddLine}
                  label="New events or meeting"
                  size="md"
                  type="stroke"
                />
              </div>
            </div>
            {/* For links */}
            <div className="grid w-[fit-content] grid-cols-[auto_auto] grid-rows-1 gap-x-[24px] md:gap-x-[72px] lg:gap-x-[132px]">
              <div className="grid gap-y-[16px] font-body text-body-sm">
                <h4 className="font-bold capitalize text-smoke">menu</h4>
                <ul className="grid grid-rows-1 gap-y-[16px] font-medium text-black">
                  <li>
                    <Link href="/">
                      <a>Confab Platform Overview</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>New Event or Meetings</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Customer Stories</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Confab Events</a>
                    </Link>
                  </li>
                </ul>
              </div>
              {/* second menu list goes here */}
              <div className="grid gap-y-[16px] font-body text-body-sm">
                <h4 className="font-bold capitalize text-smoke">About us</h4>
                <ul className="grid grid-rows-1 gap-y-[16px] font-medium text-black">
                  <li>
                    <Link href="/">
                      <a>Contact Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Our Team</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Careers</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Prees</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid-row-1 grid h-fit grid-cols-1 justify-items-center gap-y-[16px] bg-cloudy py-[24px] px-pageMargin-sm font-caption text-caption text-smoke sm:grid-cols-2 sm:justify-between sm:px-pageMargin-md lg:px-pageMargin-lg">
        {/* Year or start  */}
        <div className="order-last flex w-full justify-center gap-x-[24px] sm:justify-end">
          <p className="w-fill font-medium">Privacy Policy</p>
          <p className="w-fill font-medium">Terms & Conditions</p>
        </div>
        <p className="sm:justify-self-start">© 2022 Confab. All rights reserved.</p>
      </div>
    </footer>
  );
};
