export default function Design() {
  return(
    <div className="font-[family-name:var(--font-bodoni-moda)] text-[103px]/20 font-bold italic drop-shadow-[0px_0px_0.9px_rgba(0,0,0,1)]" >
      <div className="text-left pl-5 bg-custom-white mt-10">
        PORTFOLIO DESIGN
      </div>

      <div className="bg-black inset-0 bg-black z-0 w-full text-custom-white pt-5">
        <div className="flex mt-20 font-[family-name:var(--font-arimo)] text-3xl not-italic drop-shadow-[0px_0px_0.5px_rgba(0,0,0,1)]">
          <div className="flex-1 pl-20">
            <div className="text-7xl">FONTS</div>
            <p className="pl-10">
              <span className="font-normal">ARIMO</span> - ARIMO - <span className="italic">ARIMO</span>
            </p>
            <p className="pl-10 font-[family-name:var(--font-bodoni-moda)]">
              BODONI MODA - <span className="italic">BODONI MODA</span>
            </p>
            <div className="text-7xl pt-5">PALETTE</div>
            <div className="pl-10 flex">
              <div className="relative box-content bg-custom-white bg-ececec border border-outline-white h-[215px] w-[190px] mr-2">
                <p className="absolute text-[20px] text-black bottom-2 right-4">#ECECEC</p>
              </div>
              <div className="relative box-content border border-outline-black h-[215px] w-[190px]">
                <p className="absolute text-[20px] text-custom-white bottom-2 right-4">#000000</p>
              </div>                  
            </div>
          </div>

          <div className="flex-1 font-normal text-right pr-20">
            <div className="text-7xl font-bold">TECHNOLOGY USED</div>
            <div className="pr-10 text-[30px]/7">
              <div className="font-bold pt-5">DESIGN</div>
                  <ol>FIGMA</ol>
                <div className="font-bold pt-5"> FRONTEND </div>
                  <ol>NEXT.JS</ol>
                  <ol>TAILWIND</ol>
                  <ol>FRAMER</ol>
                  <ol>GSAP</ol>
                <div className="font-bold pt-5">DEPLOYMENT</div>
                  <ol>VERCEL</ol>
            </div>
          </div>
        </div>
      </div>
      
    </div>

  );
}