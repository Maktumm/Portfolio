"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useAnimate,
} from "motion/react";

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [hideText, setHideText] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, {
    stiffness: 500,
    damping: 40,
    mass: 0.5,
  });

  const y = useSpring(mouseY, {
    stiffness: 500,
    damping: 40,
    mass: 0.5,
  });

  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    document.documentElement.classList.add("custom-cursor");

    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    const getCursorTarget = (target: EventTarget | null) => {
      if (!(target instanceof Element)) return null;

      return target.closest<HTMLElement>(
        '[data-cursor="click"], [data-cursor="hide"]'
      );
    };

    const handleMouseOver = (event: MouseEvent) => {
      const element = getCursorTarget(event.target);

      if (!element) return;

      const related = event.relatedTarget;

      if (
        related instanceof Element &&
        element.contains(related)
      ) {
        return;
      }

      const cursorType = element.getAttribute("data-cursor");

      if (cursorType === "hide") {
        setIsHidden(true);
      } else {
        setHovered(true);
        setHideText(element.getAttribute("name") === "hide");
      }
    };

    const handleMouseOut = (event: MouseEvent) => {
      const element = getCursorTarget(event.target);

      if (!element) return;

      const related = event.relatedTarget;

      if (
        related instanceof Element &&
        element.contains(related)
      ) {
        return;
      }

      setHovered(false);
      setHideText(false);
      setIsHidden(false);
    };

    const handleClick = async (event: MouseEvent) => {
      const element = getCursorTarget(event.target);

      if (!element || element.getAttribute("data-cursor") === "hide") return;

      await animate(
        scope.current,
        { scale: 0.88 },
        {
          duration: 0.1,
          ease: "easeOut",
        }
      );

      await animate(
        scope.current,
        { scale: 1.06 },
        {
          duration: 0.18,
          ease: "easeOut",
        }
      );

      await animate(
        scope.current,
        { scale: 1 },
        {
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }
      );
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("click", handleClick);

    return () => {
      document.documentElement.classList.remove("custom-cursor");

      window.removeEventListener("mousemove", handleMouseMove);

      document.removeEventListener(
        "mouseover",
        handleMouseOver
      );

      document.removeEventListener(
        "mouseout",
        handleMouseOut
      );

      document.removeEventListener(
        "click",
        handleClick
      );
    };
  }, [mouseX, mouseY, animate, scope]);

  return (
    <motion.div
      ref={scope}
      aria-hidden="true"
      className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-[99999]

        flex
        items-center
        justify-center

        rounded-full

        bg-white
        text-black

        mix-blend-difference

        will-change-transform
      "
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
      }}
      initial={false}
      animate={{
        width: isHidden ? 0 : hovered ? 80 : 12,
        height: isHidden ? 0 : hovered ? 40 : 12,
        opacity: isHidden ? 0 : 1,
        scale: isHidden ? 0 : 1,
      }}
      transition={{
        width: {
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1],
        },
        height: {
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1],
        },
        opacity: {
          duration: 0.25,
        },
        scale: {
          duration: 0.25,
        },
      }}
    >
      <motion.span
        className="
          pointer-events-none
          select-none
          whitespace-nowrap
          text-[19px]
          
          uppercase
          tracking-[.01em]
          font-extrabold
        "
        initial={false}
        animate={{
          opacity: hovered && !hideText ? 1 : 0,
          scale: hovered && !hideText ? 1 : 0.7,
          rotate: 0 
        }}
        transition={{
          
          
        }}
      >
        Click
      </motion.span>
    </motion.div>
  );
}