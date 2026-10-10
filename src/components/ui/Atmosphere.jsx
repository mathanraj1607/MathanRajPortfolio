export function Atmosphere() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-atmosphere-gradient" />
      <div className="absolute inset-0 bg-grain opacity-[0.05] mix-blend-screen" />
      <div className="absolute left-1/3 top-1/4 h-[42rem] w-[42rem] rounded-full bg-white/[0.07] blur-[120px] animate-drift-slowest" />
      <div className="absolute right-1/4 bottom-0 h-[38rem] w-[38rem] rounded-full bg-white/[0.05] blur-[120px] animate-drift-slow" />
    </div>
  );
}
