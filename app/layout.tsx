export const metadata = { title: "DartsPro" };
export default function Root({children}:{children:React.ReactNode}){
  return <html lang="tr"><body style={{background:"var(--bg)",color:"var(--text)"}}>{children}</body></html>;
}
