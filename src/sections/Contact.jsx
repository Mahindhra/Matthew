import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Send, CheckCircle2, AlertCircle, Sparkles, MessageSquare, Copy, Check } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { personalInfo, contactDetails } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      errs.message = 'Message content is required';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate real network submission with authentic handling
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Also construct mailto fallback link for user convenience
      const mailtoUrl = `mailto:${contactDetails.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
      
      // Offer opening their email client
      window.location.href = mailtoUrl;
    }, 800);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactDetails.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 overflow-hidden">
      
      {/* Background Lighting */}
      <div className="absolute bottom-0 left-1/3 w-[600px] h-[350px] bg-primary-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          badge="Direct Outreach"
          title="Let's"
          highlight="Connect"
          subtitle="I'm always interested in learning, collaborating, and exploring opportunities in software development. Feel free to connect with me."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-700/60 shadow-xl space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Contact Information
                </h3>
                <p className="text-sm text-slate-400 mt-1">
                  Reach out directly via email, phone, or view ongoing code repositories on GitHub.
                </p>
              </div>

              <div className="space-y-4">
                {/* Email item */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/60 dark:bg-slate-950/60 border border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-primary-500/10 border border-primary-500/30 flex items-center justify-center text-primary-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] font-mono uppercase text-slate-400 block">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${contactDetails.email}`}
                      className="text-sm font-semibold text-slate-200 hover:text-primary-400 transition-colors break-all"
                    >
                      {contactDetails.email}
                    </a>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    type="button"
                    className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone item */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/60 dark:bg-slate-950/60 border border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-primary-500/10 border border-primary-500/30 flex items-center justify-center text-primary-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-400 block">
                      Phone Number
                    </span>
                    <a
                      href={`tel:${contactDetails.phone}`}
                      className="text-sm font-semibold text-slate-200 hover:text-primary-400 transition-colors"
                    >
                      {contactDetails.phone}
                    </a>
                  </div>
                </div>

                {/* Location item */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/60 dark:bg-slate-950/60 border border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-primary-500/10 border border-primary-500/30 flex items-center justify-center text-primary-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-400 block">
                      Location
                    </span>
                    <p className="text-sm font-semibold text-slate-200">
                      {contactDetails.location}
                    </p>
                  </div>
                </div>

                {/* GitHub item */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/60 dark:bg-slate-950/60 border border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-primary-500/10 border border-primary-500/30 flex items-center justify-center text-primary-400 shrink-0">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-400 block">
                      GitHub
                    </span>
                    <a
                      href={contactDetails.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-primary-400 hover:text-primary-300 transition-colors"
                    >
                      github.com/{contactDetails.githubHandle}
                    </a>
                  </div>
                </div>
              </div>

              {/* Status Banner */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 text-xs text-emerald-400 flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
                <span>Immediate availability for software developer positions and campus placements.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-700/60 shadow-2xl relative">
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Send a Message
              </h3>
              <p className="text-sm text-slate-400 mb-6">
                Fill out the form below to initiate discussion regarding roles, projects, or interviews.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">Thank you, {formData.name}!</span>
                    Your message has been validated and prepared. Your local email client will open with these details pre-filled. You can also contact directly at <a href={`mailto:${contactDetails.email}`} className="underline font-semibold">{contactDetails.email}</a>.
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name & Email Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Full Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-colors ${
                        errors.name ? 'border-rose-500 focus:border-rose-500' : 'border-slate-700 focus:border-primary-500'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Email Address <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-colors ${
                        errors.email ? 'border-rose-500 focus:border-rose-500' : 'border-slate-700 focus:border-primary-500'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Subject <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Software Developer Opportunity / Interview Invitation"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-colors ${
                      errors.subject ? 'border-rose-500 focus:border-rose-500' : 'border-slate-700 focus:border-primary-500'
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message, role details, or inquiry here..."
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-colors ${
                      errors.message ? 'border-rose-500 focus:border-rose-500' : 'border-slate-700 focus:border-primary-500'
                    }`}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-primary-600 via-indigo-600 to-purple-600 hover:from-primary-500 hover:via-indigo-500 hover:to-purple-500 shadow-lg shadow-primary-500/25 transition-all duration-200 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Validating & Opening Client...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

              </form>

              {/* Honest note about form functionality */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] text-slate-500 leading-relaxed">
                <span className="font-semibold text-slate-400">Notice:</span> Validates fields directly in React and invokes your default email client with your message drafted to <span className="text-primary-400">{contactDetails.email}</span>. Can be connected to EmailJS or a backend API endpoint without changing the frontend interface.
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
