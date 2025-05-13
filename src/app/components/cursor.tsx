import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { rgba } from "framer-motion";

type CursorProps = {
  headerRef: React.RefObject<HTMLDivElement>;
};

export default function Cursor({headerRef}: CursorProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const move = (e: MouseEvent) => {
		setPosition({ x: e.clientX, y: e.clientY });

		if (cursorRef.current) {
			gsap.to(cursorRef.current, {
			x: e.clientX-15,
			y: e.clientY-255,  
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
    
    const handleHover = (e: MouseEvent) => {
      if (!cursorRef.current || !headerRef.current) return;
      
      const rect = headerRef.current.getBoundingClientRect();
      const inHeader =
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom &&
        e.clientX >= rect.left &&
        e.clientX <= rect.right;

      if (inHeader) {
        gsap.to(cursorRef.current, {
          scale: 0.3, 
          duration: 0.3,
          backgroundColor: "rgba(0,0,0,0)",
          borderColor: "rgb(0,0,0)",
          borderWidth: "8px",
        });
      } else {
        gsap.to(cursorRef.current, {
          scale: 1,  
          duration: 0.3,
          backgroundColor: "rgb(0,0,0)",
          borderColor: "#ececec",
          borderWidth: "4px",
        });
      }
    };

    document.addEventListener("mousemove", move);
    document.addEventListener("mousedown", click);
    document.addEventListener("mousemove", handleHover); 

    return () => {
		document.removeEventListener("mousemove", move);
		document.removeEventListener("mousedown", click);
    document.removeEventListener("mousemove", handleHover);
		};
	}, [headerRef]);

  return (
    <div
		ref={cursorRef}
		className="fixed w-7 h-7 rounded-full pointer-events-none z-[9999] border border-2 border-custom-white bg-black"/>
  );
}
