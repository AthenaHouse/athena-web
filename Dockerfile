FROM node:14-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY certs/fullchain.pem /etc/letsencrypt/live/athenahouse.eu/fullchain.pem
COPY certs/privkey.pem /etc/letsencrypt/live/athenahouse.eu/privkey.pem
COPY nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]
