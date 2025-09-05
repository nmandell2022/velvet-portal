export default function Home() {
  return (
    <div className="card hero">
      <div className="hero-row">
        <h1 className="h1">🖤 Velvet Nights: The Inner Circle Lounge</h1>
        <a className="btn" href="/login">Enter Members Gate →</a>
      </div>

      <p className="sub">“Where the night never ends, and neither does the connection.”</p>

      <p>
        A digital speakeasy for curated kink, velvet voices, and slow-burning intimacy.
        Slow jazz, soft gold glows, and consent-first conversation.
      </p>

      <div className="chips">
        <span className="chip">Velvet • Red • Gold</span>
        <span className="chip">Low-light allure</span>
        <span className="chip">Consent-forward</span>
        <span className="chip">Invitation-only</span>
      </div>

      <hr className="hr" />

      <div className="hero-row">
        <div className="note">
          Private by design. No screenshots. No pressure. Just chemistry.
        </div>
        <a className="btn" href="/login">Slip Inside →</a>
      </div>
    </div>
  );
}
