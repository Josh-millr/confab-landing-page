import { NavBar } from "@components/sections/NavBar";
import { Hero } from "@components/sections/Hero";
import { LogoStrip } from "@components/sections/LogoStrip";
import { Feature } from "@components/sections/Feature";
import { Testimonial } from "@components/sections/Testimonial";
export default function Home() {
  return (
    <>
      <header>
        <NavBar />
        <Hero />
      </header>
      <main>
        <LogoStrip />
        <Feature />
        <Testimonial />
      </main>
    </>
  );
}
