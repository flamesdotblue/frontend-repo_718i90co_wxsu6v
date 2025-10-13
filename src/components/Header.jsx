import React from 'react'

export default function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="group inline-flex items-center gap-2">
          <div className="h-8 w-8 rounded-sm bg-gradient-to-br from-slate-900 to-slate-700" />
          <span className="text-slate-900 text-lg font-semibold tracking-tight">
            Atelier Modern
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
          <a href="#bio" className="hover:text-slate-900 transition-colors">About</a>
          <a href="#work" className="hover:text-slate-900 transition-colors">Work</a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
          <a href="#contact" className="ml-2 inline-flex items-center rounded-full border border-slate-300 px-4 py-2 text-slate-900 hover:bg-slate-900 hover:text-white transition-colors">
            Start a Project
          </a>
        </nav>
      </div>
    </header>
  )
}
