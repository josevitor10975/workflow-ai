const particles = Array.from({ length: 18 }, (_, index) => index + 1);

export function AuthParticles() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[52%] overflow-hidden"
    >
      {particles.map((particle) => (
        <span
          key={particle}
          className={`auth-particle auth-particle-${particle}`}
        />
      ))}
    </div>
  );
}
