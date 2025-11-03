# PreciOps AI Auto-Generated Dockerfile
# https://preciops.com

# Stage 1: Install dependencies
FROM oven/bun:1 as deps
WORKDIR /app

# Copy dependency definition files
COPY package.json bun.lockb* tsconfig.json ./
# Copy prisma schema for generation during install/build
COPY prisma ./prisma/

# Install dependencies
RUN bun install --frozen-lockfile

# Stage 2: Build the application
FROM deps as build
WORKDIR /app
COPY . .

# The next.config.js triggers 'bunx prisma generate' during the build
RUN bun run build

# Stage 3: Production image
FROM oven/bun:1-slim as runner
WORKDIR /app

ENV NODE_ENV=production

# Copy production dependencies definition
COPY --from=build /app/package.json /app/bun.lockb* /app/tsconfig.json ./

# Install production dependencies
RUN bun install --production --frozen-lockfile

# Copy production artifacts
COPY --from=build /app/public ./public
COPY --from=build /app/.next ./.next
COPY --from=build /app/next.config.js ./

# Expose the port the app runs on
EXPOSE 3000

# Set the default command to start the app
# Assumes a 'start' script in your package.json, e.g., "start": "next start"
CMD ["bun", "run", "start"]