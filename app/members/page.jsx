import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Members() {
  const authed = cookies().get("vn_session")?.value === "ok";
  if (!authed) redirect("/login");

  return (
    <div className="card" style={{maxWidth:980, margin:"0 auto"}}>
      <h1 className="h1">Inner Circle Lounge</h1>
      <p className="sub">A private continuation after the soiree—curated, consent-forward, and low-lit.</p>

      <div className="chips" style={{marginBottom:12}}>
        <span className="chip">Profiles</span>
        <span className="chip">Whispers</span>
        <span className="chip">Confessions</span>
        <span className="chip">Lounges</span>
      </div>

      <div className="cta-row" style={{marginTop:8}}>
        <a className="btn" href="/members/profile">Create Your Persona →</a>
        <a className="btn-ghost" href="/members/directory">Members Directory</a>
        <a className="btn-ghost" href="/members/lounge/silk">The Silk Room</a>
        <a className="btn-ghost" href="/members/confessions">Velvet Confessions</a>
        <form method="post" action="/api/logout" style={{marginLeft:"auto"}}>
          <button className="btn" type="submit">Sign out</button>
        </form>
      </div>
    </div>
  );
}
