import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { siteConfig } from '../content/siteConfig.js'

const emailJsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_FEEDBACK_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
}

function FeedbackPage() {
  const { feedback } = siteConfig
  const formOpenedAt = useRef(null)
  const [messageLength, setMessageLength] = useState(0)
  const [selectedRating, setSelectedRating] = useState('')
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ type: 'idle', message: '' })

  useEffect(() => {
    formOpenedAt.current = Date.now()
  }, [])

  function clearError(field) {
    setErrors((currentErrors) => {
      if (!currentErrors[field]) return currentErrors
      return { ...currentErrors, [field]: undefined }
    })
  }

  function validate(values) {
    const nextErrors = {}

    if (!values.category) nextErrors.category = 'Choose a feedback category.'
    if (!values.rating) nextErrors.rating = 'Choose a rating.'
    if (values.name.length > feedback.nameMaxLength) nextErrors.name = `Name must be ${feedback.nameMaxLength} characters or fewer.`
    if (!values.message) nextErrors.message = 'Enter your feedback message.'
    else if (values.message.length < feedback.messageMinLength) nextErrors.message = `Feedback must be at least ${feedback.messageMinLength} characters.`
    else if (values.message.length > feedback.messageMaxLength) nextErrors.message = `Feedback must be ${feedback.messageMaxLength} characters or fewer.`

    return nextErrors
  }

  async function handleSubmit(event) {
    event.preventDefault()
    if (status.type === 'sending') return

    const form = event.currentTarget
    const formData = new FormData(form)
    const values = {
      category: String(formData.get('category') ?? ''),
      rating: String(formData.get('rating') ?? ''),
      name: String(formData.get('name') ?? '').trim(),
      message: String(formData.get('message') ?? '').trim(),
      website: String(formData.get('website') ?? '').trim(),
    }
    const nextErrors = validate(values)

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setStatus({ type: 'idle', message: '' })
      return
    }
    if (values.website) return
    if (!formOpenedAt.current || Date.now() - formOpenedAt.current < feedback.minimumFormFillMs) {
      setStatus({ type: 'error', message: 'Please take a moment to review your feedback before submitting.' })
      return
    }
    if (!emailJsConfig.serviceId || !emailJsConfig.templateId || !emailJsConfig.publicKey) {
      setStatus({ type: 'error', message: 'Feedback delivery is not configured yet. Please try again later.' })
      return
    }

    setErrors({})
    setStatus({ type: 'sending', message: 'Submitting your feedback…' })

    try {
      const ratingNumber = Number(values.rating)
      await emailjs.send(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        {
          feedback_category: values.category,
          feedback_rating: ratingNumber,
          feedback_rating_label: feedback.ratings[ratingNumber - 1],
          feedback_name: values.name || 'Anonymous',
          feedback_message: values.message,
        },
        { publicKey: emailJsConfig.publicKey },
      )
      form.reset()
      setMessageLength(0)
      setSelectedRating('')
      formOpenedAt.current = Date.now()
      setStatus({ type: 'success', message: 'Thanks for your feedback. EmailJS accepted your submission; inbox delivery is not guaranteed.' })
    } catch {
      setStatus({ type: 'error', message: 'Your feedback could not be submitted. Please try again.' })
    }
  }

  return (
    <div className="feedback-page">
      <header className="feedback-page__intro">
        <p className="page-placeholder__eyebrow">Portfolio feedback</p>
        <h1>Help improve this portfolio.</h1>
        <p>Share what worked well, what could be clearer, or an idea that would make the experience better.</p>
      </header>

      <section className="feedback-form-panel" aria-labelledby="feedback-form-title">
        <h2 id="feedback-form-title">Send feedback</h2>
        <p>Your feedback is submitted through the configured email service.</p>
        <form className="feedback-form" noValidate onSubmit={handleSubmit} aria-busy={status.type === 'sending'}>
          <div className="feedback-form__field">
            <label htmlFor="feedback-category">Feedback category</label>
            <select id="feedback-category" name="category" onChange={() => clearError('category')} aria-invalid={Boolean(errors.category)} aria-describedby={errors.category ? 'feedback-category-error' : undefined} disabled={status.type === 'sending'} defaultValue="">
              <option value="" disabled>Choose a category</option>
              {feedback.categories.map((category) => <option key={category} value={category}>{category}</option>)}
            </select>
            {errors.category && <p id="feedback-category-error" className="feedback-form__error">{errors.category}</p>}
          </div>

          <fieldset className="feedback-form__field feedback-form__rating" aria-describedby={errors.rating ? 'feedback-rating-error' : undefined}>
            <legend>Rating</legend>
            <div className="feedback-form__stars">
              {feedback.ratings.map((label, index) => {
                const value = String(index + 1)
                return (
                  <label key={label} className={`feedback-form__star${selectedRating === value ? ' feedback-form__star--selected' : ''}`} title={`${value} out of 5: ${label}`}>
                    <input type="radio" name="rating" value={value} checked={selectedRating === value} onChange={() => { setSelectedRating(value); clearError('rating') }} disabled={status.type === 'sending'} />
                    <span aria-hidden="true">★</span>
                    <span className="sr-only">{value} out of 5: {label}</span>
                  </label>
                )
              })}
            </div>
            <p className="feedback-form__rating-label" aria-live="polite">{selectedRating ? feedback.ratings[Number(selectedRating) - 1] : 'Select a rating from 1 to 5.'}</p>
            {errors.rating && <p id="feedback-rating-error" className="feedback-form__error">{errors.rating}</p>}
          </fieldset>

          <div className="feedback-form__field">
            <label htmlFor="feedback-name">Name <span>(optional)</span></label>
            <input id="feedback-name" name="name" autoComplete="name" maxLength={feedback.nameMaxLength} onChange={() => clearError('name')} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'feedback-name-error' : undefined} disabled={status.type === 'sending'} />
            {errors.name && <p id="feedback-name-error" className="feedback-form__error">{errors.name}</p>}
          </div>

          <div className="feedback-form__field">
            <label htmlFor="feedback-message">Feedback message</label>
            <textarea id="feedback-message" name="message" rows="7" maxLength={feedback.messageMaxLength} onChange={(event) => { setMessageLength(event.target.value.length); clearError('message') }} aria-invalid={Boolean(errors.message)} aria-describedby={`feedback-message-guidance feedback-message-count${errors.message ? ' feedback-message-error' : ''}`} disabled={status.type === 'sending'} />
            <div className="feedback-form__meta" id="feedback-message-guidance">
              <span>At least {feedback.messageMinLength} characters</span>
              <span id="feedback-message-count" aria-live="polite">{messageLength} / {feedback.messageMaxLength}</span>
            </div>
            {errors.message && <p id="feedback-message-error" className="feedback-form__error">{errors.message}</p>}
          </div>

          <div className="feedback-form__honeypot" aria-hidden="true">
            <label htmlFor="feedback-website">Website</label>
            <input id="feedback-website" name="website" type="text" tabIndex="-1" autoComplete="off" />
          </div>

          <button className="feedback-form__submit" type="submit" disabled={status.type === 'sending'}>
            {status.type === 'sending' ? 'Submitting…' : 'Submit feedback'}
          </button>
          <p className={`feedback-form__status${status.type === 'error' ? ' feedback-form__status--error' : ''}${status.type === 'success' ? ' feedback-form__status--success' : ''}`} role="status" aria-live="polite">{status.message}</p>
        </form>
      </section>
    </div>
  )
}

export default FeedbackPage
