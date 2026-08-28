import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-shell">
      <section className="app-container" aria-label="Page not found">
        <header className="header">
          <h1>Smart Recipe AI</h1>
          <p>Your personal pocket chef</p>
        </header>
        <div className="content">
          <p className="error-message">This page does not exist.</p>
          <Link className="action-button" href="/">
            Go Home
          </Link>
        </div>
      </section>
    </main>
  );
}
