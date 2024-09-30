"use client";

import { useEffect, useState } from "react";

export function useScroll() {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  useEffect(() => {
    const controlHeader = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(currentScrollY);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY <= 50) {
        setIsVisible(true);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlHeader);
      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("scroll", controlHeader);
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [lastScrollY]);

  return { isVisible };
}
