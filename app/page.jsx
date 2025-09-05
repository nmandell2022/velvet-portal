export default function Home() {
  const Crest = () => (
    <svg
      viewBox="0 0 220 220"
      width="170"
      height="170"
      role="img"
      aria-label="Velvet Nights crest"
    >
      <defs>
        <linearGradient id="g" x1="0" x2="1">
          <stop offset="0%" stopColor="#d4af37" />
          <stop offset="100%" stopColor="#f5e7b6" />
        </linearGradient>
        <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.6" />
        </filter>
      </defs>

      <circle cx="110" cy="110" r="92" fill="none" stroke="url(#g)" strokeWidth="1.6" />
      <circle cx="110" cy="110" r="70" fill="none" stroke="rgba(212,175,55,.35)" strokeWidth="1" />

      {/* VN monogram */}
      <g transform="translate(60,58)">
        <path
          d="M10 95 L10 10 L22 10 L54 70 L86 10 L98 10 L98 95 L88 95 L88 33 L58 90 L50 90 L20 33 L20 95 Z"
          fill="none"
          stroke="url(#g)"
          strokeWidth="2.6"
          filter="url(#soft)"
        />
      </g>

      {/* tiny sparkle */}
      <circle cx="162" cy="62" r="1.6" fill="url(#g)" />
    </svg>
  );

  return (
    <div className="card">
      <div className="hero-grid">
        <div className="crest-wrap">
          <Crest />
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
