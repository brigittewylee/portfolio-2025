
import Image from 'next/image'; 

export default function General() {
	const images = [
		'/images/holiday.JPG',
		'/images/pottery.JPG',
		'/images/season.JPG',
		'/images/baking.JPG',
	  ];
  	return (
    <div>
		<div className="flex">
			<div className="flex flex-wrap justify-between gap-2 px-4">
			{images.map((src, index) => (
			<div
			key={index}
			className="w-[calc(25%-0.5rem)] overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105"
			>
				<Image
				src={src}
				alt={`Image ${index + 1}`}
				width={400}
				height={300}
				className="w-full h-auto object-cover"
				/>
			</div>
			))}
			</div>
		</div>
        <section className="flex flex-col font-[family-name:var(--font-arimo)] font-bold drop-shadow-[0px_0px_0.9px_rgba(0,0,0,1)]">
			<div className="text-[150px] flex-1 p-4 text-left fade-up">
				GENERAL +
			</div>
			<div className="flex flex-row">
				<div className="w-1/2"></div>
				<div className="w-1/2 text-[25.6px]/7">
				<div className="p-1 text-right font-semibold fade-up">
					<div className="fade-up">
						<p className="text-left">I&apos;M BRIGITTE, A MSC HEALTH SCIENCE STUDENT AT UW.</p>
						<p className="text-left">MY WORK LIVES AT THE 
							<span className="font-bold italic"> INTERSECTION. </span>
							<span className="float-right">IT&apos;S WHERE</span></p>
						<p className="text-left"> THE STRUCTURE OF SCIENCE MEETS</p>                           
						<p className="text-left pb-8">THE FLUIDITY OF DESIGN AND TECHNOLOGY.</p>         
					</div>
					<div className="fade-up">
						<p className="pr-1">I&apos;M DRAWN TO THE SPACES WHERE </p>
						<p className="pr-1.5">CODE BECOMES EXPRESSION, AND </p>
						<p className="pb-8">DESIGN BECOMES A WAY TO SOLVE. </p>
					</div>
					<div className="fade-up">
						<p className="text-left">TO ME, HEALTH AND TECHNOLOGY ARE DRIVERS TO A </p>
						<p className="text-left"> FUTURE OF POSITIVE CHANGE.
							<span className="float-right"> THEIR OVERLAP</span> </p>
						<p className="text-left">IS WHERE WE BEGIN TO 
							<span className="font-bold italic"> DESIGN SOLUTIONS</span> </p>
						<p className="text-right font-bold italic">THAT CARE AS MUCH AS THEY INNOVATE.</p>
					</div>
				</div>
				</div>
			</div>
			</section>
		</div>
	)
	};