import { NavBar } from "@components/sections/NavBar";
import { Hero } from "@components/sections/Hero";

export default function Home() {
  return (
    <>
      <header>
        <NavBar />
        <Hero />
      </header>
      <main>{/* Web page main content goes here... */}</main>
    </>
  );
}
