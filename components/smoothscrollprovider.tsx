// app/SmoothScrollProvider.tsx
"use client";
import { ReactLenis } from '@studio-freight/react-lenis';

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.055, duration:1.9, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}