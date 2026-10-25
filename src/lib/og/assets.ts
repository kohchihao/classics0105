import embeddedAssets from './embeddedAssets';

function base64ToArrayBuffer(value: string): ArrayBuffer {
  const binary = atob(value);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes.buffer;
}

// The pages OG route runs on the edge runtime, which has no filesystem.
// Fonts and the background are inlined so the function does not read from disk.
export const backgroundSrc = `data:image/jpeg;base64,${embeddedAssets.background}`;
export const interLight = base64ToArrayBuffer(embeddedAssets.inter300);
export const interExtraBold = base64ToArrayBuffer(embeddedAssets.inter800);

export const DEFAULT_TITLE = 'Classics0105';
export const DEFAULT_SUBTITLE =
  'We provide disposal services from residential units to commercial projects.';
