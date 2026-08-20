// app/SmoothScrollProvider.tsx
"use client";
import { ReactLenis } from '@studio-freight/react-lenis';
import { useEffect, useState } from 'react';

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      // Adjust the breakpoint (768px) to your preferred mobile/tablet cutoff
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // If on mobile, bypass Lenis and render native scroll
  if (isMobile) {
    return <>{children}</>;
  }

  return (
    <ReactLenis root options={{ lerp: 0.055, duration: 1.9, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}