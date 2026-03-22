export function AboutSection() {
  return (
    <section id="nosotros" className="px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto grid w-full max-w-6xl gap-10 rounded-[2rem] bg-white p-10 shadow-[0_20px_60px_rgba(251,146,60,0.12)] ring-1 ring-[var(--color-border)] lg:grid-cols-[1fr_0.9fr]">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-primary-dark)]">
            x x x
          </p>
          <h2 className="font-display text-4xl text-[var(--color-ink)]">
            titulo x x x x
          </h2>
          <p className="text-[var(--color-muted)]">
            x x x x x x x x x.
          </p>
          <p className="text-[var(--color-muted)]">
            x x x x x x x x x x.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <article className="rounded-3xl bg-[var(--color-soft)] p-6">
            <h3 className="font-semibold text-[var(--color-ink)]">opcion 1</h3>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              x x x x x.
            </p>
          </article>
          <article className="rounded-3xl bg-[var(--color-soft)] p-6">
            <h3 className="font-semibold text-[var(--color-ink)]">opcion 2</h3>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              x x x x x.
            </p>
          </article>
          <article className="rounded-3xl bg-[var(--color-soft)] p-6">
            <h3 className="font-semibold text-[var(--color-ink)]">opcion 3</h3>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              x x x x x.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
