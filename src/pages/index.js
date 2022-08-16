import React, { useState, useEffect } from "react";
import fsPromises from "fs/promises";
import path from "path";
import { Testimonial } from "@components/sections/Testimonial";
import { NoticeBoard } from "@components/sections/NoticeBoard";
import { CreateEvent } from "@components/sections/CreateEvent";
import { Newsletter } from "@components/sections/Newsletter";
import { LogoStrip } from "@components/sections/LogoStrip";
import { MainSteps } from "@components/sections/MainSteps";
import { StepPlan } from "@components/sections/StepPlan";
import { Feature } from "@components/sections/Feature";
import { Footer } from "@components/sections/Footer";
import { NavBar } from "@components/sections/NavBar";
import { ClimbingBoxLoader } from "react-spinners";
import { Hero } from "@components/sections/Hero";

export default function Home({ testimonialData, eventData }) {
  let [showSpinner, setShowSpinner] = useState(true);
  useEffect(() => setShowSpinner(false), []);

  return (
    (showSpinner && (
      <div className="bg-cloud grid h-[100vh] w-full place-content-center">
        <ClimbingBoxLoader loading={true} size={15} color="#FB554C" />
      </div>
    )) || (
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
          <StepPlan />
          <Newsletter />
          <CreateEvent />
        </main>
        <Footer />
      </>
    )
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
