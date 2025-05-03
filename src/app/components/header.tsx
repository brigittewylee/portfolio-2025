import Clock from "@/app/components/clock";
import { useEffect, useState } from "react";


export default function Header() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const toggleModal = () => setIsModalOpen(!isModalOpen);
	const closeModal = () => setIsModalOpen(false);

	useEffect(() => {
		if (isModalOpen) {
		  document.body.style.overflow = "hidden";
		} else {
		  document.body.style.overflow = "";
		}
	
		return () => {
		  document.body.style.overflow = "";
		};
	  }, [isModalOpen]);

    return (
    <div className="fixed w-screen top-0 z-[9999] bg-custom-white">
		<section className="flex text-m font-[family-name:var(--font-arimo)] font-bold">
			<div className="flex-1 p-4 text-left">
				<div className="text-m/0">
					<p>SITUATED IN</p>
					<p className="mt-[-10px]">TORONTO, ON</p> 
    			</div>
          	</div>
			<div className="flex-1 p-4 text-center flex items-center justify-center">
				<Clock />
			</div>
			<button onClick={toggleModal} className="flex-1 p-4 mr-4 text-right">
				NAVIGATE
			</button>
        </section>

		{isModalOpen && (
		<div>
			<div className="fixed inset-0 bg-black flex flex-col items-stretch justify-center font-[family-name:var(--font-urbanist)] pl-20 pr-20">
				<button onClick={closeModal} className="absolute top-15 right-15 text-5xl font-normal text-custom-white">
					[close]
				</button>
				<ul className="text-custom-white font-bold text-8xl">
					<li>
						<a href="#landing" onClick={closeModal} className="flex justify-between w-full">
							<span className="text-right">01</span>
							<span className="text-left">LANDING</span>
						</a>
					</li>
					<hr className="border-t-2 border-custom-white"/>

					<li>
						<a href="#general" onClick={closeModal} className="flex justify-between w-full">
							<span className="text-right">02</span>
							<span className="text-left">ABOUT ME</span>
						</a>
					</li>
					<hr className="border-t-2 border-custom-white"/>

					<li>
						<a href="#work" onClick={closeModal} className="flex justify-between w-full">
							<span className="text-right">03</span>
							<span className="text-left">PROJECTS</span>
						</a>
					</li>
					<hr className="border-t-2 border-custom-white"/>

					<li>
						<a href="#design" onClick={closeModal} className="flex justify-between w-full">
							<span className="text-right">04</span>
							<span className="text-left">SITE DESIGN</span>
						</a>
					</li>
					<hr className="border-t-2 border-custom-white"/>

					<li>
						<a href="#contact" onClick={closeModal} className="flex justify-between w-full">
							<span className="text-right">05</span>
							<span className="text-left">CONTACT</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
      	)}

        <hr className="border-t-2 border-black"/>
    </div>
    )
};