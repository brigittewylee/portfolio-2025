import Clock from "@/app/components/clock";
import React from "react";

type HeaderProps = {
  headerRef: React.RefObject<HTMLDivElement>;
};

export default function Header({headerRef}: HeaderProps) {
  return (
    <div ref={headerRef}
        className="fixed top-0 right-0 left-0 w-full h-23 z-50 backdrop-blur-md bg-white/100 [mask-image:linear-gradient(to_bottom,black,transparent)] [mask-size:100%_100%]">
		<section className="flex text-m font-[family-name:var(--font-arimo)] font-bold drop-shadow-[0px_0px_0.9px_rgba(0,0,0,1)]">
			<div className="w-1/2 flex p-4 text-left gap-1 fade-up">
				<p>brigittelee &apos;25</p>
          	</div>
			<div className="w-1/2 flex p-4 mr-4 gap-30 z-[999] justify-end">
				<div className="flex gap-0 fade-up">
					<a href="#work"
            className="relative inline-block cursor-pointer after:absolute after:left-0 after:top-[95%] after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full">
            work
          </a>
          <p>,</p>
					<a href="#site-design"
            className="relative inline-block after:absolute after:left-0 after:top-[95%] after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full">
              site-design
          </a>
          <p>,</p>
					<a href="#contact"
            className="relative inline-block after:absolute after:left-0 after:top-[95%] after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
            contact
          </a>
				</div>
				<div className="flex gap-1 fade-up">
					<p>toronto,on</p><Clock />
				</div>
			</div>
        </section>
    </div>
  )
};