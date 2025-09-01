"use client";
import { locales } from "@/lib/i18n";

export default function LocaleSwitcher(){
  function setLocale(l:string){
    localStorage.setItem("locale", l);
    location.reload(); // basit yaklaşım; SSR'e geçince router ile çözeriz
  }
  const keys = Object.keys(locales) as Array<keyof typeof locales>;
  return (
    <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
      {keys.map(k=>(
        <button key={k} className="ui-btn" onClick={()=>setLocale(k)}>{locales[k]}</button>
      ))}
    </div>
  );
}
