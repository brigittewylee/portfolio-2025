import React from "react";

type DesignProp = {
  designRef: React.RefObject<HTMLDivElement>
  designHeadRef: React.RefObject<HTMLDivElement>
};

export default function Design({ designRef, designHeadRef }: DesignProp) {
  return(
    <section>
      <div ref={designHeadRef}
            className="sticky top-0 bg-custom-white z-0 font-[family-name:var(--font-bodoni-moda)] text-[103px]/20 font-bold pt-30 pb-20 px-5">
          <div className="drop-shadow-[0px_0px_0.9px_rgba(0,0,0,1)]">
          PORTFOLIO DESIGN
          </div>
      </div>

      <div ref={designRef} 
            className="bg-black inset-0 z-10 h-auto w-full text-custom-white">
        <div className="flex flex-col">
          <div className="bg-black pt-[8rem] pb-[3rem] font-[family-name:var(--font-arimo)] text-3xl drop-shadow-[0px_0px_0.5px_rgba(0,0,0,1)]">
            <div className="fade-up flex">
              <div className="flex-1 pl-20">
                <div className="text-7xl">FONTS</div>
                <p className="pl-10">
                  ARIMO - <span className="italic">ARIMO</span> - <span className="font-bold">ARIMO</span>
                </p>

                <p className="pl-10 font-[family-name:var(--font-bodoni-moda)]">
                  BODONI MODA - <span className="italic font-bold">BODONI MODA</span>
                </p>

                <div className="text-7xl pt-5">PALETTE</div>
                <div className="pl-10 flex">
                  <div className="relative box-content bg-custom-white bg-ececec border border-outline-white h-[215px] w-[190px] mr-2">
                    <p className="absolute text-[20px] text-black font-bold bottom-2 right-4">#ECECEC</p>
                  </div>

                  <div className="relative box-content border border-outline-black h-[215px] w-[190px]">
                    <p className="absolute text-[20px] font-bold bottom-2 right-4">#000000</p>
                  </div>                  
                </div>
              </div>

              <div className="flex-1 font-normal text-right pr-20">
                <div className="text-7xl">TECHNOLOGY USED</div>
                <div className="pr-10 text-[30px]/7">
                  <div className="font-bold pt-5">DESIGN</div>
                      <ol>FIGMA</ol>
                    <div className="font-bold pt-5">FRONTEND</div>
                      <ol>NEXT.JS</ol>
                      <ol>TAILWIND</ol>
                      <ol>GSAP</ol>
                    <div className="font-bold pt-5">DEPLOYMENT</div>
                      <ol>VERCEL</ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}