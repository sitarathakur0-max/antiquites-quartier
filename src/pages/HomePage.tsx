import { ArrowRight, Sparkles, Compass, Clock, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO, CATEGORIES } from '../data/content';
import { TrustBadge } from '../components/TrustBadge';

import heroImg from '../assets/images/hero_antique_shop_1789837776648.jpg';
import furnitureImg from '../assets/images/vintage_furniture_1789837794173.jpg';
import decorImg from '../assets/images/decorative_clock_object.jpg';
import curioImg from '../assets/images/antique_curio_cabinet.jpg';
import salonImg from '../assets/images/parisian_salon_interior.jpg';
import streetImg from '../assets/images/paris_charonne_street.jpg';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div id="home-page-root" className="space-y-24 md:space-y-32 pb-24">
      {/* 1. HERO SECTION */}
      <section id="home-hero-section" className="relative pt-8 sm:pt-14 lg:pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Hero Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F3EFE9] border border-[#E8E2D8] text-xs uppercase tracking-[0.2em] font-medium text-[#5C5650]">
                <MapPin className="w-3.5 h-3.5 text-[#B38743]" />
                <span>19 Rue de Charonne, Paris 11e</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-normal text-[#1C1A18] tracking-tight leading-[1.08]">
                Discover Pieces with Character
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-[#5C5650] leading-relaxed max-w-2xl font-normal">
              Vintage furniture, decorative objects, collectibles and unique finds from an independent antique shop in Paris.
            </p>

            {/* Trust Line */}
            <div>
              <TrustBadge variant="light" />
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                id="hero-cta-explore"
                onClick={() => onNavigate('collections')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1C1A18] text-[#FAF8F5] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#332F2B] transition-all cursor-pointer shadow-xs focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#1C1A18]"
              >
                <span>Explore the Collections</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                id="hero-cta-visit"
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#1C1A18] text-[#1C1A18] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#F3EFE9] transition-all cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#1C1A18]"
              >
                <span>Visit the Shop</span>
              </button>
            </div>
          </div>

          {/* Hero Visual (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative border border-[#E8E2D8] bg-[#FDFCFA] p-3 shadow-xs">
              <div className="overflow-hidden aspect-4/3 sm:aspect-16/11">
                <img
                  src={heroImg}
                  alt="Interior atmosphere of Antiquités du Quartier boutique in Paris showing vintage furniture, gilded mirror, and curated antique objects"
                  className="w-full h-full object-cover object-center transform hover:scale-[1.02] transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
              </div>
              <div className="pt-3 px-1 flex justify-between items-center text-[11px] uppercase tracking-wider text-[#8A837B]">
                <span>Independent Antique Gallery</span>
                <span>Paris 11e</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE FOUR CATEGORIES OVERVIEW */}
      <section id="home-categories-section" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="border-t border-[#E8E2D8] pt-14 sm:pt-20">
          <div className="max-w-3xl mb-12">
            <p className="text-xs uppercase tracking-[0.25em] text-[#8A837B] font-medium">Curated Offering</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1A18] mt-2 tracking-tight">
              Four Dimensions of Character &amp; Craft
            </h2>
            <p className="text-[#5C5650] mt-3 text-base leading-relaxed">
              At Antiquités du Quartier, we concentrate on four complementary categories that define distinct and inviting living environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((cat, index) => {
              const targetPage =
                cat.id === 'vintage-furniture'
                  ? 'vintage-furniture'
                  : cat.id === 'unique-pieces'
                  ? 'collections'
                  : 'decorative-objects';

              return (
                <div
                  key={cat.id}
                  id={`home-category-card-${cat.id}`}
                  className="border border-[#E8E2D8] bg-[#FDFCFA] p-6 sm:p-8 flex flex-col justify-between hover:border-[#1C1A18] transition-all duration-300 group"
                >
                  <div className="space-y-4">
                    <span className="font-serif text-2xl text-[#B38743] font-light">0{index + 1}</span>
                    <h3 className="font-serif text-2xl text-[#1C1A18] tracking-tight group-hover:text-[#5C5650] transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-sm text-[#5C5650] leading-relaxed">
                      {cat.summary}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-[#F3EFE9]">
                    <button
                      onClick={() => onNavigate(targetPage)}
                      className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#1C1A18] font-medium hover:text-[#B38743] transition-colors cursor-pointer"
                    >
                      <span>Read Overview</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. VINTAGE FURNITURE HIGHLIGHT */}
      <section id="home-furniture-section" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#F6F2EA] border border-[#E8E2D8] p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Image (6 cols) */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative border border-[#DFD8CC] bg-[#FAF8F5] p-2 sm:p-3 shadow-xs">
                <div className="overflow-hidden aspect-4/3">
                  <img
                    src={furnitureImg}
                    alt="Vintage furniture with authentic wood grain and classic silhouette in a Parisian interior setting"
                    className="w-full h-full object-cover object-center transform hover:scale-[1.02] transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div className="pt-2 px-1 text-[11px] text-[#7A736B] tracking-wide flex justify-between">
                  <span>Vintage Furniture Composition</span>
                  <span>Character &amp; Presence</span>
                </div>
              </div>
            </div>

            {/* Content (6 cols) */}
            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <p className="text-xs uppercase tracking-[0.25em] text-[#8A837B] font-medium">
                Individual Presence
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1A18] tracking-tight leading-tight">
                Furniture that Anchors a Room with Quiet Authority
              </h2>
              <div className="space-y-4 text-[#5C5650] text-sm sm:text-base leading-relaxed">
                <p>
                  Vintage furniture carries a singular dignity that cannot be mass-produced. Older pieces possess proportions and details shaped by careful hands, exhibiting the gentle mellowing of surfaces and the tactile resonance of enduring construction.
                </p>
                <p>
                  When introduced into a contemporary interior, an individual vintage chest, table, or seating piece acts as an anchor—grounding modern architecture with warmth, visual depth, and an unhurried sense of permanence.
                </p>
              </div>
              <div className="pt-2">
                <button
                  id="home-furniture-learn-more"
                  onClick={() => onNavigate('vintage-furniture')}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#1C1A18] hover:text-[#B38743] transition-colors cursor-pointer group"
                >
                  <span>Explore Vintage Furniture Insights</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DECORATIVE OBJECTS & COLLECTIBLES HIGHLIGHT */}
      <section id="home-decor-section" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Content (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-xs uppercase tracking-[0.25em] text-[#8A837B] font-medium">
              Nuance &amp; Curiosity
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1A18] tracking-tight leading-tight">
              Decorative Objects &amp; Curious Collectibles
            </h2>
            <div className="space-y-4 text-[#5C5650] text-sm sm:text-base leading-relaxed">
              <p>
                While furniture establishes the structure of a space, it is decorative objects and collectibles that impart genuine intimacy and personality. A sculpted timepiece, a patinated vessel, or an unusual tabletop curio invites lingering observation.
              </p>
              <p>
                Our curated selection of decorative pieces focuses on standalone visual appeal. These are objects designed to be enjoyed up close—pieces that spark conversation and transform empty surfaces into evocative personal arrangements.
              </p>
            </div>
            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <button
                id="home-decor-learn-more"
                onClick={() => onNavigate('decorative-objects')}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#1C1A18] hover:text-[#B38743] transition-colors cursor-pointer group"
              >
                <span>Discover Decorative Objects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Double Visual Vignettes (6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-[#E8E2D8] bg-[#FDFCFA] p-2 shadow-xs">
              <div className="overflow-hidden aspect-square">
                <img
                  src={decorImg}
                  alt="Decorative antique mantel clock with sculpted detail"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <p className="text-[11px] text-[#7A736B] pt-2 px-1">Decorative Objects</p>
            </div>

            <div className="border border-[#E8E2D8] bg-[#FDFCFA] p-2 shadow-xs sm:mt-8">
              <div className="overflow-hidden aspect-square">
                <img
                  src={curioImg}
                  alt="Vintage collector cabinet with drawers reflecting curiosity and craftsmanship"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <p className="text-[11px] text-[#7A736B] pt-2 px-1">Collectibles &amp; Curiosities</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE APPEAL OF VINTAGE INTERIORS (Editorial Philosophy) */}
      <section id="home-interior-appeal-section" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="border border-[#E8E2D8] bg-[#FAF8F5] p-8 sm:p-12 lg:p-16">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <p className="text-xs uppercase tracking-[0.25em] text-[#8A837B] font-medium">Design Philosophy</p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1C1A18] tracking-tight">
              The Enduring Appeal of Vintage Interiors
            </h2>
            <p className="text-[#5C5650] text-base sm:text-lg leading-relaxed pt-2">
              Why older pieces, collected over time, create the most memorable and harmonious homes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3 p-6 bg-[#FDFCFA] border border-[#E8E2D8]">
              <div className="w-9 h-9 flex items-center justify-center bg-[#F3EFE9] text-[#1C1A18]">
                <Sparkles className="w-4 h-4 text-[#B38743]" />
              </div>
              <h3 className="font-serif text-xl text-[#1C1A18] font-medium">Tactile Depth &amp; Patina</h3>
              <p className="text-sm text-[#5C5650] leading-relaxed">
                Modern finishes often present unbroken, uniform surfaces. In contrast, vintage pieces introduce nuanced textures, soft softening of edges, and honest signs of life that bring human warmth to any room.
              </p>
            </div>

            <div className="space-y-3 p-6 bg-[#FDFCFA] border border-[#E8E2D8]">
              <div className="w-9 h-9 flex items-center justify-center bg-[#F3EFE9] text-[#1C1A18]">
                <Compass className="w-4 h-4 text-[#B38743]" />
              </div>
              <h3 className="font-serif text-xl text-[#1C1A18] font-medium">Eclectic Individuality</h3>
              <p className="text-sm text-[#5C5650] leading-relaxed">
                A home furnished exclusively from a single catalog or showroom risks feeling staged. Blending vintage furniture and unique objects fosters an interior that reflects personal taste rather than fleeting trends.
              </p>
            </div>

            <div className="space-y-3 p-6 bg-[#FDFCFA] border border-[#E8E2D8]">
              <div className="w-9 h-9 flex items-center justify-center bg-[#F3EFE9] text-[#1C1A18]">
                <Clock className="w-4 h-4 text-[#B38743]" />
              </div>
              <h3 className="font-serif text-xl text-[#1C1A18] font-medium">Visual Dialogue Across Eras</h3>
              <p className="text-sm text-[#5C5650] leading-relaxed">
                Placing an older, characterful object alongside contemporary lines creates an engaging visual tension. The juxtaposition enhances both elements, highlighting the craft of the older piece and the clarity of modern design.
              </p>
            </div>
          </div>

          {/* Atmospheric Quote / Observation */}
          <div className="mt-12 pt-10 border-t border-[#E8E2D8] text-center max-w-2xl mx-auto">
            <blockquote className="font-serif italic text-lg sm:text-xl text-[#3A3530] leading-relaxed">
              &ldquo;An antique does not merely occupy physical space; it alters the pace and atmosphere of the room around it.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* 6. INDEPENDENT ANTIQUE-SHOP CHARACTER */}
      <section id="home-character-section" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Visual (5 cols) */}
          <div className="lg:col-span-5">
            <div className="border border-[#E8E2D8] bg-[#FDFCFA] p-3 shadow-xs">
              <div className="overflow-hidden aspect-4/3 sm:aspect-16/11">
                <img
                  src={salonImg}
                  alt="Historic architectural interior in Paris with boiserie and antique elegance"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <div className="pt-2 px-1 text-[11px] text-[#7A736B] tracking-wide flex justify-between">
                <span>Parisian Architectural Character</span>
                <span>Rue de Charonne</span>
              </div>
            </div>
          </div>

          {/* Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xs uppercase tracking-[0.25em] text-[#8A837B] font-medium">The Parisian Boutique</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1A18] tracking-tight leading-tight">
              The Intimate Charm of an Independent Antique Shop
            </h2>
            <div className="space-y-4 text-[#5C5650] text-sm sm:text-base leading-relaxed">
              <p>
                In an era of frictionless digital commerce, the experience of stepping into an independent antique shop remains unmatched. Antiquités du Quartier is situated in the 11th arrondissement of Paris—a quarter historically renowned for skilled artisans, cabinetmakers, and independent trade.
              </p>
              <p>
                Here, browsing is unhurried and personal. There are no algorithmic recommendations or mass-produced inventories. Instead, visitors encounter a curated environment where each object has been individually considered for its aesthetic presence, textural appeal, and distinctive identity.
              </p>
              <p>
                Whether you are seeking an anchor piece for a living room, an intriguing object for a private collection, or simply the pleasure of discovery, an independent shop offers the serendipity of the unexpected encounter.
              </p>
            </div>
            <div className="pt-2">
              <button
                id="home-about-link-button"
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#1C1A18] hover:text-[#B38743] transition-colors cursor-pointer"
              >
                <span>Read About Antiquités du Quartier</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CLOSING INVITATION TO VISIT OR ENQUIRE */}
      <section id="home-invitation-section" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#1C1A18] text-[#FAF8F5] p-8 sm:p-14 lg:p-20 relative overflow-hidden">
          <div className="max-w-3xl space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#2A2623] border border-[#3D3733] text-xs uppercase tracking-[0.2em] font-medium text-[#B38743]">
              <MapPin className="w-3.5 h-3.5" />
              <span>19 Rue de Charonne, 75011 Paris</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight leading-tight">
              We Invite You to Visit or Enquire
            </h2>

            <p className="text-[#C4BCB3] text-base sm:text-lg leading-relaxed font-light">
              We welcome collectors, interior designers, and visitors to discover our current selection of vintage furniture, decorative objects, collectibles, and unique pieces in the 11th arrondissement of Paris.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                id="home-closing-call-btn"
                href={BUSINESS_INFO.phoneHref}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FAF8F5] text-[#1C1A18] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#F3EFE9] transition-colors"
                aria-label={`Call shop at ${BUSINESS_INFO.phone}`}
              >
                <Phone className="w-4 h-4 text-[#B38743]" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
              <button
                id="home-closing-enquire-btn"
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#FAF8F5] text-[#FAF8F5] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#2A2623] transition-colors cursor-pointer"
              >
                <span>Send an Enquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="pt-6 border-t border-[#332F2B] text-xs text-[#8A837B] flex flex-wrap gap-4 items-center">
              <span>★ {BUSINESS_INFO.trustLine}</span>
              <span>•</span>
              <span>Paris 11e — Métro Ledru-Rollin / Bastille</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
