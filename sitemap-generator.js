const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/all-features' },
  { url: '/damaged-shipment' },
  { url: '/shipment-protection' },
  { url: '/ndr-management' },
  { url: '/hyper-local' },
  { url: '/amazon-self-ship' },
  { url: '/early-cod' },
  { url: '/pickup-locations' },
  { url: '/plans-pricing' },
  { url: '/rate-calculator' },
  { url: '/prepaid-cod' },
  { url: '/carrier-integration' },
  { url: '/api-integration' },
  { url: '/channel-integration' },
  { url: '/whatsapp-integration' },
  { url: '/refer-and-earn' },
  { url: '/media' },
  { url: '/careers' },
  { url: '/order-tracking' },
  { url: '/track-order' },
  { url: '/contact' },
  { url: '/terms-and-conditions' },
  { url: '/privacy-policy' },
  { url: '/about-us' },
  { url: '/customers' },
  { url: '/support/home' },
  { url: '/volumetric-weight-calculator' },
];

async function generateSitemap() {
  const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');

  // Create writeable stream to file
  const writeStream = fs.createWriteStream(sitemapPath);

  // Create sitemap stream
  const sitemapStream = new SitemapStream({ hostname: 'https://www.shipease.in' });

  // Pipe sitemap stream to file write stream
  sitemapStream.pipe(writeStream);

  // Write all URLs
  for (const link of links) {
    sitemapStream.write(link);
  }

  sitemapStream.end();

  // Wait for the stream to finish
  streamToPromise(sitemapStream)
    .then(() => {
      console.log('✅ Sitemap successfully created at /public/sitemap.xml');
    })
    .catch((err) => {
      console.error('❌ Error generating sitemap:', err);
    });
}

generateSitemap();
