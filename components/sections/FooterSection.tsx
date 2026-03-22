import Link from "next/link";
import { BUSINESS_NAME, SOCIAL_LINKS } from "@/lib/constants";

export function FooterSection() {
  return (
    <footer className="px-6 pb-10 pt-14 sm:px-10 lg:px-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 rounded-3xl border border-[var(--color-border)] bg-white px-6 py-8 text-sm text-[var(--color-muted)] sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-2xl text-[var(--color-ink)]">{BUSINESS_NAME}</p>
          <p>x x x x x.</p>
        </div>

        <nav className="flex gap-4">
          {SOCIAL_LINKS.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full px-3 py-1 text-[var(--color-primary-dark)] ring-1 ring-[var(--color-border)] transition hover:bg-[var(--color-soft)]"
            >
              {social.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
