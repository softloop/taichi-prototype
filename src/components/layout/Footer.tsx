import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background-alt py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="font-display text-xl font-normal text-dark">Tai Chi Academy</h3>
            <p className="mt-2 text-sm text-dark/70">
              Deutschlands älteste Tai-Chi-Schule
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-dark">Kurse</h4>
            <ul className="space-y-2 text-sm text-dark/70">
              <li><Link href="/kurse/online" className="hover:text-primary">Online</Link></li>
              <li><Link href="/kurse/live" className="hover:text-primary">Live & Zoom</Link></li>
              <li><Link href="/kurse/praesenz" className="hover:text-primary">Präsenz</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-dark">Methode</h4>
            <ul className="space-y-2 text-sm text-dark/70">
              <li><Link href="/methode/innere-kraft" className="hover:text-primary">Innere Kraft</Link></li>
              <li><Link href="/methode/atemtyp" className="hover:text-primary">Atemtyp Tai Chi</Link></li>
              <li><Link href="/methode/test" className="hover:text-primary">Atemtyp-Test</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-dark">Kontakt</h4>
            <ul className="space-y-2 text-sm text-dark/70">
              <li>info@taichi-academy.de</li>
              <li>+49 (0) 123 456 789</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-dark/60">
          <p>© {new Date().getFullYear()} Tai Chi Academy. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}






