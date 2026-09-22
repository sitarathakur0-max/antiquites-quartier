import { ArrowRight, Phone, MapPin, Eye, Sparkles, Compass } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/content';
import { TrustBadge } from '../components/TrustBadge';

import decorImg from '../assets/images/decorative_clock_object.jpg';
import curioImg from '../assets/images/antique_curio_cabinet.jpg';
import consoleImg from '../assets/images/antique_console_detail.jpg';

interface DecorativeObjectsPageProps {
  onNavigate: (page: PageId) => void;
}

export function DecorativeObjectsPage({ onNavigate }: DecorativeObjectsPageProps) {
  return (
    <div id="decorative-objects-page-root" className="space-y-20 sm:space-y-28 pb-24">
      {/* Header Section */}
      <section className="pt-10 sm:pt-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F3EFE9] border border-[#E8E2D8] text-xs uppercase tracking-[0.2em] font-medium text-[#5C5650]">
            <span>Dedicated Category</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1C1A18] tracking-tight font-normal">
            Decorative Objects &amp; Collectibles
          </h1>
          <p className="text-lg sm:text-xl text-[#5C5650] leading-relaxed font-light">
            Exploring the tactile intrigue, individual character, and personal charm of decorative objects, collectibles, and unique pieces.
          </p>
          <div className="pt-2">
            <TrustBadge variant="minimal" />
          </div>
        </div>
      </section>

      {/* 1. INDIVIDUAL CHARACTER */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 space-y-6">
            <p className="text-xs uppercase tracking-[0.25em] text-[#8A837B] font-medium">Visual Identity</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1A18] tracking-tight leading-tight">
              Individual Character in Every Object
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#5C5650] leading-relaxed">
              <p>
                In interior design, small objects often exert a disproportionate visual impact. A decorative piece does not merely occupy a tabletop; it commands attention through subtle nuances of silhouette, surface reflection, and weight.
              </p>
              <p>
                At Antiquités du Quartier, we curate decorative pieces and collectibles that have distinct character. These are objects that reward prolonged viewing—revealing fine detailing, subtle variances of color, and the satisfying tactile quality of historical making.
              </p>
            </div>
            <div className="pt-2">
              <a
                href={BUSINESS_INFO.phoneHref}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#1C1A18] hover:text-[#B38743] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#B38743]" />
                <span>Enquire Directly: {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="border border-[#E8E2D8] bg-[#FDFCFA] p-3 shadow-xs">
              <div className="overflow-hidden aspect-4/3">
                <img
                  src={decorImg}
                  alt="Decorative antique mantel clock with sculptural details"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
              </div>
              <p className="text-[11px] text-[#7A736B] pt-2 px-1">Decorative Object • Sculptural presence &amp; craftsmanship</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DECORATIVE APPEAL & PERSONAL INTERIORS */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="border border-[#E8E2D8] bg-[#FAF8F5] p-8 sm:p-12 lg:p-16">
          <div className="max-w-3xl mb-12">
            <p className="text-xs uppercase tracking-[0.25em] text-[#8A837B] font-medium">Styling &amp; Expression</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1A18] mt-2 tracking-tight">
              Decorative Appeal &amp; Personal Interiors
            </h2>
            <p className="text-[#5C5650] mt-3 text-base leading-relaxed">
              True personal style is revealed not in uniform sets, but in the deliberate curation of objects that reflect curiosity and individual taste.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-4 p-6 sm:p-8 bg-[#FDFCFA] border border-[#E8E2D8]">
              <div className="w-9 h-9 flex items-center justify-center bg-[#F3EFE9] text-[#1C1A18]">
                <Eye className="w-4 h-4 text-[#B38743]" />
              </div>
              <h3 className="font-serif text-2xl text-[#1C1A18] tracking-tight">
                Points of Curiosity on Everyday Surfaces
              </h3>
              <p className="text-sm text-[#5C5650] leading-relaxed">
                Whether placed upon a mantelpiece, a low coffee table, a library shelf, or a bedside stand, an unusual antique object introduces a moment of contemplation. It breaks the monotony of functional surfaces and introduces an artistic focal point.
              </p>
            </div>

            <div className="space-y-4 p-6 sm:p-8 bg-[#FDFCFA] border border-[#E8E2D8]">
              <div className="w-9 h-9 flex items-center justify-center bg-[#F3EFE9] text-[#1C1A18]">
                <Compass className="w-4 h-4 text-[#B38743]" />
              </div>
              <h3 className="font-serif text-2xl text-[#1C1A18] tracking-tight">
                Reflecting Personal Sensibility
              </h3>
              <p className="text-sm text-[#5C5650] leading-relaxed">
                Unlike mass decor produced to match seasonal retail trends, antique collectibles are collected gradually. Each item represents a personal discovery, an encounter with craftsmanship, and an expression of aesthetic discernment that endures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE EXPERIENCE OF DISCOVERING UNUSUAL PIECES */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="border border-[#E8E2D8] bg-[#FDFCFA] p-3 shadow-xs">
              <div className="overflow-hidden aspect-4/3">
                <img
                  src={curioImg}
                  alt="Collector cabinet showing the spirit of discovery and antique fascination"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <p className="text-[11px] text-[#7A736B] pt-2 px-1">Collectibles &amp; Curios • The Joy of the Search</p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <p className="text-xs uppercase tracking-[0.25em] text-[#8A837B] font-medium">The Parisian Discovery</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1A18] tracking-tight leading-tight">
              The Experience of Discovering Unusual Pieces
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#5C5650] leading-relaxed">
              <p>
                There is a singular excitement in visiting an independent antique boutique where objects have not been homogenised. Stepping into Antiquités du Quartier on Rue de Charonne invites an unhurried visual exploration.
              </p>
              <p>
                An unusual decorative piece or rare curio often finds its owner through an immediate, instinctive connection—an affinity for its form, its tactile surface, or the mysterious sense of time it conveys.
              </p>
              <p>
                Because our collection comprises authentic standalone pieces, inventory rotates as new items arrive from our ongoing discoveries across Paris and beyond.
              </p>
            </div>
            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <button
                id="decor-visit-shop-button"
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1C1A18] text-[#FAF8F5] text-xs uppercase tracking-widest font-semibold hover:bg-[#332F2B] transition-colors cursor-pointer"
              >
                <span>Visit Us in Paris 11e</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INVITATION & ENQUIRY */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#F6F2EA] border border-[#E8E2D8] p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-4">
          <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1A18]">
            Enquire About Decorative Pieces &amp; Collectibles
          </h3>
          <p className="text-sm text-[#5C5650] leading-relaxed">
            Interested in discovering decorative accents or collectible objects currently on display? Contact Antiquités du Quartier directly by phone or enquire online.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={BUSINESS_INFO.phoneHref}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1C1A18] text-[#FAF8F5] text-xs uppercase tracking-widest font-semibold hover:bg-[#332F2B] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#B38743]" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#1C1A18] text-[#1C1A18] text-xs uppercase tracking-widest font-semibold hover:bg-[#F3EFE9] transition-colors cursor-pointer"
            >
              <span>Send an Enquiry</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
