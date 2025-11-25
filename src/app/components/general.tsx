import Image from 'next/image';
import { useState } from 'react';

export default function General() {
	const [showImage, setShowImage] = useState(false);
	return(
    <div>
		<div className="flex justify-start fade-up w-full"> 
			<div className="text-[150px] font-bold p-4 text-left">GENERAL</div>
			<div className={`text-[150px] font-bold p-4 text-left cursor-pointer cursor-pointer transition-transform duration-[600ms] ease-in-out hover:scale-[1.25] hover:rotate-180 transition-all ${!showImage ? 'animate-pulse duration-25' : ''}`}
				onClick={() => setShowImage(!showImage)}>
					 +
			</div>			
		</div>

		<section className="font-[family-name:var(--font-arimo)] font-bold ">
			<div className="flex flex-row">
				<div className={`w-3/5 flex justify-end p-2 pr-5 transition-opacity duration-500 ${showImage ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
				<Image
					src="/images/cherryblossom.JPG"
					alt="season"
					width={490}
					height={500}
				/>
				</div>
				<div className="text-[25.6px]/7 p-1 text-right font-semibold drop-shadow-[0px_0px_0.9px_rgba(0,0,0,1)] fade-up">
					<div className="fade-up text-left">
						<p>I&apos;M BRIGITTE, A MMATH CS </p>
						<p> STUDENT AT THE UNIVERSITY OF  </p>
						<p>WATERLOO. MY WORK LIVES AT THE </p>
						<p><span className="font-bold italic"> INTERSECTION </span> OF SCIENCE, DESIGN</p>
						<p>AND TECHNOLOGY. IT BRIDGES </p>                           
						<p>EVIDENCE-BASED APPROACHES W/</p>
						<p className="pb-8">THOUGHTFUL INTUITIVE DESIGN.</p>          
					</div>
					<div className="fade-up text-left">
						<p className="pr-1">I&apos;M DRAWN TO THE SPACES WHERE </p>
						<p className="pr-1.5">CODE BECOMES EXPRESSION, AND </p>
						<p className="pb-8">DESIGN BECOMES A WAY TO SOLVE. </p>
					</div>
					<div className="fade-up text-left">
						<p>TO ME, HEALTH AND TECHNOLOGY   </p>
						<p>ARE DRIVERS TO A FUTURE OF </p>
						<p>POSITIVE CHANGE. THEIR OVERLAP </p>
						<p>IS WHERE WE BEGIN TO<span className="font-bold"> DESIGN </span> </p> 
						<p className="font-bold"> SOLUTIONS THAT CARE AS MUCH </p>
						<p className="font-bold"> AS THEY INNOVATE.</p>
					</div>
				</div>
			</div>
		</section>
		</div>
	)
};