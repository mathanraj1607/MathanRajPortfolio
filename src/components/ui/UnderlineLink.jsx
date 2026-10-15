import { Button } from "./Button";

export function UnderlineLink({ href, children, muted = false, className = "", ...props }) {
  // Ignore muted prop to match resume button style; you can adjust if needed.
  return (
    <Button variant="secondary" href={href} className={className} {...props}>
      {children}
    </Button>
  );
}
