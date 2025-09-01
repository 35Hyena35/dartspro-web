export default function Logo({variant="dark"}:{variant?: "dark"|"light"}) {
  const stroke = variant==="dark" ? "#EAF0FF" : "#0B1220";
  const accent = "#FF7A66";
  return (
    <svg width="480" height="220" viewBox="0 0 720 330" aria-label="DartsPro logo">
      <g transform="translate(120,160) scale(0.55)">
        {[...Array(20)].map((_,i)=>{
          const a1=((i*18-9)*Math.PI)/180, a2=(((i+1)*18-9)*Math.PI)/180;
          const x1=260*Math.cos(a1), y1=260*Math.sin(a1);
          const x2=260*Math.cos(a2), y2=260*Math.sin(a2);
          const fill = i%2===0 ? "#000" : "#fff";
          return <path key={i} d={`M0,0 L${x1},${y1} A260,260 0 0,1 ${x2},${y2} Z`} fill={fill} stroke="#000" strokeWidth="2"/>;
        })}
        <circle cx="0" cy="0" r="30" fill="#0B9E3A" stroke="#000" strokeWidth="4"/>
        <circle cx="0" cy="0" r="12" fill="#D00000" stroke="#000" strokeWidth="2"/>
        <g transform="rotate(-22) scale(0.9)">
          <polygon points="0,0 28,6 28,-6" fill="#C0C4C9" stroke="#4A4F54" strokeWidth="1.5"/>
          <rect x="28" y="-9" width="110" height="18" rx="6" fill="#D0D3D6" stroke="#3F4448" strokeWidth="1.5"/>
          <rect x="138" y="-6" width="90" height="12" rx="4" fill="#333"/>
          <path d="M228,0 L282,-36 L320,0 L282,36 Z" fill={accent} stroke="#1f2430" strokeWidth="1.5"/>
        </g>
      </g>
      <g transform="translate(360,175)">
        <text x="0" y="0" fontFamily="Poppins,Segoe UI,Arial" fontSize="84" fontWeight={800} fill={stroke}>Darts</text>
        <text x="205" y="0" fontFamily="Poppins,Segoe UI,Arial" fontSize="84" fontWeight={800} fill={accent}>Pro</text>
      </g>
    </svg>
  );
}
