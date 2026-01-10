"use client";

// 🌌🪐 Cosmic Desert Theme Colors
const COLORS = {
  desert: {
    fire: "#F47A1F",
    ember: "#FFB85C",
  },
};

export const SectionDivider = () => {
  return (
    <div className="relative h-12 overflow-hidden pointer-events-none">
      <svg
        viewBox="0 0 1440 60"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
      >
        {/* موجة رملية خفيفة */}
        <path
          d="M0,32 C240,50 480,14 720,22 960,30 1200,50 1440,32"
          fill="none"
          stroke={COLORS.desert.fire}
          strokeWidth="1.2"
          opacity="0.45"
        />

        {/* Glow subtle */}
        <path
          d="M0,32 C240,50 480,14 720,22 960,30 1200,50 1440,32"
          fill="none"
          stroke={COLORS.desert.ember}
          strokeWidth="2.5"
          opacity="0.15"
        />
      </svg>
    </div>
  );
};
