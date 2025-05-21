import React from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

type ContactProps = {
  contactRef: React.RefObject<HTMLDivElement>;
  footerRef: React.RefObject<HTMLDivElement>;
};

export default function Contact({contactRef, footerRef}: ContactProps) {
  useEffect(() => {
    const button = document.querySelector('button[data-target="#landing"]');
    if (!button) return;
  
    const handleClick = () => {
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: 0,
          offsetY: -23,
        },
        ease: "power2.out",
      });
    };
    
    button.addEventListener("click", handleClick);
    return () => {
      button.removeEventListener("click", handleClick);
    };
  });

  return (
    <div ref={contactRef} className="font-[family-name:var(--font-arimo)] font-bold text-custom-white">
        <hr className="h-[2px] mx-auto w-[95%] align-center bg-custom-white mb-[1rem] fade-up"></hr>
      <div className="relative box-content min-h-screen w-full mr-2 fade-up">
        <p className="text-9xl text-left fade-up pt-[5rem] pl-[2rem]">GET IN TOUCH:</p>
        <p className="pl-[2.5rem] text-xl text-left text-custom-white">
            I&apos;m always open to new ideas, collaborations, or any 
            other questions you may have—feel free to reach out!  <br />
        </p>
        <div className="flex text-custom-white text-sm">
            <div ref={footerRef} 
                className="absolute left-5 bottom-5 flex gap-5">
                <a href="https://github.com/brigittewylee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-block cursor-pointer after:absolute after:left-0 after:top-[95%] after:w-0 after:h-[2px] after:bg-custom-white after:transition-all after:duration-300 hover:after:w-full">
                  GITHUB
                </a>
                <a href="https://www.linkedin.com/in/brigitteleewy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-block cursor-pointer after:absolute after:left-0 after:top-[95%] after:w-0 after:h-[2px] after:bg-custom-white after:transition-all after:duration-300 hover:after:w-full">
                  LINKEDIN
                </a>
                <a href="mailto:brigitte.lee@uwaterloo.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-block cursor-pointer after:absolute after:left-0 after:top-[95%] after:w-0 after:h-[2px] after:bg-custom-white after:transition-all after:duration-300 hover:after:w-full">
                  EMAIL
                </a>
                <a href="PLACEHOLDER"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-block cursor-pointer after:absolute after:left-0 after:top-[95%] after:w-0 after:h-[2px] after:bg-custom-white after:transition-all after:duration-300 hover:after:w-full">
                  CV
                </a>
            </div>
            <nav>
              <button data-target="#landing" className="absolute bottom-5 left-1/2 transform -translate-x-1/2 cursor-pointer transition-transform duration-[600ms] ease-in-out hover:scale-[1.1] scroll-mt-[60px]">
                  BACK TO TOP &#x2963;
              </button>
            </nav>
            <div className="absolute right-5 bottom-5 text-right">
                BY BRIGITTE LEE &apos;25<br />
                ALL RIGHTS RESERVED
            </div>
        </div>
      </div>
    </div>
  );
}