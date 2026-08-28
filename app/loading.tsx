export default function Loading() {
  return (
    <main className="page-shell">
      <section className="app-container" aria-label="Loading Smart Recipe AI">
        <header className="header">
          <h1>Smart Recipe AI</h1>
          <p>Your personal pocket chef</p>
        </header>
        <div className="content">
          <div className="loader" aria-label="Loading" />
        </div>
      </section>
    </main>
  );
}
