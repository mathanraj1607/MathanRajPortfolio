import { useRef } from "react";
import { useScroll } from "framer-motion";

export function useScrollProgress() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return { ref, scrollYProgress };
}
