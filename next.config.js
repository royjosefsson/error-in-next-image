const withPlugins = require('next-compose-plugins');
const withFonts = require('next-fonts');
const withImages = require('next-images');

module.exports = withPlugins([withFonts, withImages], {
  reactStrictMode: true,
  compress: true,
  productionBrowserSourceMaps: true,
  images: {
    domains: ["media.meds.se"],
  }
});
