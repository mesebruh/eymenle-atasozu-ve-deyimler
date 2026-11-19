import { motion } from 'framer-motion';
import type { EntryType } from '../types/entry';

interface CategoryTabsProps {
  activeTab: EntryType;
  onChange: (tab: EntryType) => void;
  counts: {
    atasozu: number;
    deyim: number;
  };
}

const TABS: Array<{
  id: EntryType;
  label: string;
  subtitle: string;
  accentBg: string;
}> = [
  {
    id: 'atasozu',
    label: 'Atasözleri',
    subtitle: 'Bilgelik ve Öğüt',
    accentBg: '#C84B31',
  },
  {
    id: 'deyim',
    label: 'Deyimler',
    subtitle: 'Canlı Anlatım',
    accentBg: '#1B5E63',
  },
];

export function CategoryTabs({ activeTab, onChange, counts }: CategoryTabsProps) {
  return (
    <div className="flex justify-center">
      <div
        role="tablist"
        aria-label="Sözlük Bölümleri"
        className="relative grid w-full max-w-[460px] grid-cols-2 gap-1.5 rounded-[22px] border-2 border-[#181B1F] bg-[#EFE9DC] p-1.5 shadow-[4px_4px_0_rgba(24,27,31,0.16)]"
      >
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          const count = counts[tab.id];

          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onChange(tab.id)}
              className="group relative flex min-w-0 cursor-pointer items-center justify-between gap-1.5 rounded-2xl px-2.5 py-2.5 text-left transition-colors focus:outline-none sm:gap-3 sm:px-5 sm:py-3.5"
            >
              {isActive && (
                <motion.div
                  layoutId="categoryActivePlate"
                  transition={{ type: 'spring', stiffness: 430, damping: 32 }}
                  style={{ backgroundColor: tab.accentBg }}
                  className="absolute inset-0 rounded-2xl border-2 border-[#181B1F] shadow-[2px_2px_0_#181B1F]"
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-3 top-0.5 h-[1px] rounded-full bg-white/35"
                  />
                </motion.div>
              )}

              <div className="relative z-10 flex min-w-0 items-center gap-1.5 sm:gap-2.5">
                {/* Custom tactile editorial icon */}
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-xl border-[1.5px] transition-colors sm:h-8 sm:w-8 ${
                    isActive
                      ? 'border-[#181B1F] bg-[#FFFDF9] text-[#181B1F]'
                      : 'border-[#181B1F]/25 bg-[#FAF6EE]/80 text-[#5A564E] group-hover:border-[#181B1F]/60 group-hover:text-[#181B1F]'
                  }`}
                >
                  {tab.id === 'atasozu' ? (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 19C9 19 15.5 16.5 18.5 6.5C12.5 7 7.5 10.5 6 15.5L5 19Z"
                        fill={isActive ? '#C84B31' : 'none'}
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5 19L12.5 11.5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M4.5 11.5C4.5 7.9 7.8 5 12 5C16.2 5 19.5 7.9 19.5 11.5C19.5 15.1 16.2 18 12 18C10.7 18 9.5 17.7 8.4 17.2L4.8 18.7L5.9 15.3C5 14.2 4.5 12.9 4.5 11.5Z"
                        fill={isActive ? '#1B5E63' : 'none'}
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinejoin="round"
                      />
                      <circle cx="9.5" cy="11.5" r="1" fill={isActive ? '#FFFDF9' : 'currentColor'} />
                      <circle cx="12" cy="11.5" r="1" fill={isActive ? '#FFFDF9' : 'currentColor'} />
                      <circle cx="14.5" cy="11.5" r="1" fill={isActive ? '#FFFDF9' : 'currentColor'} />
                    </svg>
                  )}
                </span>

                <div className="flex min-w-0 flex-col">
                  <span
                    className={`truncate font-display text-[0.94rem] font-bold tracking-tight transition-colors sm:text-lg ${
                      isActive ? 'text-[#FFFDF9]' : 'text-[#181B1F]'
                    }`}
                  >
                    {tab.label}
                  </span>
                  <span
                    className={`hidden text-[11px] font-medium transition-colors sm:block ${
                      isActive ? 'text-[#FFFDF9]/85' : 'text-[#5A564E]'
                    }`}
                  >
                    {tab.subtitle}
                  </span>
                </div>
              </div>

              <span
                className={`relative z-10 inline-flex min-w-[1.65rem] shrink-0 items-center justify-center rounded-full border px-1.5 py-0.5 text-[11px] font-bold tabular-nums transition-colors sm:min-w-[2rem] sm:px-2 sm:text-xs ${
                  isActive
                    ? 'border-[#181B1F] bg-[#FFFDF9] text-[#181B1F]'
                    : 'border-[#181B1F]/15 bg-[#FFFDF9]/75 text-[#5A564E]'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
