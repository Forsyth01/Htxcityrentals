import React, { useEffect, useRef } from "react";
import Scrollbar from "smooth-scrollbar";
import { useLocation } from "react-router-dom";

// Exported ref so other components can control scrolling
export const scrollbarRef = React.createRef();

const SmoothScrollWrapper = ({ children, damping = 0.03 }) => {
  const scrollRef = useRef();
  const location = useLocation();

  useEffect(() => {
    const scrollbar = Scrollbar.init(scrollRef.current, {
      damping,
      thumbMinSize: 20,
      renderByPixels: true,
      alwaysShowTracks: false,
      continuousScrolling: true,
    });

    scrollbarRef.current = scrollbar;

    // Handle hash links
    const handleHashLinks = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const hash = target.getAttribute("href");
        const element = document.querySelector(hash);

        if (element) {
          const rect = element.getBoundingClientRect();
          const scrollTop = scrollbar.scrollTop;
          scrollbar.scrollTo(0, scrollTop + rect.top, 800);
        }
      }
    };

    document.addEventListener("click", handleHashLinks);

    return () => {
      document.removeEventListener("click", handleHashLinks);
      scrollbar.destroy();
    };
  }, [damping]);

  // Reset scroll to top on route change
  useEffect(() => {
    if (scrollbarRef.current) {
      scrollbarRef.current.scrollTo(0, 0, 0);
    }
  }, [location]);

  return (
    <div
      ref={scrollRef}
      style={{
        height: "100vh",
        width: "100%",
      }}
    >
      <div style={{ minHeight: "100vh" }}>{children}</div>
    </div>
  );
};

export default SmoothScrollWrapper;
