import Head from 'next/head';
import HeroWithBackgroundImage from '@components/HeroWithBackgroundImage';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import Features from '@components/Features';
import { Box } from '@chakra-ui/react';
import Statistics from '@components/Statistics';
import { getSiteOrigin, PRODUCTION_URL } from '@utils/siteUrl';

const siteUrl = PRODUCTION_URL;
const title = 'Furniture & Waste Disposal Singapore | Classics0105';
const description =
  'Furniture & waste disposal in Singapore for residential units and commercial projects, from offices to schools. Call or WhatsApp Classics0105 at +65 9184 1433.';
const ogImage = `${getSiteOrigin()}/og.jpg`;

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Classics0105',
  url: siteUrl,
  telephone: '+6591841433',
  email: 'helloclassics0105@gmail.com',
  image: ogImage,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Block 6, Marsiling Industrial Estate Road 1, #01-06',
    addressLocality: 'Singapore',
    postalCode: '739275',
    addressCountry: 'SG',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Singapore',
  },
  sameAs: [
    'https://www.facebook.com/classics0105/',
    'https://instagram.com/classics0105',
  ],
};

export default function Home() {
  return (
    <Box bg="white">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} key="description" />
        <link rel="canonical" href={siteUrl} key="canonical" />

        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:locale" content="en_SG" key="og:locale" />
        <meta property="og:site_name" content="Classics0105" key="og:site_name" />
        <meta property="og:url" content={siteUrl} key="og:url" />
        <meta property="og:title" content={title} key="og:title" />
        <meta property="og:description" content={description} key="og:description" />
        <meta property="og:image" content={ogImage} key="og:image" />
        <meta property="og:image:type" content="image/jpeg" key="og:image:type" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content={title} key="og:image:alt" />
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />

        <script
          type="application/ld+json"
          key="ld-business"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
      </Head>
      <Navbar />
      <HeroWithBackgroundImage />
      <Features />
      <Statistics />
      <Footer />
    </Box>
  );
}
