import { useState } from 'react';
import { ChevronDown, Phone, MessageSquare, Search, MapPin } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO, FAQ_ITEMS } from '../data/content';
import { TrustBadge } from '../components/TrustBadge';

interface FAQPageProps {
  onNavigate: (page: PageId) => void;
}

export function FAQPage({ onNavigate }: FAQPageProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'collections', label: 'Collections' },
    { id: 'furniture', label: 'Vintage Furniture' },
    { id: 'decor', label: 'Decorative Objects' },
    { id: 'collectibles', label: 'Collectibles & Unique' },
    { id: 'visit', label: 'Visiting & Contact' },
  ];

  const filteredItems = FAQ_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq-page-root" className="space-y-16 sm:space-y-24 pb-24">
      {/* 1. Header Section */}
      <section className="pt-10 sm:pt-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F3EFE9] border border-[#E8E2D8] text-xs uppercase tracking-[0.2em] font-medium text-[#5C5650]">
            <span>Frequently Asked Questions</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1C1A18] tracking-tight font-normal">
            Information &amp; Enquiries
          </h1>
          <p className="text-lg sm:text-xl text-[#5C5650] leading-relaxed font-light">
            Answers regarding our collections of vintage furniture, decorative objects, collectibles, unique pieces, and visiting our shop at 19 Rue de Charonne in Paris.
          </p>
          <div className="pt-2">
            <TrustBadge variant="minimal" />
          </div>
        </div>
      </section>

      {/* 2. Controls & Filter Bar */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center pb-6 border-b border-[#E8E2D8]">
          {/* Category Filter Chips */}
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="FAQ Categories">
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`faq-tab-${cat.id}`}
                role="tab"
                aria-selected={selectedCategory === cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs tracking-wider uppercase font-medium border transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#1C1A18] text-[#FAF8F5] border-[#1C1A18]'
                    : 'bg-[#FDFCFA] text-[#5C5650] border-[#E8E2D8] hover:border-[#1C1A18]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-[#8A837B] absolute left-3 top-1/2 -translate-y-1/2" aria-hidden="true" />
            <input
              id="faq-search-input"
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-[#FDFCFA] border border-[#E8E2D8] text-[#1C1A18] placeholder-[#8A837B] focus:outline-hidden focus:border-[#1C1A18]"
              aria-label="Search FAQ"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-[#E8E2D8] pt-2" role="region" aria-label="FAQ Accordion">
          {filteredItems.length === 0 ? (
            <div className="py-12 text-center text-[#5C5650]">
              <p className="text-base font-serif text-[#1C1A18]">No specific matching question found.</p>
              <p className="text-sm mt-2">
                For any details not listed, please contact Antiquités du Quartier directly by calling{' '}
                <a href={BUSINESS_INFO.phoneHref} className="font-medium text-[#1C1A18] underline">
                  {BUSINESS_INFO.phone}
                </a>{' '}
                or submitting an enquiry.
              </p>
            </div>
          ) : (
            filteredItems.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="py-5">
                  <button
                    id={`faq-question-btn-${index}`}
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between text-left group cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#1C1A18]"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className="font-serif text-lg sm:text-xl text-[#1C1A18] group-hover:text-[#5C5650] transition-colors pr-4">
                      {item.question}
                    </span>
                    <span
                      className={`p-1.5 border border-[#E8E2D8] bg-[#FDFCFA] transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 bg-[#F3EFE9]' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4 text-[#1C1A18]" aria-hidden="true" />
                    </span>
                  </button>
                  {isOpen && (
                    <div
                      id={`faq-answer-${index}`}
                      className="mt-4 text-sm sm:text-base text-[#5C5650] leading-relaxed pr-6 animate-fadeIn"
                    >
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </section>

      {/* 3. Direct Contact Notice */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="border border-[#E8E2D8] bg-[#F6F2EA] p-8 sm:p-10 space-y-4">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#8A837B] font-medium">
            <Phone className="w-4 h-4 text-[#B38743]" />
            <span>Have a Specific Question?</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1A18]">
            For Information Not Supplied Above
          </h2>
          <p className="text-sm text-[#5C5650] leading-relaxed">
            As an independent antique boutique, we handle all enquiries directly. If you have questions about specific items currently in the shop, visiting arrangements, or advice on a piece, we encourage you to contact us by telephone or through our online message form.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-4">
            <a
              id="faq-direct-call-link"
              href={BUSINESS_INFO.phoneHref}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1C1A18] text-[#FAF8F5] text-xs uppercase tracking-widest font-semibold hover:bg-[#332F2B] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#B38743]" />
              <span>Call {BUSINESS_INFO.phone}</span>
            </a>
            <button
              id="faq-direct-enquiry-link"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#1C1A18] text-[#1C1A18] text-xs uppercase tracking-widest font-semibold hover:bg-[#FAF8F5] transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Send an Online Enquiry</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
