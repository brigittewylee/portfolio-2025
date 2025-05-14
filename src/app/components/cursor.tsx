import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

type CursorProps = {
  headerRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
};

export default function Cursor({headerRef, contactRef}: CursorProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef<HTMLDivElement>(null);
  const baseScale = useRef(1);
  

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
        const scale = baseScale.current;
        gsap.to(cursorRef.current, {
          scale: scale*2,
          duration: 0.25,
          ease: "power3.out",
          onComplete: () => {
            gsap.to(cursorRef.current!, {
              scale: scale,
              duration: 0.25,
              ease: "power3.out",
            });
          },
        });
      }
    };
    
    const handleHover = (e: MouseEvent) => {
      if (!cursorRef.current) return;
    
      const headerRect = headerRef.current?.getBoundingClientRect();
      const contactRect = contactRef.current?.getBoundingClientRect();
      
      const inHeader =
        headerRect &&
        e.clientY >= headerRect.top &&
        e.clientY <= headerRect.bottom &&
        e.clientX >= headerRect.left &&
        e.clientX <= headerRect.right;

      const inContact =
        contactRect &&
        e.clientY >= contactRect.top &&
        e.clientY <= contactRect.bottom &&
        e.clientX >= contactRect.left &&
        e.clientX <= contactRect.right;

      console.log({ inHeader, inContact });
      if (inHeader) {
        baseScale.current = 0.3;
        gsap.to(cursorRef.current, {
          scale: 0.3, 
          duration: 0.3,
          backgroundColor: "rgba(0,0,0,0)",
          borderColor: "rgb(0,0,0)",
          borderWidth: "4px",
        });
      } else if (inContact) {
        baseScale.current = 0.3;
        gsap.to(cursorRef.current, {
          scale: 0.3, 
          duration: 0.3,
          backgroundColor: "rgba(0,0,0,0)",
          borderColor: "#ececec",
          borderWidth: "4px",
        });
      } else {
        baseScale.current = 1;
        gsap.to(cursorRef.current, {
          scale: 1,  
          duration: 0.3,
          backgroundColor: "rgb(0,0,0)",
          borderColor: "#ececec",
          borderWidth: "2px",
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
	}, [headerRef, contactRef]);

  return (
    <div
		ref={cursorRef}
		className="fixed w-7 h-7 rounded-full pointer-events-none z-[9999] border border-2 border-custom-white bg-black">
    </div>
  );
}
