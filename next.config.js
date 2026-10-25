/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Next.js 16 only allows quality 75 unless it is listed here.
    // The hero and organization images request quality 50.
    qualities: [50, 75],
  },
};

module.exports = nextConfig;
