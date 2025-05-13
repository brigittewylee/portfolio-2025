import React from "react";

type ContactProps = {
  contactRef: React.RefObject<HTMLDivElement>;
};

export default function Contact({contactRef}: ContactProps) {
  return (
    <div ref={contactRef}
        className="font-[family-name:var(--font-arimo)] bg-custom-white font-bold text-8xl text-center">
      GET IN TOUCH
      <div className="relative box-content bg-black h-[300px] w-full mr-2">
        <p className="absolute text-[20px] text-right text-custom-white top-16 right-15">
            <span className="font-[family-name:var(--font-bodoni-moda)] text-[30px]">
                LET&apos;S MAKE SOMETHING <span className="italic">MEANINGFUL</span> 
            </span>  <br />
            I&apos;m always open to new ideas, collaborations, or any <br />
            other questions you may have—feel free to reach out  <br />
            and let&apos;s bring something thoughtful to life. <br />
        </p>
        <div className="text-custom-white text-sm">
            <div className="absolute left-5 bottom-5 flex gap-5">
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
                  className="relative inline-block cursor-pointer after:absolute after:left-0 after:top-[95%] after:w-0 after:h-[2px] after:bg-custom-white after:transition-all after:duration-300 hover:after:w-full">                  CV
                </a>
            </div>
            <a href="#landing" className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
                BACK TO TOP &#x2191;
            </a>
            <div className="absolute right-5 bottom-5 text-right">
                BY BRIGITTE LEE &apos;25<br />
                ALL RIGHTS RESERVED
            </div>
        </div>
      </div>
    </div>
  );
}