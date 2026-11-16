// Animated SVG scenes, one per service. Drawn in code so they stay sharp,
// match the brand palette, and need no image files.
const R = "#ee3159", B = "#6f94e8", G = "#3bd6a0", W = "#cfdcff";
const d = (s) => ({ animationDelay: `${s}s` });

const scenes = {
  software: (
    <>
      {[[30, 40, 150], [50, 62, 110], [50, 84, 170], [70, 106, 90], [50, 128, 130], [30, 150, 60]].map(([x, y, w], i) => (
        <rect key={i} className="v-type" x={x} y={y} width={w} height="10" rx="5" fill={i % 3 === 0 ? R : B} style={d(i * 0.35)} />
      ))}
      <rect x="236" y="30" width="60" height="130" rx="10" fill="none" stroke={B} strokeOpacity=".5" />
      <circle className="v-pulse" cx="266" cy="95" r="14" fill={G} />
    </>
  ),
  enterprise: (
    <>
      {[[70, 50], [250, 50], [60, 160], [260, 165], [160, 25]].map(([x, y], i) => (
        <g key={i}>
          <line className="v-flow" x1="160" y1="100" x2={x} y2={y} stroke={B} strokeWidth="2" strokeDasharray="5 6" style={d(i * 0.2)} />
          <circle cx={x} cy={y} r="14" fill="#10224d" stroke={i % 2 ? R : B} strokeWidth="3" />
        </g>
      ))}
      <circle className="v-pulse" cx="160" cy="100" r="26" fill={R} />
      <circle cx="160" cy="100" r="10" fill="#fff" />
    </>
  ),
  design: (
    <>
      <rect x="40" y="30" width="240" height="26" rx="8" fill={B} opacity=".35" />
      <rect x="40" y="70" width="110" height="90" rx="10" fill={B} opacity=".25" />
      <rect x="164" y="70" width="116" height="40" rx="10" fill={R} opacity=".45" />
      <rect x="164" y="122" width="116" height="38" rx="10" fill={B} opacity=".25" />
      <g className="v-cursor">
        <path d="M0 0 L0 22 L6 17 L11 28 L16 26 L11 15 L19 15 Z" fill="#fff" />
      </g>
    </>
  ),
  qa: (
    <>
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x="50" y={36 + i * 36} width="220" height="26" rx="8" fill="#ffffff" opacity=".07" />
          <rect x="84" y={46 + i * 36} width={110 - i * 14} height="7" rx="3.5" fill={W} opacity=".6" />
          <circle cx="68" cy={49 + i * 36} r="9" fill={i === 2 ? R : G} className="v-pop" style={d(i * 0.7)} />
          <path d={i === 2 ? `M64 ${45 + i * 36} l8 8 M72 ${45 + i * 36} l-8 8` : `M63 ${49 + i * 36} l4 4 l8 -8`} stroke="#fff" strokeWidth="2.5" fill="none" strokeLinecap="round" className="v-pop" style={d(i * 0.7)} />
        </g>
      ))}
    </>
  ),
  support: (
    <>
      <circle cx="160" cy="100" r="68" fill="none" stroke={B} strokeOpacity=".25" strokeWidth="10" />
      <circle className="v-spin" cx="160" cy="100" r="68" fill="none" stroke={R} strokeWidth="10" strokeLinecap="round" strokeDasharray="110 320" />
      <text x="160" y="108" textAnchor="middle" fill="#fff" fontSize="30" fontWeight="800">24/7</text>
      <text x="160" y="130" textAnchor="middle" fill={W} fontSize="10" opacity=".7">always monitored</text>
    </>
  ),
  devops: (
    <>
      <path id="inf" d="M160 100 C 200 40, 280 40, 280 100 S 200 160, 160 100 S 40 40, 40 100 S 120 160, 160 100 Z" fill="none" stroke={B} strokeOpacity=".5" strokeWidth="3" />
      <circle r="8" fill={R}>
        <animateMotion dur="5s" repeatCount="indefinite"><mpath href="#inf" /></animateMotion>
      </circle>
      {[["Build", 60], ["Test", 130], ["Ship", 190], ["Run", 255]].map(([t, x], i) => (
        <text key={t} x={x} y="185" fill={W} fontSize="11" opacity=".75" textAnchor="middle">{t}</text>
      ))}
    </>
  ),
  security: (
    <>
      <path d="M160 24 L238 52 V104 C238 144 204 170 160 186 C116 170 82 144 82 104 V52 Z" fill="#10224d" stroke={B} strokeWidth="3" />
      <path d="M130 104 l22 22 l40 -44" stroke={G} strokeWidth="9" fill="none" strokeLinecap="round" strokeLinejoin="round" className="v-pop" />
      <rect className="v-scan" x="86" y="40" width="148" height="4" rx="2" fill={R} />
    </>
  ),
  data: (
    <>
      {[40, 70, 52, 96, 80, 124].map((h, i) => (
        <rect key={i} className="v-rise" x={48 + i * 40} y={170 - h} width="26" height={h} rx="5" fill={i === 5 ? R : B} style={d(i * 0.15)} />
      ))}
      <polyline className="v-draw" points="61,120 101,96 141,112 181,66 221,84 261,44" fill="none" stroke={G} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" pathLength="1" />
    </>
  ),
};

export default function ServiceVisual({ id }) {
  return (
    <svg key={id} viewBox="0 0 320 200" className="h-full w-full" role="img" aria-hidden="true">
      {scenes[id]}
    </svg>
  );
}
