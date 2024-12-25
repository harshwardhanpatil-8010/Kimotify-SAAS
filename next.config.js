// next.config.js
module.exports = {
  webpack(config, { isServer }) {
    if (isServer) {
      // Ensure Prisma Client is generated
      const { execSync } = require('child_process');
      execSync('bunx prisma generate', { stdio: 'inherit' });
    }
    return config;
  },
  experimental: {
    disableOptimizedRouteLoading: true, 
    appDir: true,
    serverActions: true,
  },
  async redirects() {
    return [
      {
        source: '/api/webhook/instagram',
        destination: '/', // Redirect it if you need to avoid it being processed
        permanent: false,
      },
    ];
  },
  
};
