import Nav from "./nav";
export const metadata = { title: "DartsPro" };
export default function Root({children}:{children:React.ReactNode}){
  return (
    <html lang="tr">
      <body style={{background:"var(--bg)",color:"var(--text)"}}>
        <main style={{minHeight:"100vh",padding:"24px"}}>
          <div style={{maxWidth:1080,margin:"0 auto"}}>
            <Nav/>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
