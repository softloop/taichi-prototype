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
    <nav className="sticky top-0 z-50 border-b border-border bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Links vom Logo */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {leftMenuItems.map((item, idx) => {
              if (item.type === 'link') {
                return (
                  <Link
                    key={idx}
                    href={item.href}
                    className="text-sm font-semibold uppercase tracking-wider text-dark hover:text-primary"
                  >
                    {item.label}
                  </Link>
                )
              } else {
                return (
                  <div
                    key={item.key}
                    className="relative"
                    onMouseEnter={() => setOpenMenu(item.key)}
                    onMouseLeave={() => setOpenMenu(null)}
                  >
                    <button className="text-sm font-semibold uppercase tracking-wider text-dark hover:text-primary">
                      {item.label}
                    </button>
                    {openMenu === item.key && (
                      <div className="absolute left-0 top-full mt-2 w-64 rounded-lg border border-border bg-white p-6 shadow-lg">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block py-3 hover:text-primary"
                            onClick={() => setOpenMenu(null)}
                          >
                            <div className="font-semibold text-dark">{subItem.label}</div>
                            <div className="mt-1 text-sm text-dark/70">{subItem.desc}</div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }
            })}
          </div>

          {/* Logo in der Mitte */}
          <Link href="/" className="font-display text-2xl font-normal text-dark">
            Tai Chi Academy
          </Link>

          {/* Rechts vom Logo */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {rightMenuItems.map((item, idx) => {
              if (item.type === 'link') {
                const isLogin = item.label === 'LOGIN'
                const baseClasses =
                  'text-sm font-semibold uppercase tracking-wider transition-colors'
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
              } else {
                return (
                  <div
                    key={item.key}
                    className="relative"
                    onMouseEnter={() => setOpenMenu(item.key)}
                    onMouseLeave={() => setOpenMenu(null)}
                  >
                    <button className="text-sm font-semibold uppercase tracking-wider text-dark hover:text-primary">
                      {item.label}
                    </button>
                    {openMenu === item.key && (
                      <div className="absolute right-0 top-full mt-2 w-64 rounded-lg border border-border bg-white p-6 shadow-lg">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block py-3 hover:text-primary"
                            onClick={() => setOpenMenu(null)}
                          >
                            <div className="font-semibold text-dark">{subItem.label}</div>
                            <div className="mt-1 text-sm text-dark/70">{subItem.desc}</div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }
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
                <div className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
                  {menu.label}
                </div>
                {menu.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block py-2 text-dark hover:text-primary"
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



