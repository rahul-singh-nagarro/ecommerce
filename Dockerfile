# Step 1: Build the React App
FROM node:22.13.1 AS build
WORKDIR /app

# Copy package files first (helps with caching)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy all source files and build the app
COPY . .
RUN npm run build

# Step 2: Serve the app with Nginx
FROM nginx:alpine

# Remove the default Nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy a custom Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Copy the React build files to Nginx
COPY --from=build /app/build /usr/share/nginx/html
