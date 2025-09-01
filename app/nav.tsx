"use client";
import Link from "next/link";
const Item = ({href,children}:{href:string,children:React.ReactNode}) =>
  <Link href={href} style={{padding:"10px 14px",borderRadius:12,background:"rgba(255,255,255,.08)",color:"inherit"}}>{children}</Link>;

export default function Nav(){
  return (
    <nav style={{display:"flex",gap:10,flexWrap:"wrap",marginBottom:16}}>
      <Item href="/">Home</Item>
      <Item href="/play">Play</Item>
      <Item href="/practice">Practice</Item>
      <Item href="/tournaments">Tournaments</Item>
      <Item href="/profile">Profile</Item>
    </nav>
  );
}
