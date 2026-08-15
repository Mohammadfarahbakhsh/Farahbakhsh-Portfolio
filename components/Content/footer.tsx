import { profile } from '@/lib/portfolio-data'

export function Footer() {
  return (
    <footer className="mx-auto max-w-5xl border-t border-border px-6 py-8">
      <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js &amp; Tailwind CSS.
        </p>
        <a
          href="#top"
          className="font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
        >
          Back to top
        </a>
      </div>
    </footer>
  )
}
