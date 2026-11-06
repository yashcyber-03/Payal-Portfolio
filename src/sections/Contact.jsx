import { useState } from 'react'
import { Check, Loader2, Mail } from 'lucide-react'
import { creator, hasEmail } from '../data/creator'
import { social } from '../data/social'
import { projectTypes } from '../data/offers'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import ExtLink from '../components/ExtLink'
const empty = { name: '', email: '', brand: '', type: '', message: '' }
const endpoint = import.meta.env.VITE_FORM_ENDPOINT
function validate(v) {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Please enter your name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Please enter a valid email address.'
  if (v.brand.trim().length < 2) e.brand = 'Please enter your brand or company.'
  if (!v.type) e.type = 'Please choose a project type.'
  if (v.message.trim().length < 20) e.message = 'Please write at least 20 characters.'
  return e
}
function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="eyebrow block mb-1">{label}</label>{children}
      {error && <p id={`${id}-err`} role="alert" className="mt-1 text-xs text-red-700">{error}</p>}
    </div>
  )
}
export default function Contact() {
  const [v, setV] = useState(empty)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const set = (k) => (e) => setV({ ...v, [k]: e.target.value })
  const p = (k) => ({ id: k, value: v[k], onChange: set(k), className: 'field', 'aria-invalid': !!errors[k], 'aria-describedby': errors[k] ? `${k}-err` : undefined })
  const submit = async (e) => {
    e.preventDefault()
    const er = validate(v); setErrors(er)
    if (Object.keys(er).length) return setStatus('error')
    setStatus('loading')
    if (!endpoint) return setTimeout(() => setStatus('ready'), 500)
    try {
      const r = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(v) })
      setStatus(r.ok ? 'sent' : 'failed')
    } catch { setStatus('failed') }
  }
  const mailto = hasEmail && `mailto:${creator.email}?subject=${encodeURIComponent(`Project enquiry: ${v.brand}`)}&body=${encodeURIComponent(`Name: ${v.name}\nEmail: ${v.email}\nBrand: ${v.brand}\nType: ${v.type}\n\n${v.message}`)}`
  const done = status === 'sent' || status === 'ready'
  return (
    <Section id="contact" eyebrow="Let's work together" title="Tell me about your project.">
      <div className="grid lg:grid-cols-12 gap-14">
        <Reveal className="lg:col-span-4">
          <p className="eyebrow">Business email</p>
          {hasEmail ? <a className="link mt-1" href={`mailto:${creator.email}`}>{creator.email}</a> : <p className="mt-1">{creator.email}</p>}
          <p className="eyebrow mt-8">Elsewhere</p>
          <ul className="mt-1 space-y-1 text-sm">{social.map((s) => <li key={s.id}><ExtLink href={s.url}>{s.name}</ExtLink></li>)}</ul>
        </Reveal>
        <Reveal className="lg:col-span-8" delay={0.1}>
          {done ? (
            <div role="status" className="border border-charcoal/25 p-8">
              <Check className="text-brown mb-3" />
              {status === 'sent' ? <h3 className="font-serif text-3xl">Thank you. Your enquiry was sent.</h3> : <>
                <h3 className="font-serif text-3xl mb-2">Ready, but not sent.</h3>
                <p className="text-charcoal/70">No form service is connected, so nothing has been delivered. {mailto ? 'Send it from your email app below.' : 'Set VITE_CONTACT_EMAIL or VITE_FORM_ENDPOINT (see README).'}</p>
                {mailto && <a href={mailto} className="btn btn-dark mt-5"><Mail size={14} /> Open in email app</a>}</>}
              <button className="link mt-5 block" onClick={() => { setV(empty); setStatus('idle') }}>Send another</button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate aria-label="Project enquiry" className="grid gap-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <Field id="name" label="Name" error={errors.name}><input {...p('name')} autoComplete="name" /></Field>
                <Field id="email" label="Email" error={errors.email}><input {...p('email')} type="email" autoComplete="email" /></Field>
              </div>
              <Field id="brand" label="Brand / Company" error={errors.brand}><input {...p('brand')} autoComplete="organization" /></Field>
              <Field id="type" label="Project type" error={errors.type}><select {...p('type')}><option value="">Select…</option>{projectTypes.map((t) => <option key={t}>{t}</option>)}</select></Field>
              <Field id="message" label="Message" error={errors.message}><textarea {...p('message')} rows={4} /></Field>
              {status === 'error' && <p role="alert" className="text-sm text-red-700">Please fix the highlighted fields.</p>}
              {status === 'failed' && <p role="alert" className="text-sm text-red-700">Sending failed. Please try again or email directly.</p>}
              <button type="submit" disabled={status === 'loading'} className="btn btn-dark justify-center sm:justify-self-start disabled:opacity-60">
                {status === 'loading' ? <><Loader2 size={14} className="animate-spin" /> Sending…</> : 'Send Inquiry'}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </Section>
  )
}
