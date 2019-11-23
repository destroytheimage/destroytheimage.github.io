# Build
FROM node:12-alpine as build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY next.config.js ./
COPY . .
RUN npm run build 


# Run
FROM node:12-alpine
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --production 

COPY --from=build /app/.next ./.next
COPY --from=build /app/build ./build
COPY ./static ./static

EXPOSE 80
ENV PORT 80
ENV NODE_ENV production

CMD ["sh", "-c", "npm start -- -p $PORT"]
