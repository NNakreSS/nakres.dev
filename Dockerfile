# stage 1
FROM node:20-alpine AS build

WORKDIR /app

COPY package.json ./
RUN npm install && npm cache clean --force

COPY . .
RUN npm run build

# stage 2
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx" , "-g" , "deamon off;"]