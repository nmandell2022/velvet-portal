export default function Home() {
  return (
    <div className="card">
      <div className="hero-grid">
        <div className="crest-wrap">
          <img src="/velvet-crest.svg" alt="Velvet Nights crest" width="170" height="170" />
        </div>

        <div>
          <h1 className="h1">Velvet Nights: The Inner Circle Lounge</h1>
          <p className="tagline">“Where the night never ends, and neither does the connection.”</p>
          <p className="sub">
            A digital speakeasy for curated kink, velvet voices, and slow-burning intimacy.
            Deep blacks, velvet reds, and a soft gold glow—consent-forward by design.
          </p>

          <div className="chips">
            <span className="chip">Velvet • Red • Gold</span>
            <span className="chip">Low-light allure</span>
            <span className="chip">Invitation-only</span>
          </div>

          <div className="hr"></div>

          <div className="cta-row">
            <a className="btn" href="/login">Slip Inside →</a>
            <a className="btn-ghost" href="/login">Members Gate</a>
          </div>
        </div>
      </div>
    </div>
  );
}
