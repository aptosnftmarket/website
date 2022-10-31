# Stage 1 - build
FROM node:lts-alpine as builder
RUN apk add --no-cache git
WORKDIR /app
COPY package*.json ./
COPY .npmrc ./
COPY . .
ENV NODE_OPTIONS="--max-old-space-size=4096"
RUN yarn install
RUN yarn build

# Stage 2 - production
FROM nginx:stable-alpine as final
COPY --from=builder /app/dist /usr/share/nginx/html
COPY etc/htpasswd /etc/nginx/htpasswd
COPY etc/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
