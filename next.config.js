/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    BASE_URL:
      process.env.NODE_ENV === 'development'
        ? 'https://paracuando-gen19-team-9.academlo.tech/api/v1'
        : 'https://paracuando-gen19-team-9.academlo.tech/api/v1',
  },
  images: {
    domains: ['paracuando.s3.sa-east-1.amazonaws.com'],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
