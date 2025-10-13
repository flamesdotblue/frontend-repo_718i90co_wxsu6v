import React from 'react'

const projects = [
  { title: 'Hillside Residence', location: 'Napa Valley', year: '2024' },
  { title: 'Courtyard House', location: 'Austin', year: '2023' },
  { title: 'Gallery Loft', location: 'Brooklyn', year: '2022' },
  { title: 'Coastal Pavilion', location: 'Santa Barbara', year: '2024' },
  { title: 'Atrium Workspace', location: 'Seattle', year: '2023' },
  { title: 'Desert Retreat', location: 'Sedona', year: '2022' },
]

export default function Projects() {
  return (
    <section id="work" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">Selected Work</h2>
            <p className="mt-3 text-slate-600 max-w-2xl">
              A concise selection of residences and commercial spaces focused on light, proportion, and material honesty.
            </p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-white transition-colors">
            Request portfolio
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <article key={idx} className="group overflow-hidden rounded-xl border border-slate-200 bg-white">
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-200 via-slate-100 to-white transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 flex items-end p-4">
                  <span className="inline-flex items-center rounded-full bg-white/80 backdrop-blur px-3 py-1 text-xs font-medium text-slate-700 border border-white/70">
                    {p.year}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                <p className="text-sm text-slate-600 mt-1">{p.location}</p>
                <div className="mt-4 flex items-center justify-between">
                  <button className="text-sm font-medium text-slate-900 hover:text-slate-700">
                    View details
                  </button>
                  <div className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-colors">
                    →
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
