import { NavBar } from "@components/sections/NavBar";
import { Hero } from "@components/sections/Hero";
import { Testimonials } from "@components/sections/Testimonials";
import {Feature} from "@components/sections/Feature";

export default function Home() {
  return (
    <>
      <header>
        <NavBar />
        <Hero />
      </header>
      <main>
        <Testimonials />
        <Feature/>
      </main>
    </>
  );
}
