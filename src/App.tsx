import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { HomePage } from './pages/HomePage';
import { CollectionsPage } from './pages/CollectionsPage';
import { VintageFurniturePage } from './pages/VintageFurniturePage';
import { DecorativeObjectsPage } from './pages/DecorativeObjectsPage';
import { AboutPage } from './pages/AboutPage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';

const PAGE_SEO: Record<PageId, { title: string; description: string }> = {
  home: {
    title: 'Antiquités du Quartier | Independent Antique Shop in Paris',
    description:
      'Discover pieces with character at Antiquités du Quartier. Vintage furniture, decorative objects, collectibles and unique finds at 19 Rue de Charonne, Paris 11e.',
  },
  collections: {
    title: 'Collections | Antiquités du Quartier Paris',
    description:
      'Explore our four curated collections: vintage furniture, decorative objects, collectibles, and unique pieces at Antiquités du Quartier in Paris.',
  },
  'vintage-furniture': {
    title: 'Vintage Furniture | Antiquités du Quartier Paris',
    description:
      'Discover vintage furniture with visual character, presence, and authentic patina at Antiquités du Quartier on Rue de Charonne in Paris.',
  },
  'decorative-objects': {
    title: 'Decorative Objects & Collectibles | Antiquités du Quartier Paris',
    description:
      'Browse antique decorative objects, collectibles, and unique pieces that add character and individuality to personal interiors in Paris.',
  },
  about: {
    title: 'About the Shop | Antiquités du Quartier Paris',
    description:
      'Antiquités du Quartier is an independent antique shop at 19 Rue de Charonne in the 11th arrondissement of Paris, celebrating craft and discovery.',
  },
  faq: {
    title: 'Frequently Asked Questions | Antiquités du Quartier Paris',
    description:
      'Common questions regarding our vintage furniture, decorative objects, collectibles, unique pieces, and visiting Antiquités du Quartier in Paris.',
  },
  contact: {
    title: 'Contact & Visit | Antiquités du Quartier Paris',
    description:
      'Visit Antiquités du Quartier at 19 Rue de Charonne, 75011 Paris, France or call +33 1 42 76 35 18 to enquire about our vintage collections.',
  },
};

export default function App() {
  // Initialize page from URL hash if available
  const [currentPage, setCurrentPage] = useState<PageId>(() => {
    const hash = window.location.hash.replace('#', '') as PageId;
    if (
      [
        'home',
        'collections',
        'vintage-furniture',
        'decorative-objects',
        'about',
        'faq',
        'contact',
      ].includes(hash)
    ) {
      return hash;
    }
    return 'home';
  });

  // Listen to hash changes (back/forward browser navigation)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (
        [
          'home',
          'collections',
          'vintage-furniture',
          'decorative-objects',
          'about',
          'faq',
          'contact',
        ].includes(hash)
      ) {
        setCurrentPage(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update Page SEO (title, meta description, OG tags) whenever route changes
  useEffect(() => {
    const seo = PAGE_SEO[currentPage] || PAGE_SEO.home;
    document.title = seo.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', seo.description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', seo.title);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', seo.description);
    }
  }, [currentPage]);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPageContent = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'collections':
        return <CollectionsPage onNavigate={handleNavigate} />;
      case 'vintage-furniture':
        return <VintageFurniturePage onNavigate={handleNavigate} />;
      case 'decorative-objects':
        return <DecorativeObjectsPage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'faq':
        return <FAQPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1C1A18] font-sans">
      {/* Skip to Content for Screen Readers / Keyboard Navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#1C1A18] focus:text-[#FAF8F5] focus:outline-hidden"
      >
        Skip to main content
      </a>

      {/* Header */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page Area */}
      <main id="main-content" className="grow focus:outline-hidden" tabIndex={-1}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            {renderPageContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
