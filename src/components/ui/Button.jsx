import { motion } from "framer-motion";
import { SPRING_MICRO } from "../../lib/motion";

export function Button({ children, href, variant = "primary", icon: Icon, className = "", ...props }) {
  const Component = href ? motion.a : motion.button;
  const base =
    "group relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-tight";

  if (variant === "primary") {
    return (
      <Component
        href={href}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        transition={SPRING_MICRO}
        className={`${base} bg-fg text-bg transition-[background-color,box-shadow] duration-300 hover:bg-white hover:shadow-glow-hover ${className}`}
        {...props}
      >
        {children}
        {Icon && <Icon size={16} />}
      </Component>
    );
  }

  return (
    <Component
      href={href}
      whileTap={{ scale: 0.98 }}
      className={`${base} border border-border text-fg transition-colors duration-300 hover:border-border-hover ${className}`}
      {...props}
    >
      <span className="relative">
        {children}
        <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-fg transition-transform duration-300 group-hover:scale-x-100" />
      </span>
      {Icon && <Icon size={16} />}
    </Component>
  );
}
