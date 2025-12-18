'use client'

import Link from 'next/link'
import { useState } from 'react'
import { menuItems } from '@/data/menu'

export default function Nav() {
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  // Links vom Logo: Home, Kurse, Methode
  const leftMenuItems = [
    { type: 'link', href: '/', label: 'HOME' },
    { type: 'dropdown', key: 'kurse', ...menuItems.kurse },
    { type: 'dropdown', key: 'methode', ...menuItems.methode },
  ]

  // Rechts vom Logo: Über uns, Wissen, Login
  const rightMenuItems = [
    { type: 'dropdown', key: 'ueber-uns', ...menuItems['ueber-uns'] },
    { type: 'dropdown', key: 'wissen', ...menuItems.wissen },
    { type: 'link', href: '/login', label: 'LOGIN' },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Links vom Logo */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {leftMenuItems.map((item, idx) => {
              if (item.type === 'link' && item.href) {
                return (
                  <Link
                    key={idx}
                    href={item.href}
                    className="text-sm font-semibold uppercase tracking-wider text-dark hover:text-primary py-2"
                  >
                    {item.label}
                  </Link>
                )
              } else if ('key' in item && item.key) {
                const overviewHref = `/${item.key}`
                return (
                  <div
                    key={item.key}
                    className="relative"
                    onMouseEnter={() => setOpenMenu(item.key)}
                    onMouseLeave={() => setOpenMenu(null)}
                  >
                    <Link
                      href={overviewHref}
                      className="text-sm font-semibold uppercase tracking-wider text-dark hover:text-primary py-2"
                    >
                      {item.label}
                    </Link>
                    {/* Unsichtbare Verbindungsbrücke - erweitert die aktive Fläche vom Button zum Megamenü */}
                    {openMenu === item.key && (
                      <div className="absolute left-0 right-0 top-full h-4 bg-transparent" />
                    )}
                  </div>
                )
              }
              return null
            })}
          </div>

          {/* Logo in der Mitte */}
          <Link href="/" className="font-display text-2xl font-normal text-dark">
            Tai Chi Academy
          </Link>

          {/* Rechts vom Logo */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {rightMenuItems.map((item, idx) => {
              if (item.type === 'link' && item.href) {
                const isLogin = item.label === 'LOGIN'
                const baseClasses =
                  'text-sm font-semibold uppercase tracking-wider transition-colors py-2'
                const loginClasses =
                  'rounded-full bg-background-alt px-4 py-2 text-dark hover:bg-primary hover:text-white'
                const defaultClasses = 'text-dark hover:text-primary'

                return (
                  <Link
                    key={idx}
                    href={item.href}
                    className={`${baseClasses} ${isLogin ? loginClasses : defaultClasses}`}
                  >
                    {item.label}
                  </Link>
                )
              } else if ('key' in item && item.key) {
                const overviewHref = `/${item.key}`
                return (
                  <div
                    key={item.key}
                    className="relative"
                    onMouseEnter={() => setOpenMenu(item.key)}
                    onMouseLeave={() => setOpenMenu(null)}
                  >
                    <Link
                      href={overviewHref}
                      className="text-sm font-semibold uppercase tracking-wider text-dark hover:text-primary py-2"
                    >
                      {item.label}
                    </Link>
                    {/* Unsichtbare Verbindungsbrücke - erweitert die aktive Fläche vom Button zum Megamenü */}
                    {openMenu === item.key && (
                      <div className="absolute left-0 right-0 top-full h-4 bg-transparent" />
                    )}
                  </div>
                )
              }
              return null
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setOpenMenu(openMenu ? null : 'mobile')}
              className="text-dark"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>


      {/* Desktop MegaMenu: volle Breite unter dem Hauptmenü */}
      {openMenu && openMenu !== 'mobile' && (
        <div 
          className="hidden border-t border-border bg-white shadow-lg lg:block absolute left-0 right-0 top-full"
          onMouseEnter={() => setOpenMenu(openMenu)}
          onMouseLeave={() => setOpenMenu(null)}
        >
          {/* Unsichtbare Verbindungsbrücke oben - verbindet Button und Megamenü nahtlos */}
          <div className="absolute left-0 right-0 -top-4 h-4 bg-transparent" />
          <div className="w-full px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="flex flex-wrap justify-center gap-8">
                {(menuItems[openMenu as keyof typeof menuItems]?.items ?? []).map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group block rounded-lg border border-transparent p-6 transition-all hover:border-primary/20 hover:bg-background-alt hover:shadow-md w-full max-w-xs md:w-auto md:flex-1 md:min-w-[250px] md:max-w-[300px]"
                    onClick={() => setOpenMenu(null)}
                  >
                    <div className="mb-2 font-display text-xl font-normal text-dark group-hover:text-primary transition-colors">
                      {item.label}
                    </div>
                    <div className="text-sm text-dark/70 leading-relaxed">
                      {item.desc}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {openMenu === 'mobile' && (
        <div className="border-t border-border bg-white lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="mb-4 block text-sm font-semibold uppercase tracking-wider text-primary"
              onClick={() => setOpenMenu(null)}
            >
              HOME
            </Link>
            {Object.entries(menuItems).map(([key, menu]) => (
              <div key={key} className="mb-6">
                <Link
                  href={`/${key}`}
                  className="mb-2 block text-sm font-semibold uppercase tracking-wider text-primary"
                  onClick={() => setOpenMenu(null)}
                >
                  {menu.label}
                </Link>
                {menu.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block py-2 pl-4 text-dark hover:text-primary"
                    onClick={() => setOpenMenu(null)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ))}
            <Link
              href="/login"
              className="mt-4 block text-sm font-semibold uppercase tracking-wider text-primary"
              onClick={() => setOpenMenu(null)}
            >
              LOGIN
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}



