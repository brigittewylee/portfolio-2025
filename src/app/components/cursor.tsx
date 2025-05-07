import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef<HTMLDivElement>(null);
  

  useEffect(() => {
    const move = (e: MouseEvent) => {
		setPosition({ x: e.clientX, y: e.clientY });

		if (cursorRef.current) {
			gsap.to(cursorRef.current, {
			x: e.clientX-15,
			y: e.clientY-175,  
			duration: 0.7,
			ease: "power2.out",
			});
		}
    };

    const click = () => {
        if (cursorRef.current) {
            gsap.to(cursorRef.current, {
                scale: 2,
                duration: 0.25,
                ease: "power3.out",
                onComplete: () => {
                gsap.to(cursorRef.current, {
                    scale: 1,
                    duration: 0.25,
                    ease: "power3.out",
                });
            },
        });
        }
    };
      

    document.addEventListener("mousemove", move);
    document.addEventListener("mousedown", click);

    return () => {
		document.removeEventListener("mousemove", move);
		document.removeEventListener("mousedown", click);
		};
	}, []);

  return (
    <div
		ref={cursorRef}
		className="fixed w-7 h-7 rounded-full pointer-events-none z-[9999] border border-2 border-custom-white bg-black"
	/>
  );
}
