import { NavBar } from "@components/sections/NavBar";
import { Hero } from "@components/sections/Hero";
import { Testimonials } from "@components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <header>
        <NavBar />
        <Hero />
      </header>
      <main>
        <Testimonials />
      </main>
    </>
  );
}
