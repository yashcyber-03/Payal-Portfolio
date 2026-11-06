import { useState } from 'react'
import { Check, Loader2, Mail } from 'lucide-react'
import { collabTypes, services, site } from '../data/content'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
const empty = { name: '', brand: '', email: '', type: '', message: '' }
function validate(v) {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Please enter your name.'
  if (v.brand.trim().length < 2) e.brand = 'Please enter your brand or company.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Please enter a valid email address.'
  if (!v.type) e.type = 'Please choose a collaboration type.'
  if (v.message.trim().length < 20) e.message = 'Please write at least 20 characters.'
  return e
}
function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="eyebrow block mb-1">{label}</label>
      {children}
      {error && <p id={`${id}-err`} role="alert" className="mt-1 text-xs text-red-700">{error}</p>}
    </div>
  )
}
export default function Collaborations() {
  const [v, setV] = useState(empty)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const set = (k) => (e) => setV({ ...v, [k]: e.target.value })
  const props = (k) => ({ id: k, value: v[k], onChange: set(k), className: 'field', 'aria-invalid': !!errors[k], 'aria-describedby': errors[k] ? `${k}-err` : undefined })
  const submit = (e) => {
    e.preventDefault()
    const er = validate(v); setErrors(er)
    if (Object.keys(er).length) { setStatus('error'); return }
    setStatus('loading')
    // No backend is configured, so nothing is sent. The enquiry is only prepared locally.
    setTimeout(() => setStatus('ready'), 600)
  }
  const mailto = site.email && `mailto:${site.email}?subject=${encodeURIComponent(`Collaboration enquiry: ${v.brand}`)}&body=${encodeURIComponent(`Name: ${v.name}\nBrand: ${v.brand}\nEmail: ${v.email}\nType: ${v.type}\n\n${v.message}`)}`
  return (
    <Section id="work" eyebrow="Work together" title="Let's Create Something Together." className="bg-beige" intro="Sample positioning copy: story-led partnerships that fit naturally into everyday content. Edit the wording in src/data/content.js.">
      <div className="grid lg:grid-cols-12 gap-14">
        <Reveal className="lg:col-span-5">
          <ul className="border-t border-charcoal/20">
            {services.map((s) => (
              <li key={s.t} className="py-5 border-b border-charcoal/20"><h3 className="font-serif text-2xl">{s.t}</h3><p className="text-sm text-charcoal/70 mt-1">{s.d}</p></li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="lg:col-span-7" delay={0.1}>
          {status === 'ready' ? (
            <div role="status" className="bg-cream p-6 md:p-10">
              <Check className="text-brown mb-4" />
              <h3 className="font-serif text-3xl mb-3">Your enquiry is ready, but not sent yet.</h3>
              <p className="text-charcoal/70 leading-relaxed">This site has no backend connected, so nothing has been delivered.{mailto ? ' Use the button below to send it from your email app.' : ' Add an email address in .env (VITE_CONTACT_EMAIL) to enable sending by email.'}</p>
              <div className="mt-6 flex flex-wrap gap-4">
                {mailto && <a href={mailto} className="btn btn-dark"><Mail size={14} /> Open in email app</a>}
                <button className="btn btn-line" onClick={() => { setV(empty); setStatus('idle') }}>Start over</button>
              </div>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="bg-cream p-6 md:p-10 grid gap-7" aria-label="Collaboration enquiry">
              <div className="grid sm:grid-cols-2 gap-7">
                <Field id="name" label="Name" error={errors.name}><input {...props('name')} autoComplete="name" /></Field>
                <Field id="brand" label="Brand / Company" error={errors.brand}><input {...props('brand')} autoComplete="organization" /></Field>
              </div>
              <Field id="email" label="Email" error={errors.email}><input {...props('email')} type="email" autoComplete="email" /></Field>
              <Field id="type" label="Collaboration type" error={errors.type}>
                <select {...props('type')}><option value="">Select…</option>{collabTypes.map((t) => <option key={t}>{t}</option>)}</select>
              </Field>
              <Field id="message" label="Message" error={errors.message}><textarea {...props('message')} rows={4} /></Field>
              {status === 'error' && <p role="alert" className="text-sm text-red-700">Please fix the highlighted fields.</p>}
              <button type="submit" disabled={status === 'loading'} className="btn btn-dark justify-center disabled:opacity-60">
                {status === 'loading' ? <><Loader2 size={14} className="animate-spin" /> Preparing…</> : 'Prepare Enquiry'}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </Section>
  )
}
