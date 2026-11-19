import { ChakraProvider } from '@chakra-ui/react';
import { Analytics } from '@vercel/analytics/next';
import React from 'react';
import Head from 'next/head';
import { system } from '../src/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider value={system}>
      {/* Only tags that apply to every page. Each page sets its own SEO tags. */}
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
          key="viewport"
        />
        <link rel="icon" href="/favicon.ico" key="favicon" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </ChakraProvider>
  );
}

export default MyApp;
