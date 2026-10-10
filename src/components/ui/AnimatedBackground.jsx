export function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute left-1/4 top-0 h-[36rem] w-[36rem] rounded-full bg-white/10 blur-[100px] animate-drift-slow" />
      <div className="absolute right-0 top-1/3 h-[30rem] w-[30rem] rounded-full bg-white/8 blur-[100px] animate-drift-slower" />
      <div className="absolute bottom-0 left-1/3 h-[28rem] w-[28rem] rounded-full bg-white/6 blur-[100px] animate-drift-slowest" />
    </div>
  );
}
