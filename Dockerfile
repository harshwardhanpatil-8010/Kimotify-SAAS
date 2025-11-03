# PreciOps AI DevOps Agent
# Dockerfile for Next.js, Bun, and Prisma Application

# ---- Base Stage ----
# Get the official Bun image as a foundation. We use a specific slim version for security and size.
# This stage is responsible for installing all dependencies.
FROM oven/bun:1-slim AS base
WORKDIR /app

# Copy package.json and the lockfile to leverage Docker's layer caching.
# Dependencies will only be re-installed if these files change.
COPY package.json bun.lockb ./

# Install all dependencies, including devDependencies needed for the build.
RUN bun install --frozen-lockfile


# ---- Builder Stage ----
# This stage builds the production-ready application.
FROM base AS builder
WORKDIR /app

# Copy installed dependencies from the base stage.
COPY --from=base /app/node_modules ./node_modules

# Copy the rest of the application source code.
COPY . .

# Generate the Prisma client. This is required by the application code and the Next.js build process.
RUN bunx prisma generate

# Build the Next.js application. This will create an optimized production build.
# The 'standalone' output mode is enabled by default in modern Next.js for containerization.
RUN bun run build


# ---- Production Stage ----
# This is the final, small, and optimized image that will run in production.
FROM oven/bun:1-slim AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copy the standalone server output from the builder stage.
# This includes a minimal server.js and necessary node_modules.
COPY --from=builder /app/.next/standalone ./

# Copy the built static assets (CSS, JS, etc.).
COPY --from=builder /app/.next/static ./.next/static

# Copy the public assets (images, fonts, etc.).
COPY --from=builder /app/public ./public

# Prisma needs the schema file at runtime to locate the query engine binaries.
COPY --from=builder /app/prisma ./prisma

# The Next.js app will run on port 3000 by default.
EXPOSE 3000
ENV PORT 3000

# The command to start the application server.
# This runs the server.js file created by the standalone build.
CMD ["bun", "server.js"]
