import { useEffect, useState } from 'react'
import { NavLink, Link, Outlet } from 'react-router-dom'
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react'
import { profile } from '../data'

const links = [
  ['Home', '/'], ['About', '/about'], ['Services', '/services'],
  ['Experience', '/experience'], ['Projects', '/projects'],
  ['Achievements', '/achievements'], ['Contact', '/contact']
]

export default function Layout() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light'

    try {
      const savedTheme = window.localStorage.getItem('thaheed-theme')
      if (savedTheme) return savedTheme
    } catch {
      // Ignore storage access issues so the app can still render
    }

    return typeof window.matchMedia === 'function' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    try {
      window.localStorage.setItem('thaheed-theme', theme)
    } catch {
      // Ignore storage access issues so the app can still render
    }
  }, [theme])

  return (
    <div className={theme === 'dark' ? 'site dark' : 'site light'}>
      <header className="header">
        <Link to="/" className="brand" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark">ST</span><span>THAHEED<span className="brand-dot">.</span></span>
        </Link>
        <button type="button" className="mobile-menu icon-button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={20}/> : <Menu size={20}/>} 
        </button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          {links.map(([label, path]) => <NavLink key={path} to={path} end={path === '/'} onClick={() => setMenuOpen(false)}>{label}</NavLink>)}
        </nav>
        <div className="header-actions">
          <button type="button" className="icon-button" aria-label="Toggle colour theme" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? <Sun size={18}/> : <Moon size={18}/>}
          </button>
          <Link className="button button-small" to="/contact">Let's talk <ArrowUpRight size={15}/></Link>
        </div>
      </header>
      <main><Outlet /></main>
      <footer className="footer">
        <div><strong>Shaik Thaheed<span className="brand-dot">.</span></strong><p>Digital marketing built around visibility, experience and measurable progress.</p></div>
        <div className="footer-links"><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={profile.x} target="_blank" rel="noreferrer">X / Twitter</a><a href={`mailto:${profile.email}`}>Email</a></div>
        <small>© {new Date().getFullYear()} Shaik Thaheed. All rights reserved.</small>
      </footer>
    </div>
  )
}
