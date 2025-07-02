# --- Builder Stage ---
FROM node:current-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy source files and build
COPY . .
RUN npm run build

# --- Production Stage ---
FROM nginx:alpine

# Copy built static assets from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy entrypoint script
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
# (Optional) Custom nginx config, if needed
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["/entrypoint.sh"]

