import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Send, AlertCircle, CheckCircle2, Copy, Check } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your name.';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Please enter a subject.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 8) {
      errs.message = 'Message must be at least 8 characters.';
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

    setIsSubmitted(true);

    // Prepare mailto link with validated inputs
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    // Open email client
    window.location.href = mailtoUrl;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          label="Inquiries & Opportunities"
          title="Let's Connect"
          subtitle="I'm open to opportunities where I can contribute, learn, and grow as a software developer."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="pro-card p-6 sm:p-8 bg-slate-50 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Contact Information
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Feel free to contact me directly via email, phone, or GitHub.
                </p>
              </div>

              <div className="space-y-4">
                
                {/* Email Item */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-white border border-slate-200">
                  <div className="w-9 h-9 rounded-md bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] font-mono text-slate-400 block uppercase">
                      Email
                    </span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-xs sm:text-sm font-semibold text-slate-800 hover:text-blue-600 transition-colors break-all"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    type="button"
                    className="p-1.5 text-slate-400 hover:text-slate-700 transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-white border border-slate-200">
                  <div className="w-9 h-9 rounded-md bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block uppercase">
                      Phone
                    </span>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-xs sm:text-sm font-semibold text-slate-800 hover:text-blue-600 transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-white border border-slate-200">
                  <div className="w-9 h-9 rounded-md bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block uppercase">
                      Location
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>

                {/* GitHub Item */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-white border border-slate-200">
                  <div className="w-9 h-9 rounded-md bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block uppercase">
                      GitHub
                    </span>
                    <a
                      href={personalInfo.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-semibold text-blue-600 hover:underline"
                    >
                      github.com/{personalInfo.github}
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="pro-card p-6 sm:p-8 bg-white">
              
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                All fields are validated. Upon submission, your message will open directly in your mail application.
              </p>

              {isSubmitted && (
                <div className="mb-6 p-4 rounded-md bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-800 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">Message prepared!</span>
                    Your mail client is opening with these details pre-filled. You can also write directly to <a href={`mailto:${personalInfo.email}`} className="font-semibold underline">{personalInfo.email}</a>.
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Hiring Manager"
                      className={`w-full px-3.5 py-2.5 rounded-md border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors ${
                        errors.name ? 'border-rose-400 focus:border-rose-500' : 'border-slate-300 focus:border-blue-500'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. contact@company.com"
                      className={`w-full px-3.5 py-2.5 rounded-md border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors ${
                        errors.email ? 'border-rose-400 focus:border-rose-500' : 'border-slate-300 focus:border-blue-500'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Subject <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Software Developer Opportunity"
                    className={`w-full px-3.5 py-2.5 rounded-md border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors ${
                      errors.subject ? 'border-rose-400 focus:border-rose-500' : 'border-slate-300 focus:border-blue-500'
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className={`w-full px-3.5 py-2.5 rounded-md border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors ${
                      errors.message ? 'border-rose-400 focus:border-rose-500' : 'border-slate-300 focus:border-blue-500'
                    }`}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-md font-medium text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-xs transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
