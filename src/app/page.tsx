"use client";
import gsap from "gsap";
import { useEffect, useState, useRef} from "react";
import Header from "./components/header";
import Landing from "./components/landing";
import General from "./components/general";
import Work from "./components/work";
import Design from "./components/design";
import Contact from "./components/contact";
import Cursor from "./components/cursor";
import ScrollAnimations from "./scrollAnimations";

export default function HomePage() {
  const headerRef = useRef<HTMLDivElement>(null); 
  const contactRef = useRef<HTMLDivElement>(null);
  const designRef = useRef<HTMLDivElement>(null);  

  return (
    <div className="scroll-smooth">
      <Cursor headerRef={headerRef} contactRef={contactRef}/>
      <ScrollAnimations />

      <div>
        <header className="w-full">
            <Header headerRef={headerRef}/>
        </header>
      </div>

        <section id="landing" className="box mt-60 mb-70 scroll-mt-28">
          <Landing />
        </section>

      <section id="general" className="box mb-25">
        <General />
      </section>

      <section id="work" className="box mb-20">
        <Work />
      </section>

      <div className="bg-black">
        <section ref={designRef} id="site-design" className="box pb-20">
            <Design />
        </section>

        <section id="contact" className="box mt-0">
          <Contact contactRef={contactRef}/>
        </section>
      </div>
    </div>

  );
}