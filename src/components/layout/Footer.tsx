import Link from 'next/link'
import { menuItems } from '@/data/menu'
import { kontaktDetail } from '@/data/content'

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
            {/* Social Media Icons */}
            <div className="mt-4 flex gap-4">
              {kontaktDetail.socialMedia.map((social, idx) => {
                const iconContent = (
                  <>
                    {social.name === 'YouTube' && (
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    )}
                    {social.name === 'Facebook' && (
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    )}
                    {social.name === 'Instagram' && (
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.26 0 12 0zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    )}
                  </>
                )

                if (social.href === '#') {
                  return (
                    <span
                      key={idx}
                      className="text-dark/70 cursor-default"
                      aria-label={social.name}
                      title={social.name}
                    >
                      {iconContent}
                    </span>
                  )
                }

                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark/70 hover:text-primary transition-colors"
                    aria-label={social.name}
                    title={social.name}
                  >
                    {iconContent}
                  </a>
                )
              })}
            </div>
          </div>

          {/* Kurse */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-dark">
              <Link href="/kurse" className="hover:text-primary transition-colors">
                {menuItems.kurse.label}
              </Link>
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
              <Link href="/methode" className="hover:text-primary transition-colors">
                {menuItems.methode.label}
              </Link>
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






