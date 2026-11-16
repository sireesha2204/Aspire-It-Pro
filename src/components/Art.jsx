// Generated artwork used as the base layer under every photo, and on its own where
// the live site has decorative pictures. All inline SVG: sharp, themed, no files.
const R = "#ee3159", B = "#3b5fad", D = "#0b1a3a", L = "#8fb4ff";

export function Avatar({ i = 0 }) {
  const g = [["#1f5ca6", "#3b5fad"], ["#ee3159", "#ff7d98"], ["#3b5fad", "#0b1a3a"], ["#0b1a3a", "#ee3159"], ["#1f5ca6", "#ee3159"], ["#3b5fad", "#8fb4ff"]][i % 6];
  return (
    <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
      <defs><linearGradient id={`av${i}`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={g[0]} /><stop offset="1" stopColor={g[1]} /></linearGradient></defs>
      <rect width="100" height="100" fill={`url(#av${i})`} />
      <circle cx="50" cy="38" r="17" fill="#fff" opacity=".9" />
      <path d="M16 100c2-24 16-36 34-36s32 12 34 36z" fill="#fff" opacity=".9" />
    </svg>
  );
}

export function Cover({ kind = "grid", a = [B, R] }) {
  const id = `cv${a[0].slice(1)}${a[1].slice(1)}${kind}`;
  return (
    <svg viewBox="0 0 320 180" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs><linearGradient id={id} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={a[0]} /><stop offset="1" stopColor={a[1]} /></linearGradient></defs>
      <rect width="320" height="180" fill={`url(#${id})`} />
      <g className="cover-art" fill="none" stroke="#fff" strokeOpacity=".5" strokeWidth="2">
        {kind === "grid" && [0, 1, 2, 3].map((i) => <rect key={i} x={50 + i * 14} y={30 + i * 10} width="150" height="90" rx="10" fill="#fff" fillOpacity=".08" />)}
        {kind === "orbs" && <>{[30, 55, 80].map((r) => <circle key={r} cx="200" cy="90" r={r} strokeDasharray="6 8" />)}<circle cx="200" cy="90" r="12" fill="#fff" stroke="none" /></>}
        {kind === "bars" && [40, 70, 55, 100, 85].map((h, i) => <rect key={i} x={60 + i * 42} y={150 - h} width="26" height={h} rx="6" fill="#fff" fillOpacity=".35" stroke="none" />)}
        {kind === "nodes" && <><path d="M60 130L130 60l70 50 70-70" />{[[60, 130], [130, 60], [200, 110], [270, 40]].map(([x, y]) => <circle key={x} cx={x} cy={y} r="9" fill="#fff" stroke="none" />)}</>}
      </g>
    </svg>
  );
}

// Dashboard / workspace scene (About hero, "How we deliver" side image)
export function DevScene() {
  return (
    <svg viewBox="0 0 400 360" className="h-full w-full" role="img" aria-label="Software dashboard illustration">
      <defs>
        <linearGradient id="ds1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#12285a" /><stop offset="1" stopColor={D} /></linearGradient>
        <linearGradient id="ds2" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor={B} /><stop offset="1" stopColor={R} /></linearGradient>
      </defs>
      <circle cx="200" cy="180" r="150" fill="rgba(59,95,173,.10)" />
      <circle cx="200" cy="180" r="110" fill="none" stroke={B} strokeOpacity=".25" strokeDasharray="4 8" className="v-spin" />
      <g className="float-s"><rect x="50" y="70" width="300" height="200" rx="18" fill="url(#ds1)" />
        <circle cx="72" cy="92" r="4.500" fill={R} /><circle cx="88" cy="92" r="4.500" fill="#f5b83d" /><circle cx="104" cy="92" r="4.500" fill="#3bd6a0" />
        {[70, 100, 82, 130, 110, 150].map((h, i) => <rect key={i} className="v-rise" x={78 + i * 26} y={230 - h * 0.8} width="16" height={h * 0.8} rx="4" fill={i === 5 ? R : L} style={{ animationDelay: `${i * 0.15}s` }} />)}
        <polyline className="v-draw" pathLength="1" points="86,190 112,160 138,172 164,130 190,146 216,108" fill="none" stroke="#3bd6a0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="250" y="112" width="80" height="12" rx="6" fill="#fff" opacity=".18" /><rect x="250" y="134" width="56" height="12" rx="6" fill="#fff" opacity=".12" />
        <circle className="v-pulse" cx="290" cy="196" r="24" fill="none" stroke="url(#ds2)" strokeWidth="8" />
      </g>
      <g className="float-s" style={{ animationDelay: "-2s" }}><rect x="262" y="40" width="108" height="46" rx="14" fill="#fff" /><rect x="276" y="54" width="44" height="8" rx="4" fill={B} /><rect x="276" y="68" width="70" height="6" rx="3" fill="#cfd8f0" /></g>
      <g className="float-s" style={{ animationDelay: "-3.500s" }}><rect x="26" y="236" width="112" height="52" rx="14" fill="#fff" /><circle cx="52" cy="262" r="12" fill={R} /><rect x="72" y="252" width="52" height="8" rx="4" fill={B} /><rect x="72" y="267" width="36" height="6" rx="3" fill="#cfd8f0" /></g>
    </svg>
  );
}

export function RoadArt({ n = 0 }) {
  const icons = [
    <path key="a" d="M60 130V50l50 18-50 18" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />,
    <g key="b" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round"><circle cx="90" cy="80" r="28" /><path d="M90 52v-14M90 122v-14M62 80H48M132 80h-14" /></g>,
    <g key="c" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"><path d="M40 130l30-40 24 22 38-56" /><path d="M110 56h22v22" /></g>,
    <g key="d" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"><path d="M90 40l8 18 20 2-15 14 4 20-17-10-17 10 4-20-15-14 20-2z" /></g>,
  ];
  const c = [[B, R], [R, B], [D, B], [R, D]][n % 4];
  return (
    <svg viewBox="0 0 180 160" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs><linearGradient id={`rd${n}`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={c[0]} /><stop offset="1" stopColor={c[1]} /></linearGradient></defs>
      <rect width="180" height="160" fill={`url(#rd${n})`} /><circle cx="150" cy="20" r="46" fill="#fff" opacity=".08" /><g className="float-s">{icons[n % 4]}</g>
    </svg>
  );
}

export function MissionArt() {
  return (
    <svg viewBox="0 0 400 400" className="h-full w-full" role="img" aria-label="Target illustration">
      <defs><linearGradient id="ms" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={B} /><stop offset="1" stopColor={R} /></linearGradient></defs>
      {[170, 130, 90, 50].map((r, i) => <circle key={r} cx="200" cy="200" r={r} fill={i % 2 ? "#fff" : "rgba(59,95,173,.12)"} stroke="url(#ms)" strokeWidth="3" className="v-pulse" style={{ animationDelay: `${i * .25}s` }} />)}
      <circle cx="200" cy="200" r="18" fill={R} />
      <g className="v-spin" style={{ transformOrigin: "200px 200px" }}><circle cx="200" cy="30" r="10" fill={B} /><circle cx="370" cy="200" r="7" fill={R} /></g>
      <path d="M200 200L330 70" stroke={D} strokeWidth="6" strokeLinecap="round" /><path d="M308 66l26-4-4 26" fill="none" stroke={D} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ContactArt() {
  return (
    <svg viewBox="0 0 420 320" className="h-full w-full" role="img" aria-label="Messaging illustration">
      <circle cx="210" cy="160" r="130" fill="rgba(59,95,173,.10)" />
      <g className="float-s"><rect x="110" y="90" width="200" height="140" rx="18" fill={D} /><path d="M110 110l100 70 100-70" fill="none" stroke={L} strokeWidth="5" strokeLinejoin="round" /><circle cx="300" cy="100" r="16" fill={R} className="v-pulse" /></g>
      <g className="float-s" style={{ animationDelay: "-2s" }}><rect x="40" y="40" width="110" height="52" rx="16" fill="#fff" /><circle cx="64" cy="66" r="9" fill={B} /><rect x="82" y="56" width="52" height="8" rx="4" fill={B} /><rect x="82" y="70" width="36" height="6" rx="3" fill="#cfd8f0" /></g>
      <g className="float-s" style={{ animationDelay: "-3.500s" }}><rect x="270" y="220" width="120" height="52" rx="16" fill="#fff" /><circle cx="294" cy="246" r="9" fill={R} /><rect x="312" y="236" width="56" height="8" rx="4" fill={R} /><rect x="312" y="250" width="38" height="6" rx="3" fill="#cfd8f0" /></g>
    </svg>
  );
}

export function MapArt() {
  return (
    <svg viewBox="0 0 400 220" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="400" height="220" fill="#12285a" />
      {[...Array(9)].map((_, i) => <line key={i} x1={i * 50} y1="0" x2={i * 50} y2="220" stroke="#fff" strokeOpacity=".06" />)}
      {[...Array(5)].map((_, i) => <line key={i} x1="0" y1={i * 50} x2="400" y2={i * 50} stroke="#fff" strokeOpacity=".06" />)}
      <path d="M-10 160C80 120 140 190 220 130S340 70 410 100" fill="none" stroke={B} strokeWidth="14" strokeOpacity=".6" />
      <path d="M60 -10C90 60 70 120 130 230" fill="none" stroke={B} strokeWidth="9" strokeOpacity=".4" />
      <circle cx="220" cy="118" r="30" fill={R} opacity=".25" className="v-pulse" /><circle cx="220" cy="118" r="9" fill={R} />
      <path d="M220 62c-14 0-24 10-24 23 0 17 24 38 24 38s24-21 24-38c0-13-10-23-24-23z" fill="#fff" /><circle cx="220" cy="85" r="8" fill={R} />
    </svg>
  );
}

export function LogoMark({ i = 0 }) {
  const shapes = [
    <polygon key="0" points="20,4 36,32 4,32" />, <circle key="1" cx="20" cy="18" r="15" />, <rect key="2" x="5" y="5" width="30" height="26" rx="8" />,
    <path key="3" d="M20 3l15 9v17l-15 9-15-9V12z" />, <path key="4" d="M5 30L20 5l15 25h-9l-6-10-6 10z" />, <path key="5" d="M20 33S4 24 4 13a8 8 0 0116-3 8 8 0 0116 3c0 11-16 20-16 20z" />,
  ];
  return <svg viewBox="0 0 40 38" className="absolute inset-0 m-auto h-8 w-8 text-[#3b5fad]/40" fill="currentColor" aria-hidden="true">{shapes[i % 6]}</svg>;
}
