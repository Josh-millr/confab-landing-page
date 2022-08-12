import React, { useState, useEffect } from "react";
import { ActivityCard } from "@components/index";

export const MainSteps = ({}) => {
  let [stepIncrement, setStepIncrement] = useState(1);
  let [firstStep, setFirstStep] = useState(true);
  let [secondStep, setSecondStep] = useState(false);
  let [thirdStep, setThirdStep] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      let incrementedStep = stepIncrement != 3 ? stepIncrement + 1 : 1;
      setFirstStep(stepIncrement == 1 ? true : false);
      setSecondStep(stepIncrement == 2 ? true : false);
      setThirdStep(stepIncrement == 3 ? true : false);
      setStepIncrement(incrementedStep);
    }, 2000);
  }, [stepIncrement]);

  return (
    <section>
      <div className="grid grid-rows-1 gap-y-[64px] bg-cloudy px-pageMargin-sm py-[52px] sm:px-pageMargin-md md:py-[96px] lg:gap-y-[48px] lg:px-pageMargin-lg">
        {/* Column 1 */}
        <header className="grid grid-rows-1 gap-y-[16px] md:grid-cols-2 md:gap-y-[0px]">
          <div className="grid gap-y-[8px] font-heading text-h3 sm:text-h2 lg:text-h1">
            <h2 className=" text-black ">main</h2>
            <h2 className="text-opal">features</h2>
          </div>
          <p className="font-body text-body-md text-smoke sm:max-w-[400px] md:self-end md:justify-self-end">
            Virtual meetings, and conferences, anyone can share, join or host
            (virtual events).
          </p>
        </header>
        {/* Column 2 */}
        <div className="grid grid-cols-1 grid-rows-1 place-content-center gap-y-[16px] sm:grid-cols-3 sm:gap-y-[0px] sm:gap-x-[24px] lg:gap-x-[40px]">
          <ActivityCard
            img="/illustrations/man-with-sweater.svg"
            heading="Become a host"
            paraStart="Anyone can"
            paraEnd="and customize the number of participants."
            paraHighlight="Become a host"
            flow="center"
            active={firstStep}
          />
          <ActivityCard
            img="/illustrations/woman-with-knife.svg"
            heading="plan ahead"
            paraStart="to schedule meetings or conferences and send invites."
            paraEnd="and customize the number of participants."
            paraHighlight="New Event"
            flow="center"
            active={secondStep}
          />
          <ActivityCard
            img="/illustrations/woman-with-mobile.svg"
            heading="get a link, share."
            paraStart="Click"
            paraEnd="to get a link you can send to people you want to invite."
            paraHighlight="New Event"
            flow="center"
            active={thirdStep}
          />
        </div>
      </div>
    </section>
  );
};
