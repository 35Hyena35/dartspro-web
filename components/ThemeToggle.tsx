"use client";
import { useEffect, useState } from "react";
export default function ThemeToggle(){
  const [theme,setTheme] = useState<"dark"|"light">("dark");
  useEffect(()=>{ const t=(localStorage.getItem("theme") as any)||"dark";
    setTheme(t); document.documentElement.setAttribute("data-theme", t);
  },[]);
  function toggle(){
    const t = theme==="dark"?"light":"dark";
    setTheme(t); localStorage.setItem("theme", t);
    document.documentElement.setAttribute("data-theme", t);
  }
  return <button className="ui-btn ui-btn--ghost" onClick={toggle}>
    {theme==="dark"?"🌞 Light":"🌙 Dark"}
  </button>;
}
