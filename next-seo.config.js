const title = 'Disposal services for Singapore Commercial & Residential | Furniture & 2nd hand | Classics0105';
const description = 'We provide disposal services from residential units to commercial projects.';
const siteUrl = 'https://www.classics0105.com.sg';
const ogTitle = 'Classics0105';
const ogSubtitle = description;
const ogImageUrl = `${siteUrl}/api/og?title=${encodeURIComponent(ogTitle)}&subtitle=${encodeURIComponent(ogSubtitle)}`;

const SEO = {
  title,
  description,
  canonical: siteUrl,
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: siteUrl,
    title,
    description,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    handle: '',
    site: '',
    cardType: 'summary_large_image',
  },
};

export default SEO;
