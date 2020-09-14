FROM node:14.8-alpine

WORKDIR /app

RUN apk add yarn

COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock

RUN yarn install

COPY . /app

CMD ["yarn", "start"]
