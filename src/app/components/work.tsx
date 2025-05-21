export default function Work() {
  return (
    <div className="italic font-bold w-full overflow-hidden fade-up">
      <div className="flex items-center left-1/2 -translate-x-1/2 whitespace-nowrap marquee-right drop-shadow-[0px_0px_0.9px_rgba(0,0,0,1)]">
        <span className="inline text-[90px] font-[family-name:var(--font-arimo)]"> TECHNOLOGY&#x2733;</span>
			  <span className="inline text-[80px] font-[family-name:var(--font-bodoni-moda)]"> ACCESSIBLE </span>
        <span className="inline text-[90px] font-[family-name:var(--font-arimo)]"> TECHNOLOGY&#x2733;</span>
			  <span className="inline text-[80px] font-[family-name:var(--font-bodoni-moda)]"> ACCESSIBLE </span>
        <span className="inline text-[90px] font-[family-name:var(--font-arimo)]"> TECHNOLOGY&#x2733;</span>
      </div>

		  <div className="flex items-center whitespace-nowrap marquee-left drop-shadow-[0px_0px_0.9px_rgba(0,0,0,1)]">
        <span className="inline text-[90px] font-[family-name:var(--font-arimo)]"> DESIGN&#x2733;</span>
			  <span className="inline text-[80px] font-[family-name:var(--font-bodoni-moda)]">USER-CENTERED </span>
        <span className="inline text-[90px] font-[family-name:var(--font-arimo)]"> DESIGN&#x2733;</span>
			  <span className="inline text-[80px] font-[family-name:var(--font-bodoni-moda)]">USER-CENTERED </span>
        <span className="inline text-[90px] font-[family-name:var(--font-arimo)]"> DESIGN&#x2733;</span>
      </div>
		
    	<div className="flex font-[family-name:var(--font-arimo)] not-italic justify-end items-end">
        <div className="pr-70 text-[140px]/27 text-left fade-up">
          <p className="pt-70 pl-10">PROJECT</p>
          <p className="font-[family-name:var(--font-bodoni-moda)]">GALLERY</p>
          <p className="text-4xl bg-black text-custom-white text-center">[[ongoing updates;;]]</p>
        </div>

        <div className="absolute pr-18 pb-66 rotate-90 text-[55px]/13 fade-up">
          <p className="">RESEARCH</p>
          <p>INTERESTS</p>
        </div>

        <div className="drop-shadow-[0px_0px_0.3px_rgba(0,0,0,1)]">
          <div className="text-right pr-30 pb-15 text-[24px]/6.5">
            <div className="fade-up">
              <p>HUMAN-COMPUTER </p>
              <p className="text-left">INTERACTION//</p>
            </div>

            <div className="fade-up">
              <p>ARTIFICIAL</p>
              <p>INTELLIGENCE//</p>
            </div>

            <div className="text-left fade-up">
              <p>AFFECTIVE </p>
              <p>COMPUTING//</p>
            </div>

            <div className="fade-up">
              <p>HEALTH</p>
              <p>INFORMATICS//</p>
            </div>

            <div className="text-left fade-up">
              <p>COGNITIVE </p>
              <p>IMPAIRMENTS//</p>
            </div>

            <div className="fade-up">
              <p>USER INTERFACE</p>
              <p>AND DESIGN//</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-30 mb-30 border-outline-black fade-up">
        <div className="flex justify-center font-[family-name:var(--font-arimo)] font-thin not-italic text-[250px]">
          <div className="relative box-content overflow-visible bg-black border border-outline-black h-[450px] w-[320px] mr-2">
            <span className="absolute font-[family-name:var(--font-bodoni-moda)] top-[-230] left-[-120]"> + </span>
            <span className="absolute font-[family-name:var(--font-bodoni-moda)] bottom-[-250] left-[-120]"> + </span>
            <p className="absolute bottom-10 left-10 text-custom-white text-[20px] cursor-pointer transition-transform duration-[600ms] ease-in-out hover:scale-[1.05] hover:drop-shadow-[0px_0px_2.5px_rgba(236,236,236,1)]">
              PERSONA-BASED <br />
              CHATBOTS AS <br />
              COGNITIVE <br />
              STIMULATION FOR <br />
              DEMENTIA PATIENTS <br />
              (ONGOING) <br />
            </p>
          </div>

          <div className="relative box-content bg-black border border-outline-black h-[450px] w-[320px] mr-2">
            <p className="absolute bottom-10 left-10 text-custom-white text-[20px] cursor-pointer transition-transform duration-[600ms] ease-in-out hover:scale-[1.05] hover:drop-shadow-[0px_0px_2.5px_rgba(236,236,236,1)]">
              REMOTE <br />
              PHOTOPLETHY-<br />
              SMOGRAPHY <br />
              SMART MIRROR <br />
              FOR VITAL <br />
              MONITORING <br />
              (ONGOING)<br />
            </p>
          </div>

          <div className="relative box-content bg-black border border-outline-black h-[450px] w-[320px] mr-2">
            <span className="absolute font-[family-name:var(--font-bodoni-moda)] top-[-230] right-[-120]"> + </span>
            <span className="absolute font-[family-name:var(--font-bodoni-moda)] bottom-[-230] right-[-120]"> + </span>
            <p className="absolute bottom-10 left-10 text-custom-white text-[20px] cursor-pointer transition-transform duration-[600ms] ease-in-out hover:scale-[1.05] hover:drop-shadow-[0px_0px_2.5px_rgba(236,236,236,1)]">
              TOWARDS A <br />
              PILOT FRAMEWORK <br />
              FOR SYNTHETIC <br />
              HEALTH DATA <br />
              GENERATION <br />
            </p>
          </div>
        </div>
      </div>
    </div>      
  );
}