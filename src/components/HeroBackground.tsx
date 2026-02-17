"use client";

import { useEffect, useState } from "react";

export default function HeroBackground() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const smallScreen = window.matchMedia("(max-width: 640px)");

    const update = () => {
      setShowVideo(!reducedMotion.matches && !smallScreen.matches);
    };

    update();

    reducedMotion.addEventListener("change", update);
    smallScreen.addEventListener("change", update);

    return () => {
      reducedMotion.removeEventListener("change", update);
      smallScreen.removeEventListener("change", update);
    };
  }, []);

  if (!showVideo) {
    return <div aria-hidden className="pointer-events-none fixed inset-0 -z-20 bg-background" />;
  }

  return (
    <video
      aria-hidden
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      className="pointer-events-none fixed inset-0 -z-20 h-screen w-screen object-cover object-center"
    >
      <source src="/herobg2.mp4" type="video/mp4" />
    </video>
  );
}
