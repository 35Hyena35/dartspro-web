// Şablon: Çalışması için Vercel Project Settings > Environment Variables'da
// LIVEKIT_API_KEY, LIVEKIT_API_SECRET, LIVEKIT_HOST değerleri girilecek.
import { NextRequest } from "next/server";

export async function POST(req: NextRequest){
  const { room, identity } = await req.json().catch(()=>({}));
  if(!room || !identity) return new Response("Bad Request", { status:400 });

  const host = process.env.LIVEKIT_HOST!;
  const apiKey = process.env.LIVEKIT_API_KEY!;
  const apiSecret = process.env.LIVEKIT_API_SECRET!;

  if(!host || !apiKey || !apiSecret) {
    return Response.json({ ok:false, error:"Missing LiveKit envs" }, { status: 500 });
  }

  // Basit JWT üretimi (adım: gerçek LiveKit serverless token üretimi için resmi SDK eklenir)
  // Şimdilik sahte bir payload döndürüyoruz ki UI akışını test edebilelim:
  const fake = { ws: host.replace(/^https?/,"wss"), token: `FAKE.${room}.${identity}` };
  return Response.json({ ok:true, ...fake });
}
