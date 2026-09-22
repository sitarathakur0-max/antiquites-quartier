export type PageId =
  | 'home'
  | 'collections'
  | 'vintage-furniture'
  | 'decorative-objects'
  | 'about'
  | 'faq'
  | 'contact';

export interface NavItem {
  id: PageId;
  label: string;
  path: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'collections' | 'furniture' | 'decor' | 'collectibles' | 'visit';
}

export interface EnquiryFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
