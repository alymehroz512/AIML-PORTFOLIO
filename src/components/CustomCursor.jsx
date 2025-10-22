import React, { useEffect, useRef, useState } from "react";
import "../styles/CustomCursor.css";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const cursorFRef = useRef(null);

  const [clicked, setClicked] = useState(false);

  // store target mouse position
  const pos = useRef({ x: -30, y: -30 });
  const cursorPos = useRef({ x: -30, y: -30 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    const lerp = (start, end, t) => start * (1 - t) + end * t;

    const animate = () => {
      cursorPos.current.x = lerp(cursorPos.current.x, pos.current.x, 0.2);
      cursorPos.current.y = lerp(cursorPos.current.y, pos.current.y, 0.2);

      if (cursorRef.current) {
        cursorRef.current.style.left = `${pos.current.x - 4}px`;
        cursorRef.current.style.top = `${pos.current.y - 4}px`;
      }

      if (cursorFRef.current) {
        cursorFRef.current.style.left = `${cursorPos.current.x - 15}px`;
        cursorFRef.current.style.top = `${cursorPos.current.y - 15}px`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <>
      <div className={`cursor ${clicked ? "clicked" : ""}`} ref={cursorRef}>
        <div className="cursor-f" ref={cursorFRef}></div>
      </div>
    </>
  );
};

export default CustomCursor;
