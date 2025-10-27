# Stage 1: Install dependencies and base modules
FROM oven/bun:1-slim AS base
WORKDIR /app

# Copy package.json and bun.lockb
COPY package.json bun.lockb ./

# Install all dependencies
RUN bun install --frozen-lockfile


# Stage 2: Build the application
FROM base AS build
WORKDIR /app

# Copy the rest of the application source code
COPY . .

# Generate Prisma client (ensures it's available for the build)
RUN bunx prisma generate

# Build the Next.js application
RUN bun run build


# Stage 3: Production image
FROM oven/bun:1-slim AS production
WORKDIR /app

# Set the environment to production
ENV NODE_ENV=production

# Copy only production dependencies from the 'base' stage
COPY --from=base /app/node_modules ./node_modules
COPY package.json bun.lockb ./

# Copy the built application from the 'build' stage
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY next.config.js ./

# Copy the generated Prisma client from the 'build' stage
COPY --from=build /app/node_modules/.prisma ./node_modules/.prisma

# Expose the port the app will run on
EXPOSE 3000

# The command to start the application
CMD ["bun", "run", "start"]