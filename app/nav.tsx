"use client";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import LocaleSwitcher from "@/components/LocaleSwitcher";

const Item = ({href,children}:{href:string,children:React.ReactNode}) =>
  <Link href={href} className="ui-btn ui-btn--ghost">{children}</Link>;

export default function Nav(){
  return (
    <nav style={{display:"flex",gap:10,flexWrap:"wrap",alignItems:"center",justifyContent:"space-between"}}>
      <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
        <Item href="/">Home</Item>
        <Item href="/play">Play</Item>
        <Item href="/practice">Practice</Item>
        <Item href="/tournaments">Tournaments</Item>
        <Item href="/profile">Profile</Item>
      </div>
      <div style={{display:"flex",gap:8,alignItems:"center"}}>
        <LocaleSwitcher/>
        <ThemeToggle/>
      </div>
    </nav>
  );
}
