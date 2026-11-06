import React, { useState } from 'react';
import { CREATOR } from '../data/content';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    email: '',
    inquiryType: 'Brand Campaign',
    timeline: 'Within 2-4 Weeks',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim() || formData.message.trim().length < 15) {
      errs.message = 'Please provide at least 15 characters about your project';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(CREATOR.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="border-b border-rule bg-paper py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-rule pb-3 mb-10 sm:mb-14 font-mono text-[10px] text-ink-muted uppercase tracking-wider">
          <span>// 06 &mdash; GET IN TOUCH</span>
          <span>DIRECT CONTACT</span>
          <span>RESPONSE: &lt; 48 HOURS</span>
        </div>

        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-mono text-xs text-accent uppercase tracking-wider block mb-1">
              Start a Conversation
            </span>
            <h2 className="font-display text-3xl sm:text-5xl text-ink font-normal leading-tight">
              Let&apos;s Create Together.
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-ink-muted font-sans font-light leading-relaxed">
            Have a brand collaboration, café feature, or stay residency in mind? Drop your brief below or reach out directly on Instagram.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Direct Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 border border-rule bg-paper-subtle space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-wider text-accent block">
                DIRECT CHANNELS
              </span>

              {/* Instagram Card */}
              <div className="space-y-1">
                <span className="font-mono text-[10px] text-ink-light block">INSTAGRAM (FASTEST):</span>
                <a
                  href={CREATOR.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-xl text-ink hover:text-accent font-medium transition-colors flex items-center justify-between"
                >
                  <span>{CREATOR.handle}</span>
                  <span>&nearr;</span>
                </a>
                <p className="font-sans text-xs text-ink-muted font-light">
                  Direct message for urgent inquiries, invitations, or quick hellos.
                </p>
              </div>

              {/* Email Card with Copy Tool */}
              <div className="pt-4 border-t border-rule space-y-1.5">
                <span className="font-mono text-[10px] text-ink-light block">STUDIO EMAIL:</span>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs text-ink truncate">
                    {CREATOR.email}
                  </span>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="font-mono text-[10px] uppercase tracking-wider py-1 px-2.5 border border-rule bg-paper hover:bg-paper-dark transition-colors flex-shrink-0"
                  >
                    {copied ? '[COPIED!]' : '[COPY EMAIL]'}
                  </button>
                </div>
              </div>

              {/* Location Card */}
              <div className="pt-4 border-t border-rule space-y-1">
                <span className="font-mono text-[10px] text-ink-light block">CURRENT BASE:</span>
                <p className="font-sans text-xs text-ink font-medium">
                  {CREATOR.base} (Available Worldwide)
                </p>
              </div>
            </div>

            {/* Response Policy Card */}
            <div className="p-4 border border-rule bg-paper font-mono text-[11px] text-ink-muted space-y-1">
              <span className="text-ink font-bold block mb-0.5">// INQUIRY POLICY:</span>
              <p className="font-sans text-xs text-ink-muted font-light leading-relaxed">
                Brand proposals are reviewed Monday through Friday. Please mention campaign dates, scope, and deliverables in your note.
              </p>
            </div>
          </div>

          {/* Right Column: Clean Form (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 border border-rule bg-paper">
            {submitted ? (
              <div className="py-8 text-center space-y-5 font-mono">
                <span className="text-xs text-accent uppercase tracking-wider block">
                  // DEMO TRANSMISSION COMPLETE
                </span>
                <h3 className="font-serif text-3xl text-ink font-medium">
                  Thank You, {formData.name}!
                </h3>
                <p className="font-sans text-xs sm:text-sm text-ink-muted max-w-md mx-auto leading-relaxed font-light">
                  Your inquiry simulation for <strong className="text-ink font-semibold">{formData.inquiryType}</strong> has been received and logged in the local session.
                </p>

                <div className="p-4 border border-rule bg-paper-subtle text-left text-xs font-sans text-ink-muted space-y-1 max-w-md mx-auto">
                  <span className="font-mono text-[10px] text-ink font-bold block">
                    TRANSPARENCY NOTICE:
                  </span>
                  <p className="font-light text-xs">
                    As this is an independent front-end portfolio concept, no backend email was sent across servers. To reach Payal for real projects, please send a message directly on Instagram at{' '}
                    <a
                      href={CREATOR.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink underline font-medium"
                    >
                      {CREATOR.handle}
                    </a>.
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        brand: '',
                        email: '',
                        inquiryType: 'Brand Campaign',
                        timeline: 'Within 2-4 Weeks',
                        message: ''
                      });
                    }}
                    className="py-2.5 px-5 border border-rule hover:bg-paper-dark text-xs uppercase tracking-wider transition-colors"
                  >
                    Reset Form
                  </button>
                  <a
                    href={CREATOR.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-5 bg-ink text-paper hover:bg-ink-deep text-xs uppercase tracking-wider transition-colors"
                  >
                    Open Instagram &nearr;
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="border-b border-rule pb-3 flex items-center justify-between">
                  <h3 className="font-serif text-xl sm:text-2xl text-ink font-medium">
                    Send Inquiry Note
                  </h3>
                  <span className="font-mono text-[10px] text-ink-light uppercase">
                    * ALL FIELDS VALIDATED
                  </span>
                </div>

                {/* Inquiry Type Chips */}
                <div className="space-y-1.5 font-mono text-[11px]">
                  <label className="text-ink-light block uppercase text-[10px]">
                    INQUIRY FOCUS:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {['Brand Campaign', 'Café Review', 'Stay Residency', 'Say Hello'].map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setFormData({ ...formData, inquiryType: type })}
                        className={`py-1.5 px-3 border transition-colors ${
                          formData.inquiryType === type
                            ? 'border-ink bg-ink text-paper font-bold'
                            : 'border-rule bg-paper-subtle text-ink-muted hover:border-ink hover:text-ink'
                        }`}
                      >
                        [{type}]
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Brand */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-mono text-[10px] text-ink-light block uppercase">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Maya Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full py-2 px-3 border border-rule bg-paper text-sm text-ink focus:border-ink transition-colors font-sans placeholder:text-ink-light/50"
                    />
                    {errors.name && (
                      <span className="font-mono text-[10px] text-red-600 block">{errors.name}</span>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label className="font-mono text-[10px] text-ink-light block uppercase">
                      BRAND / ORGANIZATION
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Blue Tokai / Studio"
                      value={formData.brand}
                      onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                      className="w-full py-2 px-3 border border-rule bg-paper text-sm text-ink focus:border-ink transition-colors font-sans placeholder:text-ink-light/50"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label className="font-mono text-[10px] text-ink-light block uppercase">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    placeholder="contact@brand.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full py-2 px-3 border border-rule bg-paper text-sm text-ink focus:border-ink transition-colors font-sans placeholder:text-ink-light/50"
                  />
                  {errors.email && (
                    <span className="font-mono text-[10px] text-red-600 block">{errors.email}</span>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <div className="flex justify-between items-center font-mono text-[10px]">
                    <label className="text-ink-light uppercase">PROJECT BRIEF / MESSAGE *</label>
                    <span className="text-ink-light">({formData.message.length} chars)</span>
                  </div>
                  <textarea
                    rows={4}
                    placeholder="Tell me about your vision, deliverables, desired timeline, and campaign goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full py-2 px-3 border border-rule bg-paper text-sm text-ink focus:border-ink transition-colors font-sans placeholder:text-ink-light/50"
                  />
                  {errors.message && (
                    <span className="font-mono text-[10px] text-red-600 block">{errors.message}</span>
                  )}
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <span className="font-mono text-[10px] text-ink-light">
                    * Form simulation mode active
                  </span>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="py-3 px-8 bg-ink text-paper hover:bg-ink-deep font-mono text-xs uppercase tracking-wider transition-colors flex items-center gap-2 disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'Validating...' : 'Submit Inquiry'}</span>
                    <span>&rarr;</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
