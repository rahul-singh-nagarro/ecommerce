# Step 1: Build the React app
FROM node:18 AS build

WORKDIR /app
COPY package.json .

RUN npm install
COPY . .
RUN npm run build

# Step 2: Serve the app with Nginx
FROM nginx:alpine
# Expose the port Nginx will run on
EXPOSE 80
# Copy the build files from the previous step into the Nginx container
COPY --from=build /app/build /usr/share/nginx/html

