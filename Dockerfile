# Step 1: Build the React app
FROM node:18 AS build

WORKDIR /app
COPY . ./

RUN npm install
RUN npm run build

# Step 2: Serve the app with Nginx
FROM nginx:alpine

# Copy the build files from the previous step into the Nginx container
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port Nginx will run on
EXPOSE 80

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]
