import fsPromises from "fs/promises";
import path from "path";
import { NavBar } from "@components/sections/NavBar";
import { Hero } from "@components/sections/Hero";
import { LogoStrip } from "@components/sections/LogoStrip";
import { Feature } from "@components/sections/Feature";
import { Testimonial } from "@components/sections/Testimonial";

export default function Home({ testimonialData }) {
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
      </main>
    </>
  );
}

export async function getStaticProps(context) {
  let filePathToTestimonialData = path.join(
    process.cwd(),
    "/src/shared/utils/testimonialData.json"
  );
  const testimonialDataRaw = await fsPromises.readFile(
    filePathToTestimonialData
  );
  const testimonialDataParse = JSON.parse(testimonialDataRaw);

  return {
    props: {
      testimonialData: testimonialDataParse,
    },
  };
}
