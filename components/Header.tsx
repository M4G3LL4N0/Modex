export default function Header() {
  return (
    <header className="site-header">
      <div className="container nav-row">
        <div className="brand-wrap">
          <div className="brand-mark">MX</div>
          <div>
            <div className="brand-name">MODEX</div>
            <div className="brand-subtitle">Noaerth Ecosystem Venture</div>
          </div>
        </div>

        <nav className="nav-links">
          <a className="nav-link" href="/">Home</a>
          <a className="nav-link" href="/technology">Technology</a>
          <a className="nav-link" href="/investors">Investors</a>
          <a className="nav-link" href="/dashboard">Dashboard</a>
        </nav>
      </div>
    </header>
  );
}
