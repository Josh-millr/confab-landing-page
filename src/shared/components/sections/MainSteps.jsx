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
    },
    {
      key: 12312,
      title: "plan ahead",
      para1: "Click",
      paraHighlight: "New Event",
      para2: "to schedule meetings or conferences and send invites.",
      img: "/illustrations/woman-with-knife.svg",
    },
    {
      key: 213,
      title: "get a link, share.",
      para1: "Click",
      paraHighlight: "New Event",
      para2: "to get a link you can send to people you want to invite.",
      img: "/illustrations/woman-with-mobile.svg",
    },
  ];
  let activityList = activities.map(
    ({ key, title, para1, paraHighlight, para2, img }) => (
      <ActivityCard
        key={key}
        img={img}
        imgHeight={168}
        imgWidth={124}
        heading={title}
        paraStart={para1}
        paraEnd={para2}
        paraHighlight={paraHighlight}
        flow="center"
      />
    )
  );
  return (
    <div className="grid grid-rows-1 bg-cloudy px-pageMargin-sm py-[52px] sm:px-pageMargin-md md:py-[96px] lg:px-pageMargin-lg">
      {/* Column 1 */}
      <div className="grid grid-cols-1 grid-rows-1 place-content-center gap-y-[16px] sm:grid-cols-2 sm:gap-y-[0px]">
        {activityList}
      </div>
      <div className=""></div>
    </div>
  );
};
