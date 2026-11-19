import type { DictionaryEntry, EntryType } from '../types/entry';

export const TURKISH_ALPHABET = [
  'A',
  'B',
  'C',
  'Ç',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'İ',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'Ö',
  'P',
  'R',
  'S',
  'Ş',
  'T',
  'U',
  'Ü',
  'V',
  'Y',
  'Z',
] as const;

export type TurkishLetter = (typeof TURKISH_ALPHABET)[number];

export function getTurkishFirstLetter(text: string): string {
  const cleaned = text.trim().replace(/^["'«“(\s]+/, '');
  if (!cleaned) return '';
  return cleaned.charAt(0).toLocaleUpperCase('tr-TR');
}

export function sortEntriesTurkish(entries: DictionaryEntry[]): DictionaryEntry[] {
  return [...entries].sort((a, b) =>
    a.title.localeCompare(b.title, 'tr-TR', { sensitivity: 'base' }),
  );
}

export function groupEntriesByLetter(
  entries: DictionaryEntry[],
): Array<{ letter: string; items: DictionaryEntry[] }> {
  const sorted = sortEntriesTurkish(entries);
  const groups = new Map<string, DictionaryEntry[]>();

  for (const item of sorted) {
    const letter = getTurkishFirstLetter(item.title) || '#';
    const existing = groups.get(letter);
    if (existing) {
      existing.push(item);
    } else {
      groups.set(letter, [item]);
    }
  }

  return Array.from(groups.entries())
    .sort(([a], [b]) => {
      const idxA = TURKISH_ALPHABET.indexOf(a as TurkishLetter);
      const idxB = TURKISH_ALPHABET.indexOf(b as TurkishLetter);
      if (idxA !== -1 && idxB !== -1) return idxA - idxB;
      if (idxA !== -1) return -1;
      if (idxB !== -1) return 1;
      return a.localeCompare(b, 'tr-TR');
    })
    .map(([letter, items]) => ({ letter, items }));
}

export function slugifyTurkish(text: string): string {
  const charMap: Record<string, string> = {
    ç: 'c',
    Ç: 'c',
    ğ: 'g',
    Ğ: 'g',
    ı: 'i',
    I: 'i',
    İ: 'i',
    ö: 'o',
    Ö: 'o',
    ş: 's',
    Ş: 's',
    ü: 'u',
    Ü: 'u',
  };

  return text
    .trim()
    .split('')
    .map((ch) => charMap[ch] ?? ch)
    .join('')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function parseCsvRows(raw: string): string[][] {
  const text = raw.replace(/^\uFEFF/, '');
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = '';
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    const next = text[i + 1];

    if (inQuotes) {
      if (ch === '"' && next === '"') {
        cell += '"';
        i++;
      } else if (ch === '"') {
        inQuotes = false;
      } else {
        cell += ch;
      }
    } else if (ch === '"') {
      inQuotes = true;
    } else if (ch === ',') {
      row.push(cell.trim());
      cell = '';
    } else if (ch === '\r' && next === '\n') {
      row.push(cell.trim());
      if (row.some((v) => v.length > 0)) rows.push(row);
      row = [];
      cell = '';
      i++;
    } else if (ch === '\n' || ch === '\r') {
      row.push(cell.trim());
      if (row.some((v) => v.length > 0)) rows.push(row);
      row = [];
      cell = '';
    } else {
      cell += ch;
    }
  }

  if (cell.length > 0 || row.length > 0) {
    row.push(cell.trim());
    if (row.some((v) => v.length > 0)) rows.push(row);
  }

  return rows;
}

function normalizeHeader(header: string): string {
  return slugifyTurkish(header).replace(/-/g, '');
}

function normalizeEntryType(rawType: string): EntryType | null {
  const normalized = slugifyTurkish(rawType).replace(/-/g, '');
  if (normalized.startsWith('atasoz')) return 'atasozu';
  if (normalized.startsWith('deyim')) return 'deyim';
  return null;
}

export function parseGoogleSheetCsv(csv: string): DictionaryEntry[] {
  const rows = parseCsvRows(csv);
  if (rows.length < 2) return [];

  const headers = rows[0].map(normalizeHeader);

  const findCol = (candidates: string[]): number =>
    headers.findIndex((h) => candidates.includes(h));

  const typeIdx = findCol(['type', 'tur', 'kategori', 'category']);
  const titleIdx = findCol(['title', 'baslik', 'ad', 'adi', 'soz']);
  const meaningIdx = findCol(['meaning', 'anlam', 'anlami', 'aciklama']);
  const imageIdx = findCol(['image', 'gorsel', 'resim', 'gorselurl', 'imageurl']);

  if (typeIdx === -1 || titleIdx === -1 || meaningIdx === -1) {
    return [];
  }

  const parsed: DictionaryEntry[] = [];

  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    const type = normalizeEntryType(row[typeIdx] ?? '');
    const title = (row[titleIdx] ?? '').trim();
    const meaning = (row[meaningIdx] ?? '').trim();
    const image = (imageIdx !== -1 ? row[imageIdx] ?? '' : '').trim();

    if (!type || !title || !meaning) continue;

    const slug = slugifyTurkish(title) || `soz-${i}`;
    parsed.push({
      id: `${type}-${slug}-${i}`,
      slug,
      type,
      title,
      meaning,
      image: image || `/illustrations/${slug}.webp`,
    });
  }

  return parsed;
}
