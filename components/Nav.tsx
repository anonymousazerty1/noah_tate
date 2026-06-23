'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { href: '/work',  label: 'Work'  },
  { href: '/video', label: 'Video' },
  { href: '/shows', label: 'Shows' },
  { href: '/bio',   label: 'Bio'   },
  { href: 'mailto:anthony.debaere@gmail.com', label: 'Contact', external: true },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const needsScrim = pathname === '/' || pathname.startsWith('/bio')

  const close = () => setOpen(false)

  return (
    <nav className={needsScrim ? 'has-scrim' : ''}>
      <Link href="/" className="n-name">
        Anthony De Baere
      </Link>

      <button
        className={`n-burger${open ? ' open' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label="Menu"
        aria-expanded={open}
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`n-links${open ? ' n-links--open' : ''}`}>
        {NAV_LINKS.map(({ href, label, external }) => (
          <li key={href}>
            {external ? (
              <a href={href} onClick={close}>{label}</a>
            ) : (
              <Link
                href={href}
                className={pathname.startsWith(href) ? 'active' : ''}
                onClick={close}
              >
                {label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}
