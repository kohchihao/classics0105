import { defineConfig, globalIgnores } from 'eslint/config';
import nextConfig from 'eslint-config-next';

// Equivalent of the previous `.eslintrc` `{ "extends": "next" }`.
// `eslint-config-next` is flat-config-only as of v16, and `next lint` was removed.
export default defineConfig([
  ...nextConfig,
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
]);
