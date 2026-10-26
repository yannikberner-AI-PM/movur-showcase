export type DroppedTextKind = 'url' | 'text';
export interface UrlPreview { url: string; domain: string; title: string; favicon: string }

export function classifyDroppedText(text: string): DroppedTextKind {
  try { const url = new URL(text.trim()); return /^https?:$/.test(url.protocol) ? 'url' : 'text'; }
  catch { return 'text'; }
}

export function urlPreview(rawUrl: string): UrlPreview {
  const url = new URL(rawUrl);
  const segment = decodeURIComponent(url.pathname.split('/').filter(Boolean).at(-1) ?? url.hostname.replace(/^www\./, ''));
  const title = segment.replace(/[-_]+/g, ' ').replace(/\b\w/g, letter => letter.toUpperCase());
  return {
    url: url.href,
    domain: url.hostname.replace(/^www\./, ''),
    title,
    favicon: '',
  };
}

export function readFileAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(reader.error ?? new Error('File could not be read'));
    reader.readAsDataURL(file);
  });
}
