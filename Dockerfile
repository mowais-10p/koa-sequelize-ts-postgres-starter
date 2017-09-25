FROM node:8.5.0-alpine

RUN mkdir -p /app
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm i
COPY . /app
EXPOSE 4000
CMD ["entrypoint.sh", "node", "bin/server"]
