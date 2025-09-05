export default function Login({ searchParams }) {
  const error = searchParams?.error;
  const next = searchParams?.next || "/members";

  return (
    <div className="card" style={{maxWidth:520, margin:"0 auto"}}>
      <h1 className="h1">Members Gate</h1>
      <p className="sub">Low light. Late standards. Enter the passphrase to slip inside.</p>

      {error ? <div className="error">That passphrase didn’t match. Try again.</div> : null}

      <form method="post" action={`/api/login?next=${encodeURIComponent(next)}`} className="form-grid">
        <label className="label" htmlFor="pass">Passphrase</label>
        <input id="pass" name="password" type="password" className="input" placeholder="••••••••" required />

        <div className="cta-row" style={{marginTop:6}}>
          <button className="btn" type="submit">Enter</button>
          <a className="btn-ghost" href="/">Back to Lounge</a>
        </div>
        <div className="note">By entering you agree to our consent-first house standards.</div>
      </form>
    </div>
  );
}
