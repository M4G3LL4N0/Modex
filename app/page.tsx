export default function Page() {
  useEffect(() => {
    const handleScroll = () => {
      document.documentElement.style.setProperty(
        "--scroll-y",
        `${window.scrollY}px`
      );
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <main className="page-shell">
      <div className="global-backdrop" />
      
      <section className="hero-section">
        <div className="hero-backdrop" />
        
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="gradient-text">Modex</span><br />
            Intelligence OS
          </h1>

          <p className="hero-copy">
            The operating system for venture intelligence and decision-making.
          </p>

          <div className="hero-actions">
            <a href="/dashboard" className="button-primary">Launch OS</a>
            <a href="/technology" className="button-secondary">System Specs</a>
          </div>
        </div>
      </section>
    </main>
  );
}
