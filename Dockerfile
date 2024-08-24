# Step 1: Build the React app
FROM node:20-alpine AS base

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

COPY . ./

RUN yarn build

# Step 2: Serve the app with an Nginx server
FROM nginx:alpine

COPY --from=base /app/dist /usr/share/nginx/html

# Copy a default nginx configuration to handle routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
