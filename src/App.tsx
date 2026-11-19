import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AlphabetBar } from './components/AlphabetBar';
import { BrandMark } from './components/BrandMark';
import { CategoryTabs } from './components/CategoryTabs';
import { EntryCard } from './components/EntryCard';
import { EntryModal } from './components/EntryModal';
import { LuckyButton } from './components/LuckyButton';
import { QrSharePage } from './components/QrSharePage';
import { useEntries } from './hooks/useEntries';
import type { DictionaryEntry, EntryType } from './types/entry';
import {
  getTurkishFirstLetter,
  groupEntriesByLetter,
  sortEntriesTurkish,
} from './utils/turkish';

export default function App() {
  const [pathname, setPathname] = useState<string>(() =>
    typeof window !== 'undefined' ? window.location.pathname : '/',
  );

  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname);
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  if (pathname === '/qr' || pathname === '/qr/') {
    return <QrSharePage />;
  }

  return <DictionaryHome />;
}

function DictionaryHome() {
  const entries = useEntries();
  const [activeTab, setActiveTab] = useState<EntryType>('atasozu');
  const [selectedLetter, setSelectedLetter] = useState<string>('ALL');

  const [modalEntry, setModalEntry] = useState<DictionaryEntry | null>(null);
  const [isLuckyMode, setIsLuckyMode] = useState<boolean>(false);
  const [luckyScope, setLuckyScope] = useState<'current' | 'all'>('current');

  const atasozuList = useMemo(
    () => sortEntriesTurkish(entries.filter((e) => e.type === 'atasozu')),
    [entries],
  );

  const deyimList = useMemo(
    () => sortEntriesTurkish(entries.filter((e) => e.type === 'deyim')),
    [entries],
  );

  const activeList = activeTab === 'atasozu' ? atasozuList : deyimList;

  const letterCounts = useMemo(() => {
    const map = new Map<string, number>();
    for (const item of activeList) {
      const first = getTurkishFirstLetter(item.title);
      map.set(first, (map.get(first) ?? 0) + 1);
    }
    return map;
  }, [activeList]);

  const filteredList = useMemo(() => {
    if (selectedLetter === 'ALL') return activeList;
    return activeList.filter(
      (item) => getTurkishFirstLetter(item.title) === selectedLetter,
    );
  }, [activeList, selectedLetter]);

  const groupedSections = useMemo(
    () => groupEntriesByLetter(filteredList),
    [filteredList],
  );

  // Global sequential number map within the active section (A=01..20)
  const orderMap = useMemo(() => {
    const map = new Map<string, number>();
    activeList.forEach((item, idx) => {
      map.set(item.id, idx + 1);
    });
    return map;
  }, [activeList]);

  const handleTabChange = (nextTab: EntryType) => {
    setActiveTab(nextTab);
    setSelectedLetter('ALL');
  };

  const pickRandomEntry = (scope: 'current' | 'all', excludeId?: string) => {
    const pool = scope === 'current' ? activeList : entries;
    if (pool.length === 0) return;

    const candidates =
      pool.length > 1 && excludeId
        ? pool.filter((item) => item.id !== excludeId)
        : pool;
    const chosen = candidates[Math.floor(Math.random() * candidates.length)];
    setIsLuckyMode(true);
    setModalEntry(chosen);
  };

  const handleOpenLucky = () => {
    pickRandomEntry(luckyScope);
  };

  const handleOpenCard = (entry: DictionaryEntry) => {
    setIsLuckyMode(false);
    setModalEntry(entry);
  };

  const modalIndex = useMemo(() => {
    if (!modalEntry || isLuckyMode) return -1;
    return filteredList.findIndex((item) => item.id === modalEntry.id);
  }, [filteredList, isLuckyMode, modalEntry]);

  const accentColor = activeTab === 'atasozu' ? '#C84B31' : '#1B5E63';

  return (
    <div className="relative flex min-h-screen flex-col bg-[#F7F3EA] text-[#181B1F]">
      {/* Tactile Paper Grain */}
      <div className="paper-grain" aria-hidden="true" />

      {/* Editorial Header */}
      <header className="relative z-10 mx-auto w-full max-w-6xl px-4 pt-6 pb-6 sm:px-6 sm:pt-9 sm:pb-8">
        <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <BrandMark />
          <LuckyButton onClick={handleOpenLucky} />
        </div>

        {/* Subtle Editorial Rule & Intro */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-[#181B1F]/12 pt-6 text-center sm:flex-row sm:text-left">
          <p className="max-w-xl text-sm leading-relaxed text-[#5A564E] sm:text-[0.95rem]">
            Türkçemizin en sevilen atasözleri ve deyimleri;{' '}
            <span className="font-semibold text-[#181B1F]">
              minimalist çizimler
            </span>{' '}
            ve yalın anlamlarıyla A&apos;dan Z&apos;ye tek sözlükte.
          </p>

          <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#5A564E] uppercase">
            <span className="inline-block h-2 w-2 rounded-full bg-[#C84B31]" />
            <span>{atasozuList.length} Atasözü</span>
            <span className="text-[#181B1F]/25">·</span>
            <span className="inline-block h-2 w-2 rounded-full bg-[#1B5E63]" />
            <span>{deyimList.length} Deyim</span>
          </div>
        </div>

        {/* Section Tabs */}
        <div className="mt-7">
          <CategoryTabs
            activeTab={activeTab}
            onChange={handleTabChange}
            counts={{
              atasozu: atasozuList.length,
              deyim: deyimList.length,
            }}
          />
        </div>
      </header>

      {/* Sticky Turkish Alphabet Filter Bar */}
      <AlphabetBar
        activeTab={activeTab}
        selectedLetter={selectedLetter}
        onSelectLetter={setSelectedLetter}
        letterCounts={letterCounts}
        totalCount={activeList.length}
      />

      {/* Dictionary Content */}
      <main className="relative z-10 mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 sm:py-11">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeTab}-${selectedLetter}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            {selectedLetter !== 'ALL' && (
              <div className="mb-8 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[#181B1F]/15 bg-[#FFFDF9] px-5 py-3.5 shadow-[3px_3px_0_rgba(24,27,31,0.08)]">
                <div className="flex items-center gap-3">
                  <span
                    style={{ backgroundColor: accentColor }}
                    className="font-display flex h-10 w-10 items-center justify-center rounded-xl border-[1.5px] border-[#181B1F] text-xl font-bold text-[#FFFDF9]"
                  >
                    {selectedLetter}
                  </span>
                  <div>
                    <h2 className="font-display text-lg font-bold text-[#181B1F] sm:text-xl">
                      {selectedLetter} Harfi ile Başlayan{' '}
                      {activeTab === 'atasozu' ? 'Atasözleri' : 'Deyimler'}
                    </h2>
                    <p className="text-xs font-medium text-[#5A564E]">
                      Bu harfte {filteredList.length} kayıt listeleniyor
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedLetter('ALL')}
                  className="cursor-pointer rounded-xl border-[1.5px] border-[#181B1F]/25 bg-[#FAF6EE] px-3.5 py-1.5 text-xs font-bold text-[#181B1F] transition-all hover:border-[#181B1F] hover:bg-[#EFE9DC]"
                >
                  Tüm Harfleri Göster
                </button>
              </div>
            )}

            <div className="space-y-12">
              {groupedSections.map((group) => (
                <section
                  key={group.letter}
                  aria-labelledby={`letter-heading-${group.letter}`}
                >
                  {selectedLetter === 'ALL' && (
                    <div className="mb-6 flex items-center gap-4">
                      <h2
                        id={`letter-heading-${group.letter}`}
                        style={{ color: accentColor }}
                        className="font-display text-3xl leading-none font-extrabold tracking-tight sm:text-4xl"
                      >
                        {group.letter}
                      </h2>
                      <div className="h-[1.5px] flex-1 bg-[#181B1F]/14" />
                      <span className="rounded-full border border-[#181B1F]/15 bg-[#FFFDF9] px-3 py-1 text-xs font-bold tabular-nums text-[#5A564E]">
                        {group.items.length}{' '}
                        {activeTab === 'atasozu' ? 'atasözü' : 'deyim'}
                      </span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {group.items.map((item, idx) => (
                      <EntryCard
                        key={item.id}
                        entry={item}
                        index={idx}
                        orderNumber={orderMap.get(item.id) ?? idx + 1}
                        onSelect={handleOpenCard}
                      />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Minimalist Editorial Footer */}
      <footer className="relative z-10 border-t border-[#181B1F]/12 bg-[#EFE9DC]/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-center text-xs font-medium text-[#5A564E] sm:flex-row sm:px-6 sm:text-left">
          <span className="font-display font-bold text-[#181B1F]">
            Eymenle Atasözü ve Deyimler
          </span>
          <span>Türkçemizin söz varlığı, minimalist çizgilerle.</span>
        </div>
      </footer>

      {/* Detail & Lucky Reveal Modal */}
      <EntryModal
        entry={modalEntry}
        isLuckyMode={isLuckyMode}
        luckyScope={luckyScope}
        onChangeLuckyScope={setLuckyScope}
        onSpinAgain={() => pickRandomEntry(luckyScope, modalEntry?.id)}
        allPoolForShuffle={luckyScope === 'current' ? activeList : entries}
        onClose={() => setModalEntry(null)}
        hasPrev={modalIndex > 0}
        hasNext={modalIndex !== -1 && modalIndex < filteredList.length - 1}
        onPrev={() => {
          if (modalIndex > 0) setModalEntry(filteredList[modalIndex - 1]);
        }}
        onNext={() => {
          if (modalIndex !== -1 && modalIndex < filteredList.length - 1) {
            setModalEntry(filteredList[modalIndex + 1]);
          }
        }}
      />
    </div>
  );
}
