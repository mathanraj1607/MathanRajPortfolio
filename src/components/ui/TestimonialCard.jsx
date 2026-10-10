import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { fadeScale, SPRING_MICRO } from "../../lib/motion";

export function TestimonialCard({ testimonial }) {
  return (
    <motion.figure
      variants={fadeScale}
      whileHover={{ y: -4 }}
      transition={SPRING_MICRO}
      className="group flex flex-col justify-between rounded-2xl border border-border bg-bg-elevated p-6 shadow-card transition-shadow duration-300 hover:border-border-hover hover:shadow-glow-hover"
    >
      <Quote
        className="mb-4 text-fg-decorative transition-colors duration-300 group-hover:text-fg-subtle"
        size={24}
        aria-hidden="true"
      />
      <blockquote className="text-fg-muted">&ldquo;{testimonial.quote}&rdquo;</blockquote>
      <figcaption className="mt-6 text-sm">
        <span className="block font-medium text-fg">{testimonial.name}</span>
        <span className="text-fg-subtle">
          {testimonial.role}, {testimonial.company}
        </span>
      </figcaption>
    </motion.figure>
  );
}
