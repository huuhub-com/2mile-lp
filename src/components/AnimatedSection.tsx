"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  axis?: "y" | "x";
  distance?: number;
  threshold?: number;
};

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  duration = 700,
  axis = "y",
  distance = 16,
  threshold = 0.2,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  const hiddenTransform = axis === "x" ? `translateX(-${distance}px)` : `translateY(${distance}px)`;

  const style: CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? "translate(0, 0)" : hiddenTransform,
    transitionProperty: "opacity, transform",
    transitionTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
  };

  return (
    <div ref={ref} style={style} className={className} data-visible={visible}>
      {children}
    </div>
  );
}
