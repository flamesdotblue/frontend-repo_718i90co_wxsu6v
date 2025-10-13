import React from 'react'
import Header from './components/Header'
import Bio from './components/Bio'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />

      <main>
        <Bio />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Atelier Modern — All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#bio" className="hover:text-slate-900">About</a>
            <a href="#work" className="hover:text-slate-900">Work</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
