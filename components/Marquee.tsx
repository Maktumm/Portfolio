"use client";

import { useRef, ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Marquee({
  children,
  speed = 40,
  direction = "left",
  className,
}: {
  children: ReactNode;
  speed?: number;
  direction?: "left" | "right";
  className?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!trackRef.current) return;
    const track = trackRef.current;
    const distance = track.scrollWidth / 2;

    const tween = gsap.fromTo(
      track,
      { x: direction === "left" ? 0 : -distance },
      {
        x: direction === "left" ? -distance : 0,
        duration: speed,
        ease: "none",
        repeat: -1,
      }
    );

    return () => {
      tween.kill();
    };
  }, [speed, direction]);

  return (
    <div className={`overflow-hidden ${className ?? ""}`}>
      <div ref={trackRef} className="flex w-max items-center">
        {children}
        {children}
      </div>
    </div>
  );
}
