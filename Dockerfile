# Step 1: Build the React app
FROM node:14 AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . ./

RUN npm run build

# Step 2: Serve the app with an Nginx server
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

# Copy a default nginx configuration to handle routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
