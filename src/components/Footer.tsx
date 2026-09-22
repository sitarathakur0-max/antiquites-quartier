import { MapPin, Phone, ArrowUp } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO, NAV_ITEMS } from '../data/content';
import { TrustBadge } from './TrustBadge';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (pageId: PageId) => {
    onNavigate(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="site-footer" className="bg-[#1C1A18] text-[#E8E2D8] border-t border-[#332F2B] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#2E2A26]">
          {/* Brand & Factual Description (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="font-serif text-3xl text-[#FAF8F5] tracking-tight">
              {BUSINESS_INFO.name}
            </h2>
            <p className="text-xs uppercase tracking-[0.2em] text-[#B38743] font-medium">
              {BUSINESS_INFO.category} • Paris 11e
            </p>
            <p className="text-sm leading-relaxed text-[#A8A199] max-w-md pt-2">
              {BUSINESS_INFO.shortAbout} Located in the historic 11th arrondissement of Paris, presenting pieces distinguished by character, patina, and tactile presence.
            </p>
            <div className="pt-2">
              <TrustBadge variant="dark" />
            </div>
          </div>

          {/* Main Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-[#FAF8F5] font-semibold">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    id={`footer-nav-${item.id}`}
                    onClick={() => handleLinkClick(item.id)}
                    className="text-[#A8A199] hover:text-[#FAF8F5] transition-colors cursor-pointer text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections Direct Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-[#FAF8F5] font-semibold">
              Collections
            </h3>
            <ul className="space-y-2.5 text-sm text-[#A8A199]">
              <li>
                <button
                  id="footer-col-furniture"
                  onClick={() => handleLinkClick('vintage-furniture')}
                  className="hover:text-[#FAF8F5] transition-colors cursor-pointer text-left"
                >
                  Vintage Furniture
                </button>
              </li>
              <li>
                <button
                  id="footer-col-decor"
                  onClick={() => handleLinkClick('decorative-objects')}
                  className="hover:text-[#FAF8F5] transition-colors cursor-pointer text-left"
                >
                  Decorative Objects
                </button>
              </li>
              <li>
                <button
                  id="footer-col-collectibles"
                  onClick={() => handleLinkClick('decorative-objects')}
                  className="hover:text-[#FAF8F5] transition-colors cursor-pointer text-left"
                >
                  Collectibles
                </button>
              </li>
              <li>
                <button
                  id="footer-col-unique"
                  onClick={() => handleLinkClick('collections')}
                  className="hover:text-[#FAF8F5] transition-colors cursor-pointer text-left"
                >
                  Unique Pieces
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Address (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-[#FAF8F5] font-semibold">
              Visit &amp; Enquiries
            </h3>
            <div className="space-y-3 text-sm text-[#A8A199]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B38743] mt-1 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-[#FAF8F5] font-medium">{BUSINESS_INFO.name}</p>
                  <p>{BUSINESS_INFO.addressStreet}</p>
                  <p>{BUSINESS_INFO.addressDistrict}</p>
                  <p className="text-xs text-[#7A736B] pt-0.5">{BUSINESS_INFO.neighborhood}</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-[#B38743] shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-xs text-[#7A736B]">Direct Shop Telephone</p>
                  <a
                    id="footer-phone-link"
                    href={BUSINESS_INFO.phoneHref}
                    className="text-[#FAF8F5] hover:text-[#B38743] transition-colors font-medium"
                    aria-label={`Call ${BUSINESS_INFO.phone}`}
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>
              <div className="pt-2">
                <button
                  id="footer-enquiry-button"
                  onClick={() => handleLinkClick('contact')}
                  className="inline-block text-xs uppercase tracking-widest text-[#FAF8F5] underline underline-offset-4 hover:text-[#B38743] transition-colors cursor-pointer"
                >
                  Send an Enquiry &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A736B]">
          <p>
            &copy; 2026 {BUSINESS_INFO.name}. All rights reserved. 19 Rue de Charonne, 75011 Paris, France.
          </p>
          <div className="flex items-center gap-6">
            <button
              id="footer-scroll-top-button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#A8A199] hover:text-[#FAF8F5] transition-colors cursor-pointer"
              aria-label="Scroll back to top of page"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
