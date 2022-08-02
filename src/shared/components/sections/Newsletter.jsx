import Image from "next/image";
import Link from "next/link";
import { RiSendPlane2Fill } from "react-icons/ri";

export const Newsletter = ({}) => {
  return (
    <div className="grid grid-rows-1 gap-y-[40px] bg-cloudy px-pageMargin-sm py-[80px] sm:gap-y-[56px] sm:px-pageMargin-md sm:py-[62px] lg:gap-x-[64px] lg:px-pageMargin-lg lg:py-[96px]">
      {/* Column 1 */}
      <div className=" grid grid-rows-1 gap-y-[8px]">
        <div className="md:hidden">
          <Image
            src="/illustrations/Sketch-annotation-element-brush-pen-icon-eye.svg"
            height={40}
            width={40}
            alt="image of a mega phone"
          />
        </div>
        <div className="grid grid-rows-1 gap-y-[16px] md:grid-cols-[auto_auto] md:gap-y-[0px]">
          <div className="grid gap-y-[8px] font-heading text-h3 sm:text-h2 lg:text-h1">
            <h3 className=" text-black ">subscribe our</h3>
            <h3 className="text-opal">Newsletter</h3>
          </div>
          <div className="flex gap-x-[8px] self-end">
            <div className="relative hidden h-[40px] w-[40px] lg:block">
              <Image
                src="/illustrations/Sketch-annotation-element-brush-pen-icon-eye.svg"
                layout="fill"
                alt="image of a mega phone"
              />
            </div>
            <p className="font-body text-body-md font-medium text-smoke sm:max-w-[400px] md:self-end md:justify-self-end">
              Get the latest <span className="text-crayola">free</span> event
              conference notification and a reminder of upcoming speakers.
            </p>
          </div>
        </div>
      </div>

      {/* Column 2 */}
      <form
        action=""
        method="post"
        className="grid max-w-[498px] gap-y-[16px] lg:gap-y-[24px]"
      >
        {/* // TODO: Add email validation checker */}
        <input
          pattern="[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
          type="text"
          role="email"
          className="h-[56px] max-w-[inherit] rounded-full border-[2px] border-black px-[32px] font-body text-body-sm text-smoke"
          placeholder="Your email address"
        />
        <div className="grid grid-rows-1 justify-items-center gap-y-[24px] sm:grid-cols-2 sm:justify-between sm:justify-items-end sm:gap-y-[0px] sm:pl-[16px]">
          {/*  */}
          <div className="relative">
            <input type="checkbox" name="privacy-check" id="privacyCheck" />
            <label
              htmlFor="privacyCheck"
              className="pl-[32px] font-body text-[12px] capitalize text-smoke"
            >
              I agree with {""}
              <Link href="/">
                <a>
                  <span className="underline">privacy policy</span>
                </a>
              </Link>{" "}
              and{" "}
              <Link href="/">
                <a>
                  <span className="underline">terms of condition</span>
                </a>
              </Link>
              .
            </label>
          </div>
          <button
            type="submit"
            className="flex h-fit w-[fit-content] place-items-center gap-x-[16px] rounded-full bg-black px-[24px] py-[16px] text-white"
          >
            <p className="font-body text-body-md font-medium capitalize">
              Subscribe
            </p>
            <RiSendPlane2Fill size="16" />
          </button>
        </div>
      </form>
    </div>
  );
};
