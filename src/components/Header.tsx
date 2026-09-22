import { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO, NAV_ITEMS } from '../data/content';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-site-header"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs border-b border-[#E8E2D8]'
          : 'bg-[#FAF8F5] border-b border-[#E8E2D8]'
      }`}
    >
      {/* Top Banner with Location and Phone */}
      <div className="bg-[#24211E] text-[#F3EFE9] text-xs py-1.5 px-4 tracking-wider">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-[#C4BCB3]">
            <MapPin className="w-3.5 h-3.5 text-[#B38743]" aria-hidden="true" />
            <span>{BUSINESS_INFO.address}</span>
            <span className="hidden md:inline text-[#7A736B]">•</span>
            <span className="hidden md:inline text-[#A8A199]">{BUSINESS_INFO.neighborhood}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#A8A199] hidden lg:inline">★ {BUSINESS_INFO.trustLine}</span>
            <a
              id="header-top-phone-link"
              href={BUSINESS_INFO.phoneHref}
              className="flex items-center gap-1.5 text-[#F3EFE9] hover:text-[#B38743] transition-colors font-medium"
              aria-label={`Call Antiquités du Quartier at ${BUSINESS_INFO.phone}`}
            >
              <Phone className="w-3.5 h-3.5 text-[#B38743]" aria-hidden="true" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Identity */}
          <div className="flex-shrink-0">
            <button
              id="brand-logo-button"
              onClick={() => handleNavClick('home')}
              className="text-left group cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#1C1A18]"
              aria-label="Antiquités du Quartier - Return to Homepage"
            >
              <span className="block font-serif text-2xl sm:text-3xl tracking-tight text-[#1C1A18] group-hover:text-[#5C5650] transition-colors">
                Antiquités du Quartier
              </span>
              <span className="block text-[10px] tracking-[0.25em] uppercase text-[#736C64] font-medium mt-0.5">
                Antique &amp; Vintage Shop • Paris 11e
              </span>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <nav id="desktop-navigation" className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 text-xs xl:text-sm font-medium tracking-wide transition-colors relative whitespace-nowrap cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#1C1A18] ${
                    isActive
                      ? 'text-[#1C1A18] font-semibold'
                      : 'text-[#5C5650] hover:text-[#1C1A18]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#1C1A18]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Direct CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              id="header-visit-button"
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center px-4 py-2 border border-[#1C1A18] text-xs uppercase tracking-widest text-[#1C1A18] hover:bg-[#1C1A18] hover:text-[#FAF8F5] transition-all duration-200 cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1C1A18]"
            >
              Visit Shop
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <a
              id="mobile-call-icon-button"
              href={BUSINESS_INFO.phoneHref}
              className="p-2 text-[#1C1A18] hover:text-[#5C5650] transition-colors border border-[#E8E2D8]"
              aria-label="Call shop"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              id="mobile-menu-toggle-button"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1C1A18] hover:text-[#5C5650] border border-[#E8E2D8] cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#1C1A18]"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden border-b border-[#E8E2D8] bg-[#FAF8F5] px-4 pt-2 pb-6 space-y-1 shadow-lg"
        >
          <div className="pb-3 border-b border-[#E8E2D8] mb-3">
            <p className="text-xs text-[#5C5650] font-medium">{BUSINESS_INFO.shortAbout}</p>
          </div>
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-3 py-2.5 text-sm tracking-wide font-medium transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#F3EFE9] text-[#1C1A18] font-semibold border-l-2 border-[#1C1A18]'
                      : 'text-[#5C5650] hover:bg-[#F7F4EE] hover:text-[#1C1A18]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="pt-4 mt-4 border-t border-[#E8E2D8] space-y-3">
            <div className="flex items-center justify-between text-xs text-[#5C5650]">
              <span>Google Rating:</span>
              <span className="font-semibold text-[#1C1A18]">{BUSINESS_INFO.trustLine}</span>
            </div>
            <a
              id="mobile-drawer-call-button"
              href={BUSINESS_INFO.phoneHref}
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#1C1A18] text-[#FAF8F5] text-xs uppercase tracking-widest hover:bg-[#332F2B] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#B38743]" />
              <span>Call +33 1 42 76 35 18</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
