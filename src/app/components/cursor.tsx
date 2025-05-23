import { useEffect, useRef } from "react";
import gsap from "gsap";

type CursorProps = {
  headerRef: React.RefObject<HTMLDivElement | null>;
  footerRef: React.RefObject<HTMLDivElement | null>;
  headerVariant?: "default" | "alt";
};

export default function Cursor({ headerRef, footerRef, headerVariant }: CursorProps) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const baseScale = useRef(1);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX - 15,
          y: e.clientY - 255,
          duration: 0.7,
          ease: "power2.out",
        });
      }
    };

    const click = () => {
      if (cursorRef.current) {
        const scale = baseScale.current;
        gsap.to(cursorRef.current, {
          scale: scale * 2,
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
      const footerRect = footerRef.current?.getBoundingClientRect();

      const inHeader =
        headerRect &&
        e.clientY >= headerRect.top &&
        e.clientY <= headerRect.bottom &&
        e.clientX >= headerRect.left &&
        e.clientX <= headerRect.right;

      const inFooter =
        footerRect &&
        e.clientY >= footerRect.top &&
        e.clientY <= footerRect.bottom &&
        e.clientX >= footerRect.left &&
        e.clientX <= footerRect.right;

      if (inHeader) {
        baseScale.current = 0.3;
        const computedStyle = headerRef.current ? window.getComputedStyle(headerRef.current) : null;
        const bgColor = computedStyle?.backgroundColor || "";
        const isHeaderBlack = bgColor.includes("0, 0, 0");

        gsap.to(cursorRef.current, {
          scale: 0.3,
          duration: 0.3,
          backgroundColor: "rgba(0,0,0,0)",
          borderColor: isHeaderBlack ? "#ffffff" : "#000000",
          borderWidth: "4px",
        });
      } else if (inFooter) {
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
  }, [headerRef, footerRef, headerVariant]);

  return (
    <div
      ref={cursorRef}
      className="fixed w-7 h-7 rounded-full pointer-events-none z-[9999]"
      style={{
        backgroundColor: "black",
        border: "2px solid #ececec",
        boxSizing: "border-box",
      }}
    />
  );
}
