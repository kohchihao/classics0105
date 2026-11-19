export const PRODUCTION_URL = 'https://www.classics0105.com.sg';

// Origin of the current deployment, for assets that only exist on this build
// (e.g. og:image on a preview). Canonical/og:url should use PRODUCTION_URL.
// NEXT_PUBLIC_VERCEL_* are Vercel system env vars, inlined at build time.
export function getSiteOrigin(): string {
  if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'production') {
    return PRODUCTION_URL;
  }
  if (process.env.NEXT_PUBLIC_VERCEL_URL) {
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
  }
  return 'http://localhost:3000';
}
