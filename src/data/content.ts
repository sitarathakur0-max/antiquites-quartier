import { NavItem, FAQItem } from '../types';

export const BUSINESS_INFO = {
  name: 'Antiquités du Quartier',
  category: 'Antique & Vintage Shop',
  address: '19 Rue de Charonne, 75011 Paris, France',
  addressStreet: '19 Rue de Charonne',
  addressDistrict: '75011 Paris, France',
  neighborhood: '11th Arrondissement (Charonne / Bastille)',
  phone: '+33 1 42 76 35 18',
  phoneHref: 'tel:+33142763518',
  googleRating: '4.7/5',
  reviewCount: '23',
  trustLine: '4.7/5 — 23 Google Reviews',
  shortAbout: 'Independent antique shop offering vintage furniture, decorative objects, collectibles and unique pieces.',
};

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', path: '#home' },
  { id: 'collections', label: 'Collections', path: '#collections' },
  { id: 'vintage-furniture', label: 'Vintage Furniture', path: '#vintage-furniture' },
  { id: 'decorative-objects', label: 'Decorative Objects & Collectibles', path: '#decorative-objects' },
  { id: 'about', label: 'About', path: '#about' },
  { id: 'faq', label: 'FAQ', path: '#faq' },
  { id: 'contact', label: 'Contact', path: '#contact' },
];

export const CATEGORIES = [
  {
    id: 'vintage-furniture' as const,
    name: 'Vintage Furniture',
    summary: 'Selected furniture pieces distinguished by their presence, crafted balance, and authentic aged character.',
    description:
      'Vintage furniture brings physical gravitas and tactile warmth to interiors. Rather than uniform mass-manufactured lines, older furniture carries the genuine marks of use, patient construction, and distinct proportions that allow a room to feel lived-in and thoughtfully composed.',
  },
  {
    id: 'decorative-objects' as const,
    name: 'Decorative Objects',
    summary: 'Individual decorative accents designed to add nuanced personality and textural contrast to living spaces.',
    description:
      'Decorative pieces act as points of visual intrigue within the home. Arranged upon mantels, credenzas, tables, or bookshelves, these standalone objects bring sculptural form, varied patinas, and distinctive charm that elevate interior compositions beyond standard decoration.',
  },
  {
    id: 'collectibles' as const,
    name: 'Collectibles',
    summary: 'Curated collectible objects that invite curiosity, tactile engagement, and enduring appreciation.',
    description:
      'Our selection of collectibles reflects an appreciation for items that evoke historical curiosity and individual fascination. Each piece offers an opportunity for collectors and enthusiasts to encounter objects with singular visual appeal.',
  },
  {
    id: 'unique-pieces' as const,
    name: 'Unique Pieces',
    summary: 'Distinctive, one-of-a-kind finds offering singular character that cannot be replicated.',
    description:
      'Unique pieces are the heart of an independent antique shop. These are the unexpected discoveries that catch the eye—unusual silhouettes, distinctive surfaces, and characterful items that bring unmistakable distinction to any private collection or interior space.',
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'What types of items does Antiquités du Quartier offer?',
    answer:
      'Antiquités du Quartier is an independent antique shop in Paris offering four core areas of interest: vintage furniture, decorative objects, collectibles, and unique pieces. Each category is chosen for its character, craftsmanship, and individuality.',
    category: 'collections',
  },
  {
    question: 'Are specific items currently in stock listed online?',
    answer:
      'Because our inventory consists of distinctive vintage furniture, decorative objects, collectibles, and unique pieces that evolve continuously, we do not maintain a real-time online catalog. We encourage you to visit our shop at 19 Rue de Charonne in Paris or contact us directly at +33 1 42 76 35 18 to enquire about currently available pieces.',
    category: 'collections',
  },
  {
    question: 'What characterizes the vintage furniture at Antiquités du Quartier?',
    answer:
      'Our vintage furniture is selected for visual character, thoughtful proportions, and the natural patina that comes with age. We appreciate furniture that introduces depth, tactile authenticity, and standalone presence when placed in contemporary homes and living environments.',
    category: 'furniture',
  },
  {
    question: 'How can decorative objects enhance a contemporary interior?',
    answer:
      'Decorative objects introduce contrast, warmth, and texture to modern rooms. Even a single characterful piece placed on a console, mantelpiece, or bookshelf can break the uniformity of contemporary design and impart a sense of personal curation and history.',
    category: 'decor',
  },
  {
    question: 'What kinds of collectibles and unique pieces can be found?',
    answer:
      'Our collectibles and unique pieces encompass a diverse range of curious, sculptural, and historically engaging items. The nature of an independent antique shop means that the selection is defined by discovery—offering visitors the chance to encounter one-of-a-kind finds.',
    category: 'collectibles',
  },
  {
    question: 'Where is the shop located in Paris?',
    answer:
      'Antiquités du Quartier is located at 19 Rue de Charonne, 75011 Paris, France, in the vibrant 11th arrondissement near Bastille and Ledru-Rollin. The neighborhood has a rich heritage of independent Parisian boutiques, cabinetmaking workshops, and design studios.',
    category: 'visit',
  },
  {
    question: 'What are the shop’s opening hours?',
    answer:
      'For current opening hours, private viewing enquiries, or to confirm availability before your visit, please contact the shop directly by telephone at +33 1 42 76 35 18 or through our website enquiry form.',
    category: 'visit',
  },
  {
    question: 'How can I enquire about pricing or reserve a piece?',
    answer:
      'To enquire about any piece or discuss your interior design requirements, please call Antiquités du Quartier directly at +33 1 42 76 35 18 or submit your message through our contact form. We are pleased to assist you with any questions.',
    category: 'visit',
  },
];
