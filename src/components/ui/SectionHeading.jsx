import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../../lib/motion";

export function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const alignClass = align === "center" ? "mx-auto text-center" : "";

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={`max-w-2xl ${alignClass}`}
    >
      {eyebrow && (
        <p className="mb-4 text-xs font-medium uppercase tracking-eyebrow text-fg-subtle">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-fg-muted">{description}</p>}
    </motion.div>
  );
}
