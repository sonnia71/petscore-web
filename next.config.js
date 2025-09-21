// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['your-image-domain.com'], // si usas imágenes externas
  },
  trailingSlash: true, // útil si quieres URLs con / al final
};

module.exports = nextConfig;
