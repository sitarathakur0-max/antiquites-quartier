import { ArrowRight, Sparkles, Check, Phone, MapPin } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO, CATEGORIES } from '../data/content';
import { TrustBadge } from '../components/TrustBadge';

import furnitureImg from '../assets/images/vintage_furniture_1789837794173.jpg';
import decorImg from '../assets/images/decorative_clock_object.jpg';
import curioImg from '../assets/images/antique_curio_cabinet.jpg';
import consoleImg from '../assets/images/antique_console_detail.jpg';

interface CollectionsPageProps {
  onNavigate: (page: PageId) => void;
}

export function CollectionsPage({ onNavigate }: CollectionsPageProps) {
  return (
    <div id="collections-page-root" className="space-y-20 sm:space-y-28 pb-24">
      {/* Header Section */}
      <section className="pt-10 sm:pt-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F3EFE9] border border-[#E8E2D8] text-xs uppercase tracking-[0.2em] font-medium text-[#5C5650]">
            <span>Curated Collections</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1C1A18] tracking-tight font-normal">
            Collections with Soul &amp; Substance
          </h1>
          <p className="text-lg sm:text-xl text-[#5C5650] leading-relaxed font-light">
            An overview of the four core offerings at Antiquités du Quartier in Paris: vintage furniture, decorative objects, collectibles, and unique pieces selected for their visual character.
          </p>
          <div className="pt-2">
            <TrustBadge variant="minimal" />
          </div>
        </div>
      </section>

      {/* Philosophy of Curation Banner */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="p-6 sm:p-8 bg-[#F6F2EA] border border-[#E8E2D8] grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-[#5C5650]">
          <div>
            <h2 className="font-serif text-lg text-[#1C1A18] font-medium mb-1">Authentic Presence</h2>
            <p className="leading-relaxed">
              Every item in our boutique is chosen for its standalone dignity, structural balance, and tactile appeal.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-lg text-[#1C1A18] font-medium mb-1">Evolving Selection</h2>
            <p className="leading-relaxed">
              Because independent antique finds are singular, our displays in Paris evolve naturally with each new arrival.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-lg text-[#1C1A18] font-medium mb-1">Direct Enquiries</h2>
            <p className="leading-relaxed">
              We invite personal dialogue by phone at {BUSINESS_INFO.phone} or in person at 19 Rue de Charonne.
            </p>
          </div>
        </div>
      </section>

      {/* DETAILED CATEGORY BREAKDOWNS */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
        {/* 1. Vintage Furniture */}
        <div id="category-vintage-furniture" className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pt-8 border-t border-[#E8E2D8]">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="font-serif text-2xl text-[#B38743]">01</span>
              <span className="text-xs uppercase tracking-[0.25em] text-[#8A837B] font-medium">Core Category</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1A18] tracking-tight">
              Vintage Furniture
            </h2>
            <div className="space-y-4 text-[#5C5650] text-sm sm:text-base leading-relaxed">
              <p>
                Vintage furniture offers a depth of presence that contemporary production rarely matches. Older pieces carry the visual record of their craftsmanship—the subtle softening of silhouettes, honest construction joints, and an authentic patina that only years of gentle handling can bestow.
              </p>
              <p>
                Rather than adhering to rigid formulas, vintage furniture excels when placed in diverse interior contexts. A characterful credenza, table, or armchair brings gravitas to an open modern living room, acting as an anchor that harmonizes surrounding furnishings.
              </p>
            </div>
            <div className="pt-2">
              <button
                id="collections-to-furniture"
                onClick={() => onNavigate('vintage-furniture')}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#1C1A18] hover:text-[#B38743] transition-colors cursor-pointer"
              >
                <span>Read Dedicated Furniture Page</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="border border-[#E8E2D8] bg-[#FDFCFA] p-3 shadow-xs">
              <div className="overflow-hidden aspect-4/3">
                <img
                  src={furnitureImg}
                  alt="Vintage furniture piece displaying handcrafted proportions and aged texture"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <p className="text-[11px] text-[#7A736B] pt-2 px-1">Vintage Furniture • Visual Character &amp; Craft</p>
            </div>
          </div>
        </div>

        {/* 2. Decorative Objects */}
        <div id="category-decorative-objects" className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pt-16 border-t border-[#E8E2D8]">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="border border-[#E8E2D8] bg-[#FDFCFA] p-3 shadow-xs">
              <div className="overflow-hidden aspect-4/3">
                <img
                  src={decorImg}
                  alt="Decorative object illustrating nuanced form and tabletop presence"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <p className="text-[11px] text-[#7A736B] pt-2 px-1">Decorative Objects • Intimate Accents</p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div className="flex items-center gap-3">
              <span className="font-serif text-2xl text-[#B38743]">02</span>
              <span className="text-xs uppercase tracking-[0.25em] text-[#8A837B] font-medium">Interior Accents</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1A18] tracking-tight">
              Decorative Objects
            </h2>
            <div className="space-y-4 text-[#5C5650] text-sm sm:text-base leading-relaxed">
              <p>
                Decorative pieces are the personal punctuation marks of an interior. Instead of uniform styling accessories, individual antique decorative objects possess distinct sculptural weight and nuanced surfaces that invite closer inspection.
              </p>
              <p>
                Placed on a console, coffee table, or mantel, decorative pieces provide focal points that reflect individual sensibility. They bridge the gap between architectural structure and human warmth, bringing texture, form, and layered intrigue into the home.
              </p>
            </div>
            <div className="pt-2">
              <button
                id="collections-to-decor"
                onClick={() => onNavigate('decorative-objects')}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#1C1A18] hover:text-[#B38743] transition-colors cursor-pointer"
              >
                <span>Read Decorative Objects &amp; Collectibles Page</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 3. Collectibles */}
        <div id="category-collectibles" className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pt-16 border-t border-[#E8E2D8]">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="font-serif text-2xl text-[#B38743]">03</span>
              <span className="text-xs uppercase tracking-[0.25em] text-[#8A837B] font-medium">Curios &amp; Artifacts</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1A18] tracking-tight">
              Collectibles
            </h2>
            <div className="space-y-4 text-[#5C5650] text-sm sm:text-base leading-relaxed">
              <p>
                Our collectibles represent pieces that capture the imagination through their curious forms and tactile presence. These are items that resonate with passionate collectors and discerning admirers alike.
              </p>
              <p>
                Whether displayed within a collector's cabinet or showcased as a standalone curiosity on an open shelf, collectibles encourage deliberate contemplation. They evoke an appreciation for older craftsmanship and the pleasure of keeping pieces of history close at hand.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="border border-[#E8E2D8] bg-[#FDFCFA] p-3 shadow-xs">
              <div className="overflow-hidden aspect-4/3">
                <img
                  src={curioImg}
                  alt="Historic collector cabinet representing curios and collectibles"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <p className="text-[11px] text-[#7A736B] pt-2 px-1">Collectibles • Objects of Curiosity</p>
            </div>
          </div>
        </div>

        {/* 4. Unique Pieces */}
        <div id="category-unique-pieces" className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pt-16 border-t border-[#E8E2D8]">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="border border-[#E8E2D8] bg-[#FDFCFA] p-3 shadow-xs">
              <div className="overflow-hidden aspect-4/3">
                <img
                  src={consoleImg}
                  alt="Carved antique console detail showing singular craft and tactile surface"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <p className="text-[11px] text-[#7A736B] pt-2 px-1">Unique Pieces • Singular Character</p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div className="flex items-center gap-3">
              <span className="font-serif text-2xl text-[#B38743]">04</span>
              <span className="text-xs uppercase tracking-[0.25em] text-[#8A837B] font-medium">One-of-a-Kind</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1A18] tracking-tight">
              Unique Pieces
            </h2>
            <div className="space-y-4 text-[#5C5650] text-sm sm:text-base leading-relaxed">
              <p>
                The allure of an independent antique shop lies in the joy of discovering singular, one-of-a-kind items. These are pieces that defy standard classification—objects with idiosyncratic silhouettes, distinctive weathering, or unusual utility.
              </p>
              <p>
                Because these finds are inherently unique, discovering one is an intuitive and personal experience. A unique piece gives an interior a memorable focal point that cannot be found in conventional furniture stores or standardized catalogues.
              </p>
            </div>
            <div className="pt-2">
              <button
                id="collections-enquire-unique"
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#1C1A18] hover:text-[#B38743] transition-colors cursor-pointer"
              >
                <span>Enquire About Unique Finds</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Callout */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#24211E] text-[#FAF8F5] p-8 sm:p-12 border border-[#3A3530] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <h3 className="font-serif text-2xl sm:text-3xl font-normal">
              Interested in a Particular Category?
            </h3>
            <p className="text-sm text-[#A8A199] leading-relaxed">
              Our Paris shop selection changes as new pieces are discovered. Please call us directly at {BUSINESS_INFO.phone} or visit 19 Rue de Charonne to explore what is currently available.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a
              href={BUSINESS_INFO.phoneHref}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#FAF8F5] text-[#1C1A18] text-xs uppercase tracking-widest font-semibold hover:bg-[#F3EFE9] transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-[#B38743]" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#FAF8F5] text-[#FAF8F5] text-xs uppercase tracking-widest font-semibold hover:bg-[#332F2B] transition-colors whitespace-nowrap cursor-pointer"
            >
              <span>Contact Shop</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
