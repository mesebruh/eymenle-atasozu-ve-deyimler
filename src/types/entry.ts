export type EntryType = 'atasozu' | 'deyim';

export interface DictionaryEntry {
  id: string;
  slug: string;
  type: EntryType;
  title: string;
  meaning: string;
  image: string;
}
