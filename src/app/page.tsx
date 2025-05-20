"use client";
import { useEffect, useState, useRef} from "react";
import Header from "./components/header";
import Landing from "./components/landing";
import General from "./components/general";
import Work from "./components/work";
import Design from "./components/design";
import Contact from "./components/contact";
import Cursor from "./components/cursor";
import ScrollAnimations from "./scrollAnimations";
import Lenis from '@studio-freight/lenis'

export default function HomePage() {
  const headerRef = useRef<HTMLDivElement>(null); 
  const designHeadRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const designRef = useRef<HTMLDivElement>(null);  
  const [useAltHeader, setUseAltHeader] = useState(false); 


  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  useEffect(() => { 
    function onScroll() {
      if (!designRef.current || !contactRef.current) return;

      const designTop = designRef.current.getBoundingClientRect().top;
      const designHeadHeight = designHeadRef.current.offsetHeight;
      const contactTop = contactRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const adjustedDesignTop = designTop + designHeadHeight;

      const inDesign = adjustedDesignTop < windowHeight * 0.5 && adjustedDesignTop > -designRef.current.offsetHeight;
      const inContact = contactTop < windowHeight * 0.5 && contactTop > -contactRef.current.offsetHeight;


      if (inDesign || inContact) {
        setUseAltHeader(true);
      } else {
        setUseAltHeader(false);
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="scroll-smooth">
      <Cursor headerRef={headerRef} variant={useAltHeader ? "alt" : "default"} contactRef={contactRef} footerRef={footerRef}/>
      <ScrollAnimations />

      <div>
        <header className="w-full">
            <Header headerRef={headerRef} variant={useAltHeader ? "alt" : "default"}/>
        </header>
      </div>

        <section id="landing" className="box mt-60 mb-10 -scroll-mt-28 snap-start">
          <Landing />
        </section>

      <section id="general" className="box mb-25">
        <General />
      </section>

      <section id="work" className="box mb-20">
        <Work />
      </section>

      <div className="bg-black">
        <section id="site-design" className="box pb-20">
            <Design designRef={designRef} designHeadRef={designHeadRef}/>
        </section>

        <section id="contact" className="box mt-0">
          <Contact contactRef={contactRef} footerRef={footerRef}/>
        </section>
      </div>
    </div>

  );
}