import React from 'react'

export default function Bio() {
  return (
    <section id="bio" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <p className="uppercase tracking-[0.3em] text-xs text-slate-500 mb-4">
              Chad Johnson — Chief Architect • New York
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-slate-900">
              Designing spaces that breathe —
              elegant, functional, and unmistakably modern.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-700 max-w-2xl">
              With 15 years of experience, I craft residences and commercial environments with a refined, minimalist
              sensibility. Each project balances light, proportion, and materiality — creating calm, elevated places
              for people to live and work. From feasibility through construction, I partner closely with clients to
              realize clean, enduring architecture.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-2 text-sm">
              <span className="inline-flex items-center rounded-full border border-slate-300 px-3 py-1 text-slate-900 bg-white">15 years</span>
              <span className="inline-flex items-center rounded-full border border-slate-300 px-3 py-1 text-slate-900 bg-white">Based in New York</span>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#work" className="inline-flex items-center rounded-full bg-slate-900 text-white px-6 py-3 text-sm font-medium hover:bg-slate-800 transition-colors">
                View Work
              </a>
              <a href="#contact" className="inline-flex items-center rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50 transition-colors">
                Get in Touch
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-slate-200">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="backdrop-blur-sm bg-white/50 p-4 rounded-lg border border-white/60">
                  <p className="text-sm text-slate-600">
                    Selected by clients for clarity, restraint, and immaculate detailing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
