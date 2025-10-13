import React, { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ type: 'idle', message: '' })

  function validateEmail(email) {
    return /[^\s@]+@[^\s@]+\.[^\s@]+/.test(email)
  }

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: 'error', message: 'Please complete all required fields.' })
      return
    }
    if (!validateEmail(form.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' })
      return
    }

    // In a full setup, this would POST to your backend. For now we show a success state.
    setStatus({ type: 'success', message: 'Thank you — your message has been sent.' })
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">Let’s collaborate</h2>
          <p className="mt-3 text-slate-600">
            Share a few details about your project — timeline, scope, and any references. I typically respond within 1–2 business days.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-slate-200 p-6 sm:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/20"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/20"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/20"
                    placeholder="Tell me about your project, site, timeline, and budget."
                  />
                </div>
              </div>

              {status.type !== 'idle' && (
                <div className={`mt-6 rounded-md p-3 text-sm ${status.type === 'success' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-rose-50 text-rose-700 border border-rose-200'}`}>
                  {status.message}
                </div>
              )}

              <div className="mt-6 flex items-center gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center rounded-full bg-slate-900 text-white px-6 py-3 text-sm font-medium hover:bg-slate-800 transition-colors"
                >
                  Send message
                </button>
                <p className="text-sm text-slate-500">No spam — ever.</p>
              </div>
            </form>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-200 p-6 sm:p-8 bg-slate-50">
              <h3 className="text-base font-semibold text-slate-900">Studio</h3>
              <p className="mt-2 text-slate-600">By appointment only</p>
              <div className="mt-6 grid grid-cols-1 gap-4 text-sm text-slate-700">
                <div>
                  <p className="font-medium text-slate-900">Email</p>
                  <a href="mailto:studio@example.com" className="text-slate-700 hover:text-slate-900">studio@example.com</a>
                </div>
                <div>
                  <p className="font-medium text-slate-900">Phone</p>
                  <a href="tel:+1234567890" className="text-slate-700 hover:text-slate-900">+1 (234) 567-890</a>
                </div>
                <div>
                  <p className="font-medium text-slate-900">Location</p>
                  <p className="text-slate-700">New York, NY • Serving clients worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
