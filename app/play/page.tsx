"use client";
import { useState } from "react";

type Player = { name: string; score: number; darts: number; legs: number };
const startScore = 501;

function Key({n,on}:{n:number|string,on:()=>void}) {
  return <button onClick={on} style={{padding:"12px 16px",borderRadius:12,background:"var(--surface)",color:"var(--text)",border:"1px solid rgba(255,255,255,.1)"}}>{n}</button>
}

export default function PlayPage(){
  const [p1,setP1] = useState<Player>({name:"Player 1", score:startScore, darts:0, legs:0});
  const [p2,setP2] = useState<Player>({name:"Player 2", score:startScore, darts:0, legs:0});
  const [turn,setTurn] = useState<1|2>(1);
  const [entry,setEntry] = useState<string>("");

  const cur = turn===1?p1:p2;
  const setCur = turn===1?setP1:setP2;

  function commit(){
    const v = Number(entry);
    if(!entry || isNaN(v)) return;
    if(v<0 || v>180) { setEntry(""); return; } // güvenlik
    const next = cur.score - v;
    // bust kuralları basit: eksiye düşerse veya 1'de kalırsa bust
    if(next<0 || next===1){ setCur({...cur, darts:cur.darts+3}); setTurn(turn===1?2:1); setEntry(""); return; }
    if(next===0){ // leg biter
      setCur({...cur, score:startScore, darts:cur.darts+3, legs:cur.legs+1});
      const other = turn===1? p2 : p1;
      (turn===1? setP2 : setP1)({...other, score:startScore, darts:other.darts});
      setTurn(turn===1?2:1); setEntry(""); return;
    }
    setCur({...cur, score: next, darts:cur.darts+3});
    setTurn(turn===1?2:1); setEntry("");
  }

  function press(n:string){ setEntry(e=> (e+n).slice(0,3)); }
  function clear(){ setEntry(""); }

  const Card = ({p,label}:{p:Player,label:string})=>(
    <div style={{flex:1,padding:16,borderRadius:16,background:"var(--surface)",border:"1px solid rgba(255,255,255,.08)"}}>
      <div style={{opacity:.7,marginBottom:6}}>{label}</div>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <h3 style={{margin:0,fontSize:28}}>{p.name}</h3>
        <div style={{fontSize:32,fontWeight:800,color:"var(--lime)"}}>{p.score}</div>
      </div>
      <div style={{display:"flex",gap:12,marginTop:8,opacity:.8,fontSize:14}}>
        <div>🎯 Darts: {p.darts}</div>
        <div>🏆 Legs: {p.legs}</div>
      </div>
    </div>
  );

  return (
    <div>
      <h2 style={{marginTop:0}}>Play – 501 SIDO</h2>
      <div style={{display:"flex",gap:16,marginBottom:16}}>
        <Card p={p1} label={turn===1 ? "Your turn" : "Waiting"} />
        <Card p={p2} label={turn===2 ? "Your turn" : "Waiting"} />
      </div>

      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
        <div style={{padding:16,borderRadius:16,background:"var(--surface)"}}>
          <div style={{opacity:.8,marginBottom:8}}>Enter score (0–180), 3 darts/turn</div>
          <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:12}}>
            <input value={entry} readOnly style={{width:120,padding:"10px 12px",borderRadius:12,fontSize:24,border:"1px solid rgba(255,255,255,.1)",background:"rgba(255,255,255,.06)",color:"inherit"}}/>
            <button onClick={commit} style={{padding:"12px 16px",borderRadius:12,background:"var(--primary)",color:"#000"}}>Commit</button>
            <button onClick={clear} style={{padding:"12px 16px",borderRadius:12,background:"rgba(255,255,255,.08)",color:"inherit"}}>Clear</button>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10}}>
            {["1","2","3","4","5","6","7","8","9","0","10","20","60","100","140","180"].map(n=>
              <Key key={n} n={n} on={()=>press(String(n))}/>
            )}
          </div>
        </div>

        <div style={{padding:16,borderRadius:16,background:"var(--surface)"}}>
          <div style={{opacity:.8,marginBottom:8}}>Summary</div>
          <ul style={{lineHeight:1.8,margin:0,paddingLeft:18}}>
            <li>Starting score: {startScore}</li>
            <li>Turn order: Player 1 → Player 2</li>
            <li>Bust rule: score &lt; 0 or = 1 ⇒ bust</li>
            <li>Leg ends at 0 (checkout). Otomatik yeni leg başlar.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
