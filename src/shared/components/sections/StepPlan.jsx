import { StepPlanCard } from "@components/index";

export const StepPlan = () => {
  return (
    <section>
      <div className="grid grid-rows-1 gap-y-[40px] overflow-hidden bg-white py-[80px] sm:gap-x-[60px] sm:px-pageMargin-sm md:px-pageMargin-md lg:px-pageMargin-lg">
        <StepPlanCard
          title="become an event"
          highlight="speaker"
          highlightColor="text-opal"
          order="order-first"
          decription="[description goes in here] blorem blipsum dolor sit bamat minim mollit non deserunt ullamco lorem ipsum bolor sit amat est."
          img="/images/man-with-laptop.png"
          btn="stroke"
        />
        <StepPlanCard
          title="become an event"
          highlight="speaker"
          highlightColor="text-mango"
          order="order-first sm:order-last"
          decription="[description goes in here] blorem blipsum dolor sit bamat minim mollit non deserunt ullamco lorem ipsum bolor sit amat est."
          img="/images/woman-scheduling-calender.png"
          btn="primary"
        />
        <StepPlanCard
          title="become an event"
          highlight="speaker"
          highlightColor="text-crayola"
          order="order-first"
          decription="[description goes in here] blorem blipsum dolor sit bamat minim mollit non deserunt ullamco lorem ipsum bolor sit amat est."
          img="/images/man-streaming.png"
          btn="stroke"
        />
      </div>
    </section>
  );
};
