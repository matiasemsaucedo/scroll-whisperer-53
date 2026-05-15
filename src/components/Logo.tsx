export function Logo({ className = "", variant = "filled" }: { className?: string; variant?: "filled" | "outline" }) {
  const bg = variant === "filled" ? "var(--rose-deep)" : "transparent";
  const stroke = variant === "filled" ? "white" : "var(--rose-deep)";
  const text = variant === "filled" ? "white" : "var(--rose-deep)";
  return (
    <svg viewBox="0 0 200 200" className={className} aria-label="Luz Patisserie">
      <circle cx="100" cy="100" r="96" fill={bg} stroke={stroke} strokeWidth={variant === "outline" ? 2 : 0} />
      <g fill="none" stroke={stroke} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M55 95 C55 115, 70 125, 85 120 L100 110" />
        <path d="M95 70 C95 95, 100 115, 110 125 C118 132, 125 125, 122 115 C118 105, 105 110, 100 120" />
        <path d="M120 105 C130 95, 140 100, 138 112 C137 122, 125 122, 120 115" />
        <path d="M138 112 Q148 108, 152 100" />
        <circle cx="135" cy="80" r="3" fill={stroke} stroke="none" />
        <path d="M132 78 L138 78 M135 75 L135 81" />
      </g>
      <text x="100" y="160" textAnchor="middle" fill={text} fontSize="14" letterSpacing="4" fontFamily="serif">PATISSERIE</text>
    </svg>
  );
}
