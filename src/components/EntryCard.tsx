import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { DictionaryEntry } from '../types/entry';
import { getTurkishFirstLetter } from '../utils/turkish';
import { resolveAssetUrl } from '../utils/url';

interface EntryCardProps {
  entry: DictionaryEntry;
  index: number;
  orderNumber: number;
  onSelect: (entry: DictionaryEntry) => void;
}

export function EntryCard({
  entry,
  index,
  orderNumber,
  onSelect,
}: EntryCardProps) {
  const isAtasozu = entry.type === 'atasozu';
  const accentColor = isAtasozu ? '#C84B31' : '#1B5E63';
  const firstLetter = getTurkishFirstLetter(entry.title);
  const formattedOrder = String(orderNumber).padStart(2, '0');

  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: Math.min(index * 0.025, 0.25),
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -5 }}
      onClick={() => onSelect(entry)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(entry);
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`${entry.title} — detayları aç`}
      style={
        {
          '--card-accent': accentColor,
        } as React.CSSProperties
      }
      className="group relative flex cursor-pointer flex-col overflow-hidden rounded-[22px] border-[1.5px] border-[#181B1F]/16 bg-[#FFFDF9] shadow-[0_2px_10px_rgba(24,27,31,0.04)] transition-all duration-200 hover:border-[#181B1F] hover:shadow-[6px_6px_0_var(--card-accent)] focus:outline-none focus-visible:border-[#181B1F] focus-visible:ring-2 focus-visible:ring-[#181B1F]"
    >
      {/* Square Minimalist Illustration Frame */}
      <div className="relative aspect-square w-full overflow-hidden border-b border-[#181B1F]/10 bg-[#F9F4E7]">
        <img
          src={resolveAssetUrl(entry.image)}
          alt={entry.title}
          loading={index < 6 ? 'eager' : 'lazy'}
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.045]"
        />

        {/* Editorial Index Stamp */}
        <div className="pointer-events-none absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-lg border border-[#181B1F]/18 bg-[#FFFDF9]/92 px-2.5 py-1 text-[11px] font-bold tracking-wider text-[#181B1F] backdrop-blur-xs">
          <span style={{ color: accentColor }}>{firstLetter}</span>
          <span className="text-[#181B1F]/30">·</span>
          <span className="tabular-nums text-[#5A564E]">{formattedOrder}</span>
        </div>
      </div>

      {/* Text Body */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-[1.28rem] leading-[1.28] font-bold tracking-tight text-[#181B1F]">
          {entry.title}
        </h3>

        <p className="mt-2.5 flex-1 text-[0.94rem] leading-[1.6] text-[#4F4B44]">
          {entry.meaning}
        </p>

        <div className="mt-4 flex items-center justify-between border-t border-[#181B1F]/8 pt-3">
          <span
            style={{ color: accentColor }}
            className="text-xs font-bold tracking-wide uppercase"
          >
            {isAtasozu ? 'Atasözü' : 'Deyim'}
          </span>

          <span className="inline-flex items-center gap-1 text-xs font-bold text-[#181B1F]/70 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-[#181B1F]">
            <span>İncele</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </motion.article>
  );
}
