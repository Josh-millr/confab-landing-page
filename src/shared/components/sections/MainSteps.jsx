import { ActivityCard } from "@components/index";

export const MainSteps = ({}) => {
  const activities = [
    {
      key: 9712,
      title: "Become a host",
      para1: "Anyone can",
      paraHighlight: "Become a host",
      para2: "and customize the number of participants.",
      img: "/illustrations/man-with-sweater.svg",
      active: true,
    },
    {
      key: 12312,
      title: "plan ahead",
      para1: "Click",
      paraHighlight: "New Event",
      para2: "to schedule meetings or conferences and send invites.",
      img: "/illustrations/woman-with-knife.svg",
      active: false,
    },
    {
      key: 213,
      title: "get a link, share.",
      para1: "Click",
      paraHighlight: "New Event",
      para2: "to get a link you can send to people you want to invite.",
      img: "/illustrations/woman-with-mobile.svg",
      active: false,
    },
  ];
  let activityList = activities.map(
    ({ key, title, para1, paraHighlight, para2, img, active }) => (
      <ActivityCard
        key={key}
        img={img}
        heading={title}
        paraStart={para1}
        paraEnd={para2}
        paraHighlight={paraHighlight}
        flow="center"
        active={active}
      />
    )
  );
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
          {activityList}
        </div>
      </div>
    </section>
  );
};
