import { Star } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface TrustBadgeProps {
  className?: string;
  variant?: 'light' | 'dark' | 'minimal';
}

export function TrustBadge({ className = '', variant = 'light' }: TrustBadgeProps) {
  if (variant === 'minimal') {
    return (
      <div className={`inline-flex items-center gap-2 text-xs tracking-wider uppercase font-medium text-[#5C5650] ${className}`}>
        <div className="flex items-center text-[#B38743]">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
          ))}
        </div>
        <span>{BUSINESS_INFO.trustLine}</span>
      </div>
    );
  }

  const bgStyle =
    variant === 'dark'
      ? 'bg-[#24211E] text-[#F3EFE9] border-[#3A3530]'
      : 'bg-[#FDFCFA] text-[#1C1A18] border-[#E8E2D8] shadow-xs';

  return (
    <div
      id="trust-google-reviews-badge"
      className={`inline-flex items-center gap-3 px-4 py-2 border rounded-none ${bgStyle} ${className}`}
      role="region"
      aria-label="Google Customer Rating"
    >
      <div className="flex items-center text-[#B38743]" aria-hidden="true">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-current" />
        ))}
      </div>
      <div className="flex items-center gap-2 text-xs sm:text-sm font-medium tracking-wide">
        <span className="font-semibold text-base">{BUSINESS_INFO.googleRating}</span>
        <span className="text-[#8A837B]">•</span>
        <span className="text-[#5C5650]">{BUSINESS_INFO.reviewCount} Google Reviews</span>
      </div>
    </div>
  );
}
