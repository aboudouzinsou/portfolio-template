"use client";
import { useEffect, useState } from "react";

export default function Background() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (isMobile) return null;

  return (
    <div className="fixed inset-0 -z-10 opacity-30">
      <iframe
        src="https://my.spline.design/animatedbackgroundgradientforweb-hd11sYR7BunVgWa2z1eM3nQl/"
        className="w-full h-full"
        loading="lazy"
        allow="autoplay; fullscreen"
        style={{
          pointerEvents: "none",
          border: "none",
          filter: "blur(2px)",
        }}
      />
    </div>
  );
}
