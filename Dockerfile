# Stage 1: Build the React application
FROM node:20-alpine AS build
WORKDIR /app

# Copy only package files first for better layer caching
COPY package*.json ./
RUN npm ci --only=production=false

# Copy source code
COPY . .
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine AS production

# Copy the built React app from the 'build' stage to the Nginx serving directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy a custom Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost:80 || exit 1

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]