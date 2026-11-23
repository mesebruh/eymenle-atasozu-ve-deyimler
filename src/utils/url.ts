export function resolveAssetUrl(path: string): string {
  if (/^(https?:|data:)/i.test(path)) {
    return path;
  }
  const base = import.meta.env.BASE_URL || '/';
  return `${base}${path.replace(/^\/+/, '')}`;
}

export function getHomeUrl(): string {
  if (typeof window === 'undefined') {
    return 'https://mesebruh.github.io/eymenle-atasozu-ve-deyimler/';
  }
  const base = import.meta.env.BASE_URL || '/';
  return new URL(base, window.location.origin).href;
}
