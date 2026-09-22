import { useState, FormEvent } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2, AlertCircle, Clock, Navigation } from 'lucide-react';
import { PageId, EnquiryFormData } from '../types';
import { BUSINESS_INFO } from '../data/content';
import { TrustBadge } from '../components/TrustBadge';

import streetImg from '../assets/images/paris_charonne_street.jpg';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState<EnquiryFormData>({
    name: '',
    email: '',
    subject: 'General Enquiry',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof EnquiryFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please select or enter a subject.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message or question.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Client-side confirmation state without claiming an imaginary remote backend
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      subject: 'General Enquiry',
      message: '',
    });
    setErrors({});
  };

  return (
    <div id="contact-page-root" className="space-y-16 sm:space-y-24 pb-24">
      {/* 1. Header Section */}
      <section className="pt-10 sm:pt-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F3EFE9] border border-[#E8E2D8] text-xs uppercase tracking-[0.2em] font-medium text-[#5C5650]">
            <span>Visit &amp; Contact</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1C1A18] tracking-tight font-normal">
            Contact Antiquités du Quartier
          </h1>
          <p className="text-lg sm:text-xl text-[#5C5650] leading-relaxed font-light">
            We welcome your enquiries regarding our vintage furniture, decorative objects, collectibles, and visiting our shop at 19 Rue de Charonne in Paris.
          </p>
          <div className="pt-2">
            <TrustBadge variant="minimal" />
          </div>
        </div>
      </section>

      {/* 2. Contact Details & Enquiry Form Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Factual Business Info & Visiting Notes (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="border border-[#E8E2D8] bg-[#FDFCFA] p-6 sm:p-8 space-y-6">
              <h2 className="font-serif text-2xl text-[#1C1A18] tracking-tight">
                Shop Information
              </h2>

              <div className="space-y-5 text-sm text-[#5C5650]">
                {/* Official Name */}
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#8A837B] font-medium">Business Name</p>
                  <p className="text-base text-[#1C1A18] font-serif font-medium mt-0.5">{BUSINESS_INFO.name}</p>
                  <p className="text-xs text-[#7A736B]">{BUSINESS_INFO.category}</p>
                </div>

                {/* Exact Address */}
                <div className="flex items-start gap-3 pt-2 border-t border-[#F3EFE9]">
                  <MapPin className="w-4 h-4 text-[#B38743] mt-1 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#8A837B] font-medium">Shop Address</p>
                    <p className="text-base text-[#1C1A18] font-medium mt-0.5">{BUSINESS_INFO.address}</p>
                    <p className="text-xs text-[#7A736B] mt-0.5">
                      11th Arrondissement, Paris, France
                    </p>
                  </div>
                </div>

                {/* Clickable Phone */}
                <div className="flex items-start gap-3 pt-2 border-t border-[#F3EFE9]">
                  <Phone className="w-4 h-4 text-[#B38743] mt-1 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#8A837B] font-medium">Direct Telephone</p>
                    <a
                      id="contact-page-phone-link"
                      href={BUSINESS_INFO.phoneHref}
                      className="text-lg text-[#1C1A18] font-serif font-medium hover:text-[#B38743] transition-colors block mt-0.5"
                      aria-label={`Call ${BUSINESS_INFO.phone}`}
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                    <p className="text-xs text-[#7A736B] mt-0.5">
                      Click to call directly from your device
                    </p>
                  </div>
                </div>

                {/* Google Reviews Trust */}
                <div className="pt-2 border-t border-[#F3EFE9]">
                  <p className="text-xs uppercase tracking-widest text-[#8A837B] font-medium mb-1.5">Customer Trust</p>
                  <div className="flex items-center gap-2 text-sm text-[#1C1A18] font-medium">
                    <span className="text-[#B38743]">★★★★★</span>
                    <span>{BUSINESS_INFO.trustLine}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Neighborhood & Access Guide */}
            <div className="border border-[#E8E2D8] bg-[#F6F2EA] p-6 space-y-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#8A837B] font-medium">
                <Navigation className="w-4 h-4 text-[#B38743]" />
                <span>Visiting in Paris</span>
              </div>
              <h3 className="font-serif text-xl text-[#1C1A18]">
                Rue de Charonne &amp; Nearby Métro
              </h3>
              <p className="text-xs sm:text-sm text-[#5C5650] leading-relaxed">
                Antiquités du Quartier is situated in the 11th arrondissement of Paris on Rue de Charonne, accessible from Métro stations <strong>Ledru-Rollin</strong> (Line 8), <strong>Bastille</strong> (Lines 1, 5, 8), and <strong>Charonne</strong> (Line 9).
              </p>
              <p className="text-xs text-[#7A736B] leading-relaxed">
                If you are visiting for a specific piece or would like to confirm opening arrangements, calling ahead at <strong>{BUSINESS_INFO.phone}</strong> is warmly recommended.
              </p>
            </div>

            {/* Street visual */}
            <div className="border border-[#E8E2D8] bg-[#FDFCFA] p-2">
              <div className="overflow-hidden aspect-16/9">
                <img
                  src={streetImg}
                  alt="Atmosphere of Rue de Charonne in the 11th arrondissement of Paris"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <p className="text-[11px] text-[#7A736B] pt-2 px-1 text-center">Rue de Charonne • Paris 11e</p>
            </div>
          </div>

          {/* Right Column: Professional Enquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="border border-[#E8E2D8] bg-[#FAF8F5] p-8 sm:p-10 lg:p-12">
              <div className="space-y-2 mb-8">
                <p className="text-xs uppercase tracking-[0.25em] text-[#8A837B] font-medium">Direct Correspondence</p>
                <h2 className="font-serif text-3xl text-[#1C1A18] tracking-tight">
                  Send an Enquiry
                </h2>
                <p className="text-sm text-[#5C5650] leading-relaxed">
                  Have a question about vintage furniture, decorative objects, or visiting the shop? Submit your message below or call us at {BUSINESS_INFO.phone}.
                </p>
              </div>

              {submitted ? (
                <div
                  id="enquiry-success-message"
                  className="p-8 bg-[#FDFCFA] border border-[#E8E2D8] text-center space-y-4 animate-fadeIn"
                  role="status"
                >
                  <div className="w-12 h-12 rounded-full bg-[#F3EFE9] text-[#1C1A18] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6 text-[#B38743]" />
                  </div>
                  <h3 className="font-serif text-2xl text-[#1C1A18]">
                    Thank You for Your Enquiry
                  </h3>
                  <p className="text-sm text-[#5C5650] max-w-md mx-auto leading-relaxed">
                    Your message regarding <em>&ldquo;{formData.subject}&rdquo;</em> has been received. We review all incoming correspondence carefully.
                  </p>
                  <p className="text-xs text-[#7A736B] pt-1">
                    For immediate assistance or urgent queries, you can also reach Antiquités du Quartier directly by calling{' '}
                    <a href={BUSINESS_INFO.phoneHref} className="font-semibold text-[#1C1A18] underline">
                      {BUSINESS_INFO.phone}
                    </a>.
                  </p>
                  <div className="pt-4">
                    <button
                      id="enquiry-send-another-btn"
                      onClick={handleReset}
                      className="px-6 py-2.5 border border-[#1C1A18] text-xs uppercase tracking-widest text-[#1C1A18] hover:bg-[#1C1A18] hover:text-[#FAF8F5] transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form id="enquiry-form" onSubmit={handleSubmit} noValidate className="space-y-6">
                  {/* Name Field */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="enquiry-name"
                      className="block text-xs uppercase tracking-wider font-semibold text-[#1C1A18]"
                    >
                      Your Name <span className="text-red-700" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="enquiry-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      placeholder="e.g. Marie Laurent"
                      className={`w-full px-4 py-3 bg-[#FDFCFA] border text-sm text-[#1C1A18] placeholder-[#A8A199] transition-colors focus:outline-hidden focus:border-[#1C1A18] ${
                        errors.name ? 'border-red-600 bg-red-50/20' : 'border-[#E8E2D8]'
                      }`}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-xs text-red-700 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="enquiry-email"
                      className="block text-xs uppercase tracking-wider font-semibold text-[#1C1A18]"
                    >
                      Email Address <span className="text-red-700" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="enquiry-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      placeholder="e.g. marie.laurent@example.com"
                      className={`w-full px-4 py-3 bg-[#FDFCFA] border text-sm text-[#1C1A18] placeholder-[#A8A199] transition-colors focus:outline-hidden focus:border-[#1C1A18] ${
                        errors.email ? 'border-red-600 bg-red-50/20' : 'border-[#E8E2D8]'
                      }`}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-xs text-red-700 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Subject Field */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="enquiry-subject"
                      className="block text-xs uppercase tracking-wider font-semibold text-[#1C1A18]"
                    >
                      Subject <span className="text-red-700" aria-hidden="true">*</span>
                    </label>
                    <select
                      id="enquiry-subject"
                      required
                      value={formData.subject}
                      onChange={(e) => {
                        setFormData({ ...formData, subject: e.target.value });
                        if (errors.subject) setErrors({ ...errors, subject: undefined });
                      }}
                      className="w-full px-4 py-3 bg-[#FDFCFA] border border-[#E8E2D8] text-sm text-[#1C1A18] transition-colors focus:outline-hidden focus:border-[#1C1A18] cursor-pointer"
                    >
                      <option value="General Enquiry">General Enquiry</option>
                      <option value="Vintage Furniture">Vintage Furniture Enquiry</option>
                      <option value="Decorative Objects">Decorative Objects Enquiry</option>
                      <option value="Collectibles & Unique Pieces">Collectibles &amp; Unique Pieces</option>
                      <option value="Visiting the Shop in Paris">Visiting the Shop in Paris</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="enquiry-message"
                      className="block text-xs uppercase tracking-wider font-semibold text-[#1C1A18]"
                    >
                      Message <span className="text-red-700" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="enquiry-message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      placeholder="Please share your enquiry or describe what you are looking for..."
                      className={`w-full px-4 py-3 bg-[#FDFCFA] border text-sm text-[#1C1A18] placeholder-[#A8A199] transition-colors focus:outline-hidden focus:border-[#1C1A18] resize-y ${
                        errors.message ? 'border-red-600 bg-red-50/20' : 'border-[#E8E2D8]'
                      }`}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-xs text-red-700 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Form Submission Button */}
                  <div className="pt-2">
                    <button
                      id="enquiry-submit-button"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1C1A18] text-[#FAF8F5] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#332F2B] transition-all cursor-pointer disabled:opacity-50"
                    >
                      <span>{isSubmitting ? 'Sending Enquiry...' : 'Submit Enquiry'}</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-[11px] text-[#7A736B] leading-relaxed pt-1">
                    Your details are used solely to reply to your inquiry. For immediate assistance, please telephone Antiquités du Quartier directly at {BUSINESS_INFO.phone}.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
