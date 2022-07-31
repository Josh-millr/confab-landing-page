import fsPromises from "fs/promises";
import path from "path";
import { NavBar } from "@components/sections/NavBar";
import { Hero } from "@components/sections/Hero";
import { LogoStrip } from "@components/sections/LogoStrip";
import { Feature } from "@components/sections/Feature";
import { Testimonial } from "@components/sections/Testimonial";
import { NoticeBoard } from "@components/sections/NoticeBoard";
import { MainSteps } from "@components/sections/MainSteps";

export default function Home({ testimonialData, eventData }) {
  return (
    <>
      <header>
        <NavBar />
        <Hero />
      </header>
      <main>
        <LogoStrip />
        <Feature />
        <Testimonial data={testimonialData} />
        <NoticeBoard data={eventData} />
        <MainSteps />
      </main>
    </>
  );
}

export async function getStaticProps(context) {
  const eventDataFilePath = "/src/shared/utils/eventData.json";
  const testimonialDataFilePath = "/src/shared/utils/testimonialData.json";

  const testimonialDataPath = path.join(process.cwd(), testimonialDataFilePath);
  const eventDataPath = path.join(process.cwd(), eventDataFilePath);

  const testimonialDataRaw = await fsPromises.readFile(testimonialDataPath);
  const eventDataRaw = await fsPromises.readFile(eventDataPath);

  const testimonialDataParsed = JSON.parse(testimonialDataRaw);
  const eventDataParsed = JSON.parse(eventDataRaw);

  return {
    props: {
      testimonialData: testimonialDataParsed,
      eventData: eventDataParsed,
    },
  };
}
