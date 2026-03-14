/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['upload.wikimedia.org', 'www.pinclipart.com', 'images.g2crowd.com', 'gocode.colorado.gov', 'ibcoms.com', 'w7.pngwing.com'],
  },
  async rewrites() {
    return [
      {
        source: '/rss.xml',
        destination: '/api/rss',
      },
    ];
  },
};

module.exports = nextConfig;
