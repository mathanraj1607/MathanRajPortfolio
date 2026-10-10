import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { TestimonialCard } from "../ui/TestimonialCard";
import { testimonials } from "../../data/testimonials";
import { staggerContainer, viewportOnce } from "../../lib/motion";

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 px-6 pt-section-sm sm:pt-section">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Client Work" title="What clients say" align="center" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid gap-card-gap sm:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
