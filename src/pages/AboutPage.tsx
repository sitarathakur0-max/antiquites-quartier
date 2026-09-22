import { ArrowRight, MapPin, Phone, Compass, Sparkles, Building2, Check } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/content';
import { TrustBadge } from '../components/TrustBadge';

import heroImg from '../assets/images/hero_antique_shop_1789837776648.jpg';
import streetImg from '../assets/images/paris_charonne_street.jpg';
import salonImg from '../assets/images/parisian_salon_interior.jpg';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div id="about-page-root" className="space-y-20 sm:space-y-28 pb-24">
      {/* 1. Header Section */}
      <section className="pt-10 sm:pt-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F3EFE9] border border-[#E8E2D8] text-xs uppercase tracking-[0.2em] font-medium text-[#5C5650]">
            <span>About The Shop</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1C1A18] tracking-tight font-normal">
            An Independent Antique Shop in Paris
          </h1>
          <p className="text-lg sm:text-xl text-[#5C5650] leading-relaxed font-light">
            Antiquités du Quartier is an independent antique and vintage shop located at 19 Rue de Charonne in the 11th arrondissement of Paris, dedicated to pieces distinguished by character, craft, and individuality.
          </p>
          <div className="pt-2">
            <TrustBadge variant="minimal" />
          </div>
        </div>
      </section>

      {/* 2. Core Focus & Identity */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 space-y-6">
            <p className="text-xs uppercase tracking-[0.25em] text-[#8A837B] font-medium">Independent Curation</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1A18] tracking-tight leading-tight">
              A Dedication to Character, Craft &amp; Individuality
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#5C5650] leading-relaxed">
              <p>
                At Antiquités du Quartier, our focus centers on four interrelated categories: vintage furniture, decorative objects, collectibles, and unique pieces. We believe that true beauty in an interior stems from the individuality of objects that have lived through time.
              </p>
              <p>
                As an independent boutique, every item presented on our floor is chosen for its standalone dignity, tactile quality, and visual presence. Rather than following transient retail trends, our offering celebrates the enduring appeal of older craftsmanship.
              </p>
              <p>
                Whether you are seeking an anchor furniture piece to ground a contemporary apartment or a curious collectible to enrich a private collection, our boutique provides an unhurried sanctuary for discovery.
              </p>
            </div>
            <div className="pt-2">
              <button
                id="about-to-collections"
                onClick={() => onNavigate('collections')}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#1C1A18] hover:text-[#B38743] transition-colors cursor-pointer"
              >
                <span>Explore the Collections</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="border border-[#E8E2D8] bg-[#FDFCFA] p-3 shadow-xs">
              <div className="overflow-hidden aspect-4/3">
                <img
                  src={heroImg}
                  alt="Interior of Antiquités du Quartier antique shop in Paris with vintage furniture and objects"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
              </div>
              <div className="pt-3 px-1 flex justify-between items-center text-xs text-[#7A736B]">
                <span>Antiquités du Quartier</span>
                <span>Paris 11e</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Neighborhood: Rue de Charonne in Paris 11e */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="border border-[#E8E2D8] bg-[#FAF8F5] p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="border border-[#E8E2D8] bg-[#FDFCFA] p-3 shadow-xs">
                <div className="overflow-hidden aspect-4/3">
                  <img
                    src={streetImg}
                    alt="Rue de Charonne in the 11th arrondissement of Paris"
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div className="pt-2 px-1 text-[11px] text-[#7A736B] flex justify-between">
                  <span>Rue de Charonne</span>
                  <span>75011 Paris, France</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F3EFE9] border border-[#E8E2D8] text-xs uppercase tracking-[0.2em] font-medium text-[#5C5650]">
                <Building2 className="w-3.5 h-3.5 text-[#B38743]" />
                <span>The Parisian Setting</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1A18] tracking-tight leading-tight">
                Rooted in the Historic 11th Arrondissement
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#5C5650] leading-relaxed">
                <p>
                  Situated at 19 Rue de Charonne, our shop is immersed in a vibrant Parisian neighborhood that has long been intertwined with fine crafts, cabinetmaking traditions, and independent commerce.
                </p>
                <p>
                  Strolling along Rue de Charonne offers visitors a true taste of authentic Parisian street life, with its classic courtyards, artisan workshops, and independent shops. Antiquités du Quartier is proud to contribute to this rich local fabric.
                </p>
                <p>
                  Our location is easily accessible from Metro stations Ledru-Rollin and Bastille, welcoming local residents, Parisian collectors, and international visitors seeking distinctive pieces.
                </p>
              </div>
              <div className="pt-2">
                <button
                  id="about-visit-directions"
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#1C1A18] hover:text-[#B38743] transition-colors cursor-pointer"
                >
                  <span>Find Us on Rue de Charonne</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The Experience of Discovery */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-xs uppercase tracking-[0.25em] text-[#8A837B] font-medium">The Boutique Experience</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1C1A18] tracking-tight">
            The Pleasure of the Unexpected Encounter
          </h2>
          <p className="text-sm sm:text-base text-[#5C5650] leading-relaxed">
            In our boutique, discovery is a sensory and tactile experience. We invite you to step inside, take your time, and explore pieces that carry an unmistakable presence into any home.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href={BUSINESS_INFO.phoneHref}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#1C1A18] text-[#FAF8F5] text-xs uppercase tracking-widest font-semibold hover:bg-[#332F2B] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#B38743]" />
              <span>Call +33 1 42 76 35 18</span>
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-8 py-4 border border-[#1C1A18] text-[#1C1A18] text-xs uppercase tracking-widest font-semibold hover:bg-[#F3EFE9] transition-colors cursor-pointer"
            >
              <span>Visit or Enquire Online</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
