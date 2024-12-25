// next.config.js
module.exports = {
    webpack(config, { isServer }) {
      // Ensure Prisma Client is generated during server-side build
      if (isServer) {
        require.resolve('@prisma/client');
      }
      return config;
    },
  };
  
  