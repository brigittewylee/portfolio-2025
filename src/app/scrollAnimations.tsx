"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";
gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimations() {
  useEffect(() => {

    const texts = document.querySelectorAll(".animate-text");
    texts.forEach((el) => {
      const split = new SplitType(el as HTMLElement, { types: "words,chars" });

      gsap.from(split.chars, {
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
        opacity: 0,
        y: 10,
        stagger: 0.05,
        ease: "power3.out",
        duration: 0.2,
      });
    });

    const fadeUps = document.querySelectorAll(".fade-up");
    fadeUps.forEach((el, index) => {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: 50,
          },
          {
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              toggleActions: "play none none none",
              once: true,
            },
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            delay: index * 0.09,
          }
        );
      });

    const marquees_left = document.querySelectorAll(".marquee-left");
    marquees_left.forEach((el) => {
      gsap.to(el, {
        xPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: el.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    const marquees_right = document.querySelectorAll(".marquee-right");
    marquees_right.forEach((el) => {
      gsap.to(el, {
        xPercent: 50,
        ease: "none",
        scrollTrigger: {
          trigger: el.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });


    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return null;
}
