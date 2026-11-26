import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { siteConfig } from '../content/siteConfig.js'

const emailJsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
}

function ContactPage() {
  const [status, setStatus] = useState({ type: 'idle', message: '' })
  const [copyToast, setCopyToast] = useState(null)
  const copyToastTimeout = useRef(null)
  const contact = siteConfig.contact

  useEffect(() => () => window.clearTimeout(copyToastTimeout.current), [])

  async function copyContactDetail(value, label) {
    window.clearTimeout(copyToastTimeout.current)
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable')
      await navigator.clipboard.writeText(value)
      setCopyToast({ type: 'success', message: `${label} copied!` })
    } catch {
      setCopyToast({ type: 'error', message: `Couldn't copy ${label.toLowerCase()}. Please copy it manually.` })
    }
    copyToastTimeout.current = window.setTimeout(() => setCopyToast(null), 2800)
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget

    if (status.type === 'sending') return
    if (!form.reportValidity()) return
    const formData = new FormData(form)
    const name = String(formData.get('name')).trim()
    const senderEmail = String(formData.get('email')).trim()
    const subject = String(formData.get('subject')).trim()
    const message = String(formData.get('message')).trim()

    if (!name || !senderEmail || !subject || !message) {
      setStatus({ type: 'error', message: 'Please complete each field with non-whitespace text.' })
      return
    }
    if (!emailJsConfig.serviceId || !emailJsConfig.templateId || !emailJsConfig.publicKey) {
      setStatus({ type: 'error', message: 'The contact form is not configured yet. Please use the email or phone contact option.' })
      return
    }

    setStatus({ type: 'sending', message: 'Sending your message…' })
    try {
      await emailjs.send(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        { name, email: senderEmail, subject, message },
        { publicKey: emailJsConfig.publicKey },
      )
      form.reset()
      setStatus({ type: 'success', message: 'Message submitted successfully. EmailJS accepted the request; inbox delivery is not guaranteed.' })
    } catch {
      setStatus({ type: 'error', message: 'Your message could not be submitted. Please try again or use the email contact option.' })
    }
  }

  return (
    <div className="contact-page">
      <header className="contact-page__intro">
        <p className="page-placeholder__eyebrow">Get in touch</p>
        <h1>Contact</h1>
        <p>For project enquiries, collaboration, or a conversation about technology, use one of the options below.</p>
      </header>

      <div className="contact-page__layout">
        <section className="contact-options" aria-labelledby="contact-options-title">
          <h2 id="contact-options-title">Contact options</h2>
          <ul>
            <li>
              <span>Email</span>
              {contact.email
                ? (
                  <div className="contact-options__value">
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                    <button className="contact-copy-button" type="button" onClick={() => copyContactDetail(contact.email, 'Email')} aria-label="Copy email address">
                      Copy
                    </button>
                  </div>
                )
                : <span className="contact-options__pending">Address pending</span>}
            </li>
            <li>
              <span>Phone</span>
              <div className="contact-options__value">
                <a href={`tel:${contact.phone.replaceAll(' ', '')}`}>{contact.phone}</a>
                <button className="contact-copy-button" type="button" onClick={() => copyContactDetail(contact.phone, 'Phone number')} aria-label="Copy phone number">
                  Copy
                </button>
              </div>
            </li>
            <li>
              <span>LinkedIn</span>
              {contact.linkedin
                ? <a href={contact.linkedin} target="_blank" rel="noreferrer">View LinkedIn profile</a>
                : <span className="contact-options__pending">Profile link pending</span>}
            </li>
            <li>
              <span>GitHub</span>
              {contact.github
                ? <a href={contact.github} target="_blank" rel="noreferrer">View GitHub profile</a>
                : <span className="contact-options__pending">Profile link pending</span>}
            </li>
          </ul>
        </section>

        <section className="contact-form-panel" aria-labelledby="contact-form-title">
          <h2 id="contact-form-title">Send a message</h2>
          <p>Your message is submitted through the configured email service.</p>
          <form className="contact-form" onSubmit={handleSubmit} aria-busy={status.type === 'sending'}>
            <label htmlFor="contact-name">Name</label>
            <input id="contact-name" name="name" autoComplete="name" required maxLength={100} disabled={status.type === 'sending'} />

            <label htmlFor="contact-email">Email</label>
            <input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} disabled={status.type === 'sending'} />

            <label htmlFor="contact-subject">Subject</label>
            <input id="contact-subject" name="subject" required maxLength={160} disabled={status.type === 'sending'} />

            <label htmlFor="contact-message">Message</label>
            <textarea id="contact-message" name="message" rows="6" required maxLength={5000} disabled={status.type === 'sending'} />

            <button className="contact-form__submit" type="submit" disabled={status.type === 'sending'}>
              {status.type === 'sending' ? 'Sending…' : 'Send message'}
            </button>
            <p
              className={`contact-form__feedback${status.type === 'error' ? ' contact-form__feedback--error' : ''}`}
              role="status"
              aria-live="polite"
            >{status.message}</p>
          </form>
        </section>
      </div>
      {copyToast && (
        <div className={`contact-copy-toast contact-copy-toast--${copyToast.type}`} role={copyToast.type === 'error' ? 'alert' : 'status'} aria-live={copyToast.type === 'error' ? 'assertive' : 'polite'}>
          {copyToast.message}
        </div>
      )}
    </div>
  )
}

export default ContactPage
