function Home() {
  return (
    <main className="home-page">
      <section className="hero-panel">
        <div className="brand-tag">
          <span className="eyebrow">digital experiment</span>
          <h1>this is not a website</h1>
          <p className="hero-copy">
            A creative landing page for a project that plays with code, design,
            and polished motion. It�s built in React and Vite, and styled with
            a minimal, responsive interface.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#about">see what�s inside</a>
            <a className="button secondary" href="https://github.com/Miniklaudia" target="_blank" rel="noreferrer">view code</a>
          </div>
        </div>
      </section>

      <section id="about" className="cards-grid">
        <article>
          <h2>Why this exists</h2>
          <p>
            This page is an invitation to treat the web as an active canvas,
            not just a destination. It�s a playful first impression for your
            creative project.
          </p>
        </article>
        <article>
          <h2>Built with</h2>
          <p>
            React + Vite provides the fast, modern foundation for this app.
            The result is simple, responsive, and easy to extend.
          </p>
        </article>
        <article>
          <h2>What's next</h2>
          <p>
            Add more interactive sections, experiment with visuals, or connect
            the landing page to the rest of your site.
          </p>
        </article>
      </section>

      <footer className="home-footer">
        <p>Made for thisisnotawebsite � an app-first creative landing page.</p>
      </footer>
    </main>
  )
}

export default Home
