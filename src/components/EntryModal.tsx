import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Copy,
  Sparkles,
  X,
} from 'lucide-react';
import type { DictionaryEntry } from '../types/entry';
import { getTurkishFirstLetter } from '../utils/turkish';
import { resolveAssetUrl } from '../utils/url';

interface EntryModalProps {
  entry: DictionaryEntry | null;
  isLuckyMode: boolean;
  luckyScope: 'current' | 'all';
  onChangeLuckyScope: (scope: 'current' | 'all') => void;
  onSpinAgain: () => void;
  allPoolForShuffle: DictionaryEntry[];
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  hasPrev?: boolean;
  hasNext?: boolean;
}

export function EntryModal({
  entry,
  isLuckyMode,
  luckyScope,
  onChangeLuckyScope,
  onSpinAgain,
  allPoolForShuffle,
  onClose,
  onPrev,
  onNext,
  hasPrev = false,
  hasNext = false,
}: EntryModalProps) {
  const [copied, setCopied] = useState(false);
  const [shufflingTitle, setShufflingTitle] = useState<string | null>(null);

  // Brief joyful shuffle animation whenever lucky modal opens or entry changes in lucky mode
  useEffect(() => {
    if (!entry || !isLuckyMode || allPoolForShuffle.length < 2) {
      setShufflingTitle(null);
      return;
    }

    let step = 0;
    const totalSteps = 8;
    const timer = window.setInterval(() => {
      step++;
      if (step >= totalSteps) {
        window.clearInterval(timer);
        setShufflingTitle(null);
      } else {
        const randomPick =
          allPoolForShuffle[
            Math.floor(Math.random() * allPoolForShuffle.length)
          ];
        setShufflingTitle(randomPick.title);
      }
    }, 65);

    return () => window.clearInterval(timer);
  }, [entry, isLuckyMode, allPoolForShuffle]);

  useEffect(() => {
    setCopied(false);
  }, [entry?.id]);

  // Keyboard navigation
  useEffect(() => {
    if (!entry) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && hasPrev && onPrev) {
        onPrev();
      } else if (e.key === 'ArrowRight' && hasNext && onNext) {
        onNext();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [entry, hasNext, hasPrev, onClose, onNext, onPrev]);

  const handleCopy = async () => {
    if (!entry) return;
    const text = `${entry.title}\nAnlamı: ${entry.meaning}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard fallback ignored if blocked
    }
  };

  return (
    <AnimatePresence>
      {entry && (
        <motion.div
          key="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#181B1F]/55 p-4 backdrop-blur-xs sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-entry-title"
        >
          <motion.div
            key="modal-card"
            initial={{ opacity: 0, scale: 0.94, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ type: 'spring', stiffness: 390, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-[28px] border-2 border-[#181B1F] bg-[#FFFDF9] shadow-[10px_10px_0_#181B1F]"
          >
            {/* Top Header Strip */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#181B1F]/12 bg-[#FAF6EE] px-5 py-3.5 sm:px-7">
              <div className="flex flex-wrap items-center gap-2">
                <span
                  style={{
                    backgroundColor:
                      entry.type === 'atasozu' ? '#C84B31' : '#1B5E63',
                  }}
                  className="inline-flex items-center rounded-full border border-[#181B1F] px-3 py-0.5 text-xs font-bold tracking-wide text-[#FFFDF9] uppercase"
                >
                  {entry.type === 'atasozu' ? 'Atasözü' : 'Deyim'}
                </span>
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-[#181B1F]/25 bg-[#FFFDF9] text-xs font-bold text-[#181B1F]">
                  {getTurkishFirstLetter(entry.title)}
                </span>

                {isLuckyMode && (
                  <span className="inline-flex items-center gap-1 rounded-full border border-[#181B1F] bg-[#F2B84B] px-2.5 py-0.5 text-[11px] font-bold text-[#181B1F]">
                    <Sparkles className="h-3 w-3" />
                    <span>Şansına Çıkan Söz</span>
                  </span>
                )}
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Pencereyi kapat"
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl border-[1.5px] border-[#181B1F]/25 bg-[#FFFDF9] text-[#181B1F] transition-all hover:border-[#181B1F] hover:bg-[#EFE9DC]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12">
              {/* Illustration Pane */}
              <div className="flex items-center justify-center border-b border-[#181B1F]/10 bg-[#F9F4E7] p-5 md:col-span-6 md:border-r md:border-b-0 md:p-7">
                <motion.div
                  key={shufflingTitle ? 'shuffling' : entry.id}
                  initial={{ scale: 0.94, opacity: 0.6 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 360, damping: 24 }}
                  className="relative aspect-square w-full max-w-[320px] overflow-hidden rounded-2xl border border-[#181B1F]/12 bg-[#F9F4E7]"
                >
                  {shufflingTitle ? (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-6 text-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          repeat: Infinity,
                          duration: 0.6,
                          ease: 'linear',
                        }}
                        className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-[#181B1F] bg-[#F2B84B] shadow-[3px_3px_0_#181B1F]"
                      >
                        <Sparkles className="h-7 w-7 text-[#181B1F]" />
                      </motion.div>
                      <p className="font-display text-lg font-bold text-[#181B1F]">
                        Söz seçiliyor...
                      </p>
                    </div>
                  ) : (
                    <img
                      src={resolveAssetUrl(entry.image)}
                      alt={entry.title}
                      className="h-full w-full object-cover"
                    />
                  )}
                </motion.div>
              </div>

              {/* Editorial Meaning Pane */}
              <div className="flex flex-col justify-between p-6 sm:p-7 md:col-span-6">
                <div>
                  <h2
                    id="modal-entry-title"
                    className="font-display text-2xl leading-tight font-bold text-[#181B1F] sm:text-[1.85rem]"
                  >
                    {shufflingTitle ?? entry.title}
                  </h2>

                  <div className="mt-5 rounded-2xl border border-[#181B1F]/12 bg-[#FAF6EE]/70 p-4 sm:p-5">
                    <span className="block text-[11px] font-bold tracking-[0.14em] text-[#5A564E] uppercase">
                      Anlamı
                    </span>
                    <p className="mt-2 text-base leading-[1.68] text-[#181B1F]">
                      {shufflingTitle
                        ? 'Sözlük sayfaları karıştırılıyor...'
                        : entry.meaning}
                    </p>
                  </div>
                </div>

                {/* Action Footer */}
                <div className="mt-6 flex flex-col gap-3">
                  {isLuckyMode && (
                    <div className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-[#181B1F]/14 bg-[#EFE9DC]/70 p-2.5">
                      <div className="inline-flex rounded-xl border border-[#181B1F]/15 bg-[#FFFDF9] p-0.5 text-xs font-semibold">
                        <button
                          type="button"
                          onClick={() => onChangeLuckyScope('current')}
                          className={`cursor-pointer rounded-lg px-2.5 py-1 transition-colors ${
                            luckyScope === 'current'
                              ? 'bg-[#181B1F] text-[#FFFDF9]'
                              : 'text-[#5A564E] hover:text-[#181B1F]'
                          }`}
                        >
                          Bu Bölüm
                        </button>
                        <button
                          type="button"
                          onClick={() => onChangeLuckyScope('all')}
                          className={`cursor-pointer rounded-lg px-2.5 py-1 transition-colors ${
                            luckyScope === 'all'
                              ? 'bg-[#181B1F] text-[#FFFDF9]'
                              : 'text-[#5A564E] hover:text-[#181B1F]'
                          }`}
                        >
                          Tüm Sözlük
                        </button>
                      </div>

                      <motion.button
                        type="button"
                        whileHover={{ x: -1, y: -1 }}
                        whileTap={{ x: 2, y: 2 }}
                        onClick={onSpinAgain}
                        className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl border-[1.5px] border-[#181B1F] bg-[#F2B84B] px-3.5 py-1.5 text-xs font-bold text-[#181B1F] shadow-[2px_2px_0_#181B1F] transition-shadow hover:shadow-[3px_3px_0_#181B1F]"
                      >
                        <Sparkles className="h-3.5 w-3.5" />
                        <span>Bir Tane Daha Seç</span>
                      </motion.button>
                    </div>
                  )}

                  <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[#181B1F]/10 pt-4">
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="inline-flex cursor-pointer items-center gap-2 rounded-xl border-[1.5px] border-[#181B1F]/25 bg-[#FFFDF9] px-3.5 py-2 text-xs font-bold text-[#181B1F] transition-all hover:border-[#181B1F] hover:bg-[#FAF6EE]"
                    >
                      {copied ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-[#3B7A57]" />
                          <span className="text-[#3B7A57]">Kopyalandı</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" />
                          <span>Sözü Kopyala</span>
                        </>
                      )}
                    </button>

                    {!isLuckyMode && (onPrev || onNext) && (
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          disabled={!hasPrev}
                          onClick={onPrev}
                          aria-label="Önceki söz"
                          className="inline-flex cursor-pointer items-center gap-1 rounded-xl border-[1.5px] border-[#181B1F]/25 bg-[#FFFDF9] px-3 py-2 text-xs font-bold text-[#181B1F] transition-all hover:border-[#181B1F] hover:bg-[#FAF6EE] disabled:cursor-not-allowed disabled:opacity-35"
                        >
                          <ChevronLeft className="h-3.5 w-3.5" />
                          <span>Önceki</span>
                        </button>
                        <button
                          type="button"
                          disabled={!hasNext}
                          onClick={onNext}
                          aria-label="Sonraki söz"
                          className="inline-flex cursor-pointer items-center gap-1 rounded-xl border-[1.5px] border-[#181B1F]/25 bg-[#FFFDF9] px-3 py-2 text-xs font-bold text-[#181B1F] transition-all hover:border-[#181B1F] hover:bg-[#FAF6EE] disabled:cursor-not-allowed disabled:opacity-35"
                        >
                          <span>Sonraki</span>
                          <ChevronRight className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
