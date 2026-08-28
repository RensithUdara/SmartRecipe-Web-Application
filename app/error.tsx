"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="page-shell">
      <section className="app-container" aria-label="Application error">
        <header className="header">
          <h1>Smart Recipe</h1>
          <p>Your personal pocket chef</p>
        </header>
        <div className="content">
          <p className="error-message">Something went wrong.</p>
          <button className="action-button" type="button" onClick={reset}>
            Try Again
          </button>
        </div>
      </section>
    </main>
  );
}
