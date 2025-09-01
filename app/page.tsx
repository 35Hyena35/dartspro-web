"use client";
import { getDict, locales } from "../lib/i18n";
import Logo from "../components/Logo";

export default function Home(){
  const locale = (typeof navigator!=="undefined" ? (navigator.language?.split("-")[0]||"en") : "en") as keyof typeof locales;
  const t = getDict(locale);
  return (
    <main style={{minHeight:"100vh",padding:"32px"}}>
      <div style={{maxWidth:1080,margin:"0 auto"}}>
        <Logo variant="dark" />
        <h1 style={{fontSize:48,margin:"24px 0 8px"}}>DartsPro</h1>
        <p style={{opacity:.85,margin:0}}>{t.tagline}</p>
        <div style={{display:"flex",gap:12,marginTop:24}}>
          <a style={{padding:"12px 16px",borderRadius:12,background:"var(--primary)",color:"#000"}} href="#play">{t.play}</a>
          <a style={{padding:"12px 16px",borderRadius:12,background:"var(--lime)",color:"#000"}} href="#practice">{t.practice}</a>
        </div>
      </div>
    </main>
  );
}
