import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import { initGA } from '@utils/tracking';
import React from 'react';
import SEO from '../next-seo.config';
import { DefaultSeo } from 'next-seo';

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
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
