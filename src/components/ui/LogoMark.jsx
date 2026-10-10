export function LogoMark({ className = "" }) {
  return (
    <img
      src="/favicon.svg"
      alt=""
      aria-hidden="true"
      className={`grayscale contrast-125 brightness-125 ${className}`}
    />
  );
}
