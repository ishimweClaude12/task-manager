FROM node:22-alpine

RUN apk update && apk upgrade --no-cache

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

COPY index.js ./
COPY src ./src

RUN addgroup -S app && adduser -S app -G app
USER app

EXPOSE 3000

CMD ["node", "index.js"]
