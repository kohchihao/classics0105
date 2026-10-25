import { ChakraProvider } from '@chakra-ui/react';
import { Analytics } from '@vercel/analytics/next';
import React from 'react';
import Head from 'next/head';
import SEO from '../next-seo.config';
import { generateDefaultSeo } from 'next-seo/pages';
import { system } from '../src/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider value={system}>
      <Head>{generateDefaultSeo(SEO)}</Head>
      <Component {...pageProps} />
      <Analytics />
    </ChakraProvider>
  );
}

export default MyApp;
