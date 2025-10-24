# PreciOps AI Generated Dockerfile
# Stage 1: Install dependencies
FROM oven/bun:1-slim AS deps
WORKDIR /app

# Copy only necessary files for dependency installation to leverage Docker cache
COPY package.json bun.lockb tsconfig.json ./ 
COPY prisma ./prisma/

# Install dependencies
RUN bun install --frozen-lockfile

# Stage 2: Build the application
FROM deps AS builder
WORKDIR /app

# Copy installed dependencies
COPY --from=deps /app/node_modules ./node_modules

# Copy the rest of the source code
COPY . .

# Generate Prisma Client (explicitly, as a best practice)
# This is crucial for the Next.js build to find the client.
RUN bunx prisma generate

# Build the Next.js application for production
RUN bun run build

# Stage 3: Production image
FROM oven/bun:1-slim AS runner
WORKDIR /app

# Set the environment to production
ENV NODE_ENV=production
# The default Next.js port
ENV PORT=3000

# Create a non-root user for security
RUN groupadd --system --gid 1001 nodejs
RUN useradd --system --uid 1001 --gid 1001 nextjs
USER nextjs

# Copy necessary files from the builder stage
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/package.json ./
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# Expose the port the app runs on
EXPOSE 3000

# The command to start the application
# Assumes a "start" script in package.json, e.g., "start": "next start"
CMD ["bun", "run", "start"]