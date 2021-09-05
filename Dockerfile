FROM node:latest as node
WORKDIR /app
RUN npm install
COPY . .
RUN npm run build --prod
# stage 2
FROM nginx:alpine
COPY --from=node /app/dist/demo-client-app /usr/share/nginx/html
