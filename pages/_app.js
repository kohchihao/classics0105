import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import { initGA } from '@utils/tracking';
import React from 'react';
import Head from 'next/head';
import SEO from '../next-seo.config';
import { generateDefaultSeo } from 'next-seo/pages';

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    if (
      window &&
      !window.GA_INITIALIZED &&
      process.env.NODE_ENV !== 'development'
    ) {
      initGA();
      window.GA_INITIALIZED = true;
    }
  }, []);
  return (
    <ChakraProvider>
      <ColorModeProvider
        options={{
          useSystemColorMode: false,
          initialColorMode: 'light',
        }}
      >
        <Head>{generateDefaultSeo(SEO)}</Head>
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
