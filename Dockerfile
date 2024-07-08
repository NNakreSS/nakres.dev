# Step 1: Build the React app
FROM node:20 AS build

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

COPY . ./

ARG VITE_MEDIUM_URL=DEFAULT_WRONG
ENV VITE_MEDIUM_URL=${VITE_MEDIUM_URL}

RUN echo "value for VITE_MEDIUM_URL: [${VITE_MEDIUM_URL}]"

ARG VITE_CONTACT_WEBHOOK=DEFAULT_WRONG
ENV VITE_CONTACT_WEBHOOK=${VITE_CONTACT_WEBHOOK}

RUN echo "value for VITE_CONTACT_WEBHOOK: [${VITE_CONTACT_WEBHOOK}]"


RUN yarn build

# Step 2: Serve the app with an Nginx server
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

# Copy a default nginx configuration to handle routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
