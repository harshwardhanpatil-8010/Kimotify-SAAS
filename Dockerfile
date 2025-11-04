# PreciOps AI DevOps Agent
# Dockerfile for Next.js with Bun and Prisma

# ---- Base Stage ----
# Get the base Bun image
FROM oven/bun:1-slim AS base
WORKDIR /app

# ---- Dependencies Stage ----
# Install dependencies
FROM base AS deps
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

# ---- Builder Stage ----
# Build the application
FROM base AS builder

# Copy dependencies from the 'deps' stage
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Prisma requires the DATABASE_URL at build time to generate the client.
# Pass it using --build-arg DATABASE_URL="your_database_url"
ARG DATABASE_URL
RUN bunx prisma generate

# Build the Next.js application.
# This Dockerfile assumes you have `output: 'standalone'` in your next.config.js
# to create a minimal production-ready server.
ENV NEXT_TELEMETRY_DISABLED 1
RUN bun run build

# ---- Runner Stage ----
# Create the final, minimal production image
FROM oven/bun:1-slim AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED 1
ENV PORT 3000

# Copy the required assets from the builder stage
COPY --from=builder --chown=bun:bun /app/public ./public
COPY --from=builder --chown=bun:bun /app/.next/static ./.next/static
COPY --from=builder --chown=bun:bun /app/.next/standalone ./

# Set the user to the non-root 'bun' user for security
USER bun

EXPOSE 3000

# Start the server. The standalone output creates a server.js file.
CMD ["node", "server.js"]