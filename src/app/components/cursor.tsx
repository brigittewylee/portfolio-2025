import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isOverBlack, setIsOverBlack] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
		setPosition({ x: e.clientX, y: e.clientY });

		const el = document.elementFromPoint(e.clientX, e.clientY);
		
		if (el) {
			const bg = window.getComputedStyle(el).backgroundColor
			const color = window.getComputedStyle(el).color

			console.log("element", el)
			console.log("bg", bg)
			console.log("text", color)
			console.log("text correct", color.trim() ==="rgb(0,0,0)")
			console.log("bg correct", bg.trim() === "rgb(0,0,0)")

			if (color === "rgb(0,0,0)" || bg === "rgb(0,0,0)") {
				setIsOverBlack(true);
			}
			else {
				setIsOverBlack(false);
			}
		}

		if (cursorRef.current) {
			gsap.to(cursorRef.current, {
			x: e.clientX-10,
			y: e.clientY-170,  
			duration: 0.5,
			ease: "back.out",
			});
		}
    };

    const click = () => {
        if (cursorRef.current) {
            gsap.to(cursorRef.current, {
                scale: 2,
                duration: 0.15,
                ease: "power3.out",
                onComplete: () => {
                gsap.to(cursorRef.current, {
                    scale: 1,
                    duration: 0.15,
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
		className="fixed w-5 h-5 rounded-full pointer-events-none z-[9999]"
		style={{
			backgroundColor: isOverBlack ? "#ececec" : "black",
		}}
	/>
  );
}
