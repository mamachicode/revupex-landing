/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.revupex.com' }],
        destination: 'https://revupex.com/:path*',
        permanent: true
      }
    ];
  }
};
export default nextConfig;
