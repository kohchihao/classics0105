import { ChakraProvider } from '@chakra-ui/react';
import { initGA } from '@utils/tracking';
import React from 'react';

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    if (window && !window.GA_INITIALIZED && process.env.NODE_ENV !== 'development') {
      initGA();
      window.GA_INITIALIZED = true;
    }
  }, []);
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
