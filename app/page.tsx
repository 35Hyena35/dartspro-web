"use client";
import { getDict, locales } from "@/lib/i18n";
import Logo from "@/components/Logo";

export default function Home(){
  const locale = (typeof navigator!=="undefined" ? (navigator.language?.split("-")[0]||"en") : "en") as keyof typeof locales;
  const t = getDict(locale);
  return (
    <section>
      <Logo variant="dark" />
      <h1 style={{fontSize:48,margin:"24px 0 8px"}}>DartsPro</h1>
      <p style={{opacity:.85,margin:0}}>{t.tagline}</p>
      <div style={{display:"flex",gap:12,marginTop:24}}>
        <a className="ui-btn ui-btn--primary" href="/play">{t.play}</a>
        <a className="ui-btn" href="/practice">{t.practice}</a>
      </div>
      <div className="ui-card" style={{marginTop:24}}>
        <b>Not:</b> Tema ve dil seçimlerin yerel olarak kaydedilir. (localStorage)
      </div>
    </section>
  );
}
