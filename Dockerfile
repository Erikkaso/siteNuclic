# Stage 1 - Build
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build
RUN npm prune --omit=dev

# Stage 2 - Production static server
FROM node:20-alpine AS production

RUN npm install -g serve

WORKDIR /app

COPY --from=builder /app/dist ./dist

RUN addgroup -S appgroup && adduser -S -u 1000 appuser -G appgroup
USER appuser

EXPOSE 80

CMD ["serve", "-s", "dist", "-l", "80"]
