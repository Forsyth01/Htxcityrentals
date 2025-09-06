// ScrollProvider.jsx
import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default function ScrollProvider({ children }) {
  const scrollRef = useRef(null);
  const locoScroll = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    // Initialize LocomotiveScroll
    locoScroll.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 0.5, // slower scroll speed
      lerp: 0.08,      // smooth interpolation
      smartphone: { smooth: true },
      tablet: { smooth: true },
    });

    // Start at top on load
    locoScroll.current.scrollTo(0, { duration: 0, disableLerp: true });

    return () => {
      if (locoScroll.current) locoScroll.current.destroy();
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      data-scroll-container
      style={{ overflow: "hidden" }}
    >
      {children}
    </div>
  );
}
