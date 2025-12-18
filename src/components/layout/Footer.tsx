import Link from 'next/link'
import { menuItems } from '@/data/menu'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background-alt py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-display text-xl font-normal text-dark">Tai Chi Academy</h3>
            <p className="mt-2 text-sm text-dark/70">
              Deutschlands älteste Tai-Chi-Schule
            </p>
          </div>

          {/* Kurse */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-dark">
              {menuItems.kurse.label}
            </h4>
            <ul className="space-y-2 text-sm text-dark/70">
              {menuItems.kurse.items.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Methode */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-dark">
              {menuItems.methode.label}
            </h4>
            <ul className="space-y-2 text-sm text-dark/70">
              {menuItems.methode.items.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Über uns */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-dark">
              <Link href="/ueber-uns" className="hover:text-primary transition-colors">
                {menuItems['ueber-uns'].label}
              </Link>
            </h4>
            <ul className="space-y-2 text-sm text-dark/70">
              {menuItems['ueber-uns'].items.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Wissen */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-dark">
              <Link href="/wissen" className="hover:text-primary transition-colors">
                {menuItems.wissen.label}
              </Link>
            </h4>
            <ul className="space-y-2 text-sm text-dark/70">
              {menuItems.wissen.items.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-dark">
              Rechtliches
            </h4>
            <ul className="space-y-2 text-sm text-dark/70">
              <li>
                <Link href="/impressum" className="hover:text-primary transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="hover:text-primary transition-colors">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/agb" className="hover:text-primary transition-colors">
                  AGB
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="hover:text-primary transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-dark/60">
          <p>© {new Date().getFullYear()} Tai Chi Academy OÜ. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}






