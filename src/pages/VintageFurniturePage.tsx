import { ArrowRight, Phone, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/content';
import { TrustBadge } from '../components/TrustBadge';

import furnitureImg from '../assets/images/vintage_furniture_1789837794173.jpg';
import salonImg from '../assets/images/parisian_salon_interior.jpg';
import consoleImg from '../assets/images/antique_console_detail.jpg';

interface VintageFurniturePageProps {
  onNavigate: (page: PageId) => void;
}

export function VintageFurniturePage({ onNavigate }: VintageFurniturePageProps) {
  return (
    <div id="vintage-furniture-page-root" className="space-y-20 sm:space-y-28 pb-24">
      {/* Header Section */}
      <section className="pt-10 sm:pt-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F3EFE9] border border-[#E8E2D8] text-xs uppercase tracking-[0.2em] font-medium text-[#5C5650]">
            <span>Dedicated Category</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1C1A18] tracking-tight font-normal">
            Vintage Furniture with Lasting Character
          </h1>
          <p className="text-lg sm:text-xl text-[#5C5650] leading-relaxed font-light">
            Selected vintage furniture pieces chosen for their standalone presence, thoughtful proportions, and the natural depth that comes with age.
          </p>
          <div className="pt-2">
            <TrustBadge variant="minimal" />
          </div>
        </div>
      </section>

      {/* Featured Visual and Core Concept */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <div className="border border-[#E8E2D8] bg-[#FDFCFA] p-3 shadow-xs">
              <div className="overflow-hidden aspect-16/10 sm:aspect-16/10">
                <img
                  src={furnitureImg}
                  alt="Vintage furniture arrangement showing aged wood finish and elegant silhouette in Paris"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
              </div>
              <div className="pt-3 px-1 flex justify-between items-center text-xs text-[#7A736B]">
                <span>Presence &amp; Form</span>
                <span>Antiquités du Quartier</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1A18] tracking-tight leading-tight">
              Furniture with Visual Character
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#5C5650] leading-relaxed">
              <p>
                What distinguishes vintage furniture is its unmistakable visual character. Unlike modern mass-produced furniture designed for rapid turnover, older pieces were conceived with an emphasis on balance, substance, and durability.
              </p>
              <p>
                The surface of a vintage piece carries a gentle, unrepeatable patina—the mellowed tone of wood, the softening of bevels, and the faint traces of time that confer authentic character upon every plane and drawer.
              </p>
            </div>
            <div className="pt-2">
              <a
                href={BUSINESS_INFO.phoneHref}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#1C1A18] text-[#FAF8F5] text-xs uppercase tracking-widest font-semibold hover:bg-[#332F2B] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#B38743]" />
                <span>Enquire by Phone: {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BRINGING VINTAGE PIECES INTO CONTEMPORARY SPACES */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="border border-[#E8E2D8] bg-[#FAF8F5] p-8 sm:p-12 lg:p-16">
          <div className="max-w-3xl mb-12">
            <p className="text-xs uppercase tracking-[0.25em] text-[#8A837B] font-medium">Interior Harmony</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1A18] mt-2 tracking-tight">
              Bringing Vintage Pieces into Contemporary Spaces
            </h2>
            <p className="text-[#5C5650] mt-3 text-base leading-relaxed">
              One does not need an entire period apartment to appreciate vintage furniture. In fact, vintage pieces often look their most striking when juxtaposed against modern architectural simplicity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-4 p-6 sm:p-8 bg-[#FDFCFA] border border-[#E8E2D8]">
              <h3 className="font-serif text-2xl text-[#1C1A18] tracking-tight">
                The Power of the Anchor Piece
              </h3>
              <p className="text-sm text-[#5C5650] leading-relaxed">
                A single substantial vintage item—such as an authentic chest, sideboard, or large work table—provides an interior with an immediate focal anchor. Surrounded by clean white walls, minimalist lighting, or contemporary artwork, the older piece gains added prominence while softening the starkness of a modern room.
              </p>
            </div>

            <div className="space-y-4 p-6 sm:p-8 bg-[#FDFCFA] border border-[#E8E2D8]">
              <h3 className="font-serif text-2xl text-[#1C1A18] tracking-tight">
                Warmth &amp; Acoustic Softness
              </h3>
              <p className="text-sm text-[#5C5650] leading-relaxed">
                Contemporary interiors often incorporate glass, polished concrete, steel, and synthetic laminates. Introducing vintage furniture restores sensory warmth, natural tactile resonance, and acoustic comfort to living rooms, dining areas, and workspaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE INDIVIDUALITY OF OLDER FURNITURE */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 space-y-6">
            <p className="text-xs uppercase tracking-[0.25em] text-[#8A837B] font-medium">Authenticity</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1A18] tracking-tight leading-tight">
              The Individuality of Older Furniture
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#5C5650] leading-relaxed">
              <p>
                In a world dominated by standardized flat-pack catalog living, older furniture represents individuality. No two pieces share the exact same grain, finish maturation, or visual personality.
              </p>
              <p>
                When you live with a vintage piece, you live with an object that possesses quiet integrity. It does not feel disposable or temporary; rather, it represents a long arc of utility and respect for craftsmanship.
              </p>
            </div>
            <ul className="space-y-3 pt-2 text-sm text-[#5C5650]">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#B38743] mt-1 shrink-0" />
                <span>Subtle hand-joined construction details visible upon close inspection</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#B38743] mt-1 shrink-0" />
                <span>Natural surfaces that improve with gentle everyday use and care</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#B38743] mt-1 shrink-0" />
                <span>Proportions that harmonize comfortably within residential settings</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-6">
            <div className="border border-[#E8E2D8] bg-[#FDFCFA] p-3 shadow-xs">
              <div className="overflow-hidden aspect-4/3">
                <img
                  src={consoleImg}
                  alt="Detail of handcrafted antique console table showing authentic patina and wood texture"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <p className="text-[11px] text-[#7A736B] pt-2 px-1">Individuality • Handcrafted details &amp; genuine patina</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DISCOVERING DISTINCTIVE PIECES FOR THE HOME */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#F6F2EA] border border-[#E8E2D8] p-8 sm:p-12 lg:p-16">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs uppercase tracking-[0.25em] text-[#8A837B] font-medium">The Search for the Right Piece</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1A18] tracking-tight leading-tight">
              Discovering Distinctive Pieces for the Home
            </h2>
            <div className="space-y-4 text-[#5C5650] text-sm sm:text-base leading-relaxed">
              <p>
                Finding the ideal piece of vintage furniture is rarely an automated process. It requires curiosity, patience, and the willingness to experience an item in person—to run a hand across its surface, test a drawer, and visualize how its dimensions will converse with your existing room.
              </p>
              <p>
                At Antiquités du Quartier, we regularly assist clients searching for that specific piece of character—whether it is a dining table to host gatherings, a credenza to organize a hallway, or an armchair with quiet sculptural elegance.
              </p>
            </div>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button
                id="furniture-visit-cta"
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1C1A18] text-[#FAF8F5] text-xs uppercase tracking-widest font-semibold hover:bg-[#332F2B] transition-colors cursor-pointer"
              >
                <span>Visit Us at 19 Rue de Charonne</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                id="furniture-view-decor-cta"
                onClick={() => onNavigate('decorative-objects')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#1C1A18] text-[#1C1A18] text-xs uppercase tracking-widest font-semibold hover:bg-[#F3EFE9] transition-colors cursor-pointer"
              >
                <span>View Decorative Objects</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
