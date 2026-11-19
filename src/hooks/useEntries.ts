import { useEffect, useState } from 'react';
import { INITIAL_ENTRIES } from '../data/entries';
import type { DictionaryEntry } from '../types/entry';
import { parseGoogleSheetCsv } from '../utils/turkish';

export function useEntries(): DictionaryEntry[] {
  const [entries, setEntries] = useState<DictionaryEntry[]>(INITIAL_ENTRIES);

  useEffect(() => {
    const csvUrl = import.meta.env.VITE_GOOGLE_SHEET_CSV_URL?.trim();
    if (!csvUrl) return;

    let cancelled = false;

    fetch(csvUrl)
      .then((res) => {
        if (!res.ok) throw new Error('CSV fetch failed');
        return res.text();
      })
      .then((csvText) => {
        if (cancelled) return;
        const parsed = parseGoogleSheetCsv(csvText);
        if (parsed.length > 0) {
          setEntries(parsed);
        }
      })
      .catch(() => {
        // Silently keep INITIAL_ENTRIES fallback if remote Google Sheet cannot be loaded
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return entries;
}
