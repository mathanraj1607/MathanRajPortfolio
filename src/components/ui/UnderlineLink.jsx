export function UnderlineLink({ href, children, muted = false, className = "", ...props }) {
  return (
    <a
      href={href}
      className={`group relative text-sm ${
        muted ? "text-fg-subtle" : "text-fg-muted"
      } transition-colors duration-300 hover:text-fg ${className}`}
      {...props}
    >
      {children}
      <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-fg transition-transform duration-300 group-hover:scale-x-100" />
    </a>
  );
}
