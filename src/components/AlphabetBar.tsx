import { motion } from 'framer-motion';
import type { EntryType } from '../types/entry';
import { TURKISH_ALPHABET } from '../utils/turkish';

interface AlphabetBarProps {
  activeTab: EntryType;
  selectedLetter: string;
  onSelectLetter: (letter: string) => void;
  letterCounts: Map<string, number>;
  totalCount: number;
}

export function AlphabetBar({
  activeTab,
  selectedLetter,
  onSelectLetter,
  letterCounts,
  totalCount,
}: AlphabetBarProps) {
  const accentColor = activeTab === 'atasozu' ? '#C84B31' : '#1B5E63';

  return (
    <nav
      aria-label="Alfabetik Harf Filtresi"
      className="sticky top-0 z-30 border-y border-[#181B1F]/12 bg-[#F7F3EA]/92 backdrop-blur-md"
    >
      <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
        <div className="no-scrollbar flex items-center gap-1.5 overflow-x-auto pb-0.5 sm:flex-wrap sm:justify-center sm:overflow-visible sm:pb-0">
          {/* Tümü Button */}
          <motion.button
            type="button"
            whileHover={{ y: -1.5 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => onSelectLetter('ALL')}
            className={`relative shrink-0 cursor-pointer rounded-xl border-[1.5px] px-3.5 py-1.5 text-xs font-bold tracking-wide transition-colors sm:text-[13px] ${
              selectedLetter === 'ALL'
                ? 'border-[#181B1F] text-[#FFFDF9]'
                : 'border-[#181B1F]/20 bg-[#FFFDF9] text-[#181B1F] hover:border-[#181B1F] hover:bg-[#FAF6EE]'
            }`}
          >
            {selectedLetter === 'ALL' && (
              <motion.span
                layoutId="activeLetterTile"
                transition={{ type: 'spring', stiffness: 460, damping: 32 }}
                style={{ backgroundColor: accentColor }}
                className="absolute inset-0 rounded-[10px] shadow-[2px_2px_0_#181B1F]"
              />
            )}
            <span className="relative z-10 flex items-center gap-1.5">
              <span>Tümü</span>
              <span
                className={`rounded-full px-1.5 py-0.2 text-[10px] tabular-nums ${
                  selectedLetter === 'ALL'
                    ? 'bg-black/20 text-[#FFFDF9]'
                    : 'bg-[#EFE9DC] text-[#5A564E]'
                }`}
              >
                {totalCount}
              </span>
            </span>
          </motion.button>

          <span
            aria-hidden="true"
            className="mx-1 h-5 w-[1px] shrink-0 bg-[#181B1F]/15"
          />

          {/* Turkish A-Z Letter Tiles */}
          {TURKISH_ALPHABET.map((letter) => {
            const count = letterCounts.get(letter) ?? 0;
            const isAvailable = count > 0;
            const isSelected = selectedLetter === letter;

            return (
              <motion.button
                key={letter}
                type="button"
                disabled={!isAvailable}
                whileHover={isAvailable ? { y: -1.5 } : undefined}
                whileTap={isAvailable ? { scale: 0.94 } : undefined}
                onClick={() => isAvailable && onSelectLetter(letter)}
                aria-label={`${letter} harfi (${count} kayıt)`}
                aria-pressed={isSelected}
                title={
                  isAvailable
                    ? `${letter} harfi (${count} söz)`
                    : `${letter} harfiyle başlayan kayıt yok`
                }
                className={`relative flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border-[1.5px] text-xs font-bold transition-colors sm:h-9 sm:w-9 sm:text-[13px] ${
                  !isAvailable
                    ? 'cursor-default border-[#181B1F]/8 bg-transparent text-[#181B1F]/28'
                    : isSelected
                      ? 'cursor-pointer border-[#181B1F] text-[#FFFDF9]'
                      : 'cursor-pointer border-[#181B1F]/20 bg-[#FFFDF9] text-[#181B1F] hover:border-[#181B1F] hover:bg-[#FAF6EE]'
                }`}
              >
                {isSelected && (
                  <motion.span
                    layoutId="activeLetterTile"
                    transition={{ type: 'spring', stiffness: 460, damping: 32 }}
                    style={{ backgroundColor: accentColor }}
                    className="absolute inset-0 rounded-[10px] shadow-[2px_2px_0_#181B1F]"
                  />
                )}
                <span className="relative z-10">{letter}</span>
                {isAvailable && !isSelected && (
                  <span
                    aria-hidden="true"
                    style={{ backgroundColor: accentColor }}
                    className="absolute right-1 bottom-1 h-1 w-1 rounded-full opacity-75"
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
