import Clock from "@/app/components/clock";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);


type HeaderProps = {
  headerRef: React.RefObject<HTMLDivElement | null>;
  variant?: "default" | "alt";
};

export default function Header({headerRef, variant="default"}: HeaderProps) {
  const underlineColor = variant === "alt" ? "after:bg-white" : "after:bg-black";
  const textColor = variant === "alt" ? "text-custom-white" : "text-black";
  const bgColor = variant === "alt" ? "bg-black" : "bg-custom-white";

  useEffect(() => {
    document.querySelectorAll("nav button").forEach((btn) => {
      btn.addEventListener("click", () => {
        const target = btn.getAttribute("data-target");
        if (target) {
          gsap.to(window, {
            duration: 1,
            scrollTo: {
              y: target,
              offsetY: 80,
            },
            ease: "power2.out"
          });
        }
      });
    });
  })

  return (
    <div ref={headerRef}
        className={`fixed top-0 w-full h-[11vh] z-50 transition-all duration-500 backdrop-blur-3xl
        [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.8)_35%,transparent)] [mask-size:100%_100%]
        ${bgColor} ${textColor}`}>
		<section className="flex w-full overflow-x-hidden justify-center font-[family-name:var(--font-arimo)] font-bold drop-shadow-[0px_0px_0.9px_rgba(0,0,0,1)]">
			<div className="w-1/2 p-4 text-left gap-1 text-xs md:text-lg sm:text-xs fade-up">
				<p>brigittelee &apos;25</p>
      </div>
        <div className="w-1/2 flex p-4 gap-30 z-[999] text-right items-baseline text-xs md:text-lg sm:text-xs">
          <nav className="flex flex-nowrap w-full gap-0 fade-up whitespace-nowrap">
              <button data-target="#work"
                className={`relative inline-block after:absolute after:left-0 after:top-[95%] after:w-0 after:h-[2px] ${underlineColor} after:transition-all after:duration-300 hover:after:w-full`}>
                work
              </button>
              <p>,</p>
              <button data-target="#site-design"
                className={`relative inline-block after:absolute after:left-0 after:top-[95%] after:w-0 after:h-[2px] ${underlineColor} after:transition-all after:duration-300 hover:after:w-full`}>
                  site-design
              </button>
              <p>,</p>
              <button data-target="#contact"
                className={`relative inline-block after:absolute after:left-0 after:top-[95%] after:w-0 after:h-[2px] ${underlineColor} after:transition-all after:duration-300 hover:after:w-full`}>
                contact
              </button>
          </nav>
          <div className="flex gap-1 justify-center fade-up">
            <p>toronto,on</p><Clock/>
          </div>
        </div>
    </section>
    </div>
  )
};