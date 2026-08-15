export function HexBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_35%,color-mix(in_oklch,var(--primary),transparent_88%),transparent_70%)]" />

      {/* Drifting hexagon grid */}
      <svg
        className="absolute -inset-x-1/4 -inset-y-1/4 h-[150%] w-[150%] opacity-[0.14]"
        style={{ animation: 'hex-drift 40s linear infinite' }}
      >
        <defs>
          <pattern
            id="hex-grid"
            width="56"
            height="97"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(1)"
          >
            <path
              d="M28 0 56 16 56 48 28 64 0 48 0 16Z"
              fill="none"
              stroke="var(--primary)"
              strokeWidth="1"
            />
            <path
              d="M28 32 56 48 56 80 28 96 0 80 0 48Z"
              fill="none"
              stroke="var(--primary)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex-grid)" />
      </svg>

      {/* Secondary slower, larger drift layer for depth */}
      <svg
        className="absolute -inset-x-1/4 -inset-y-1/4 h-[150%] w-[150%] opacity-[0.08]"
        style={{ animation: 'hex-drift 70s linear infinite reverse' }}
      >
        <defs>
          <pattern
            id="hex-grid-lg"
            width="112"
            height="194"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M56 0 112 32 112 96 56 128 0 96 0 32Z"
              fill="none"
              stroke="var(--primary)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex-grid-lg)" />
      </svg>

      {/* Fade to background at edges so the pattern feels integrated */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_45%,transparent_35%,var(--background)_88%)]" />
    </div>
  )
}
