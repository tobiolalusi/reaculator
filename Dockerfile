FROM node:10.15-alpine

RUN apk update
RUN apk add yarn

ADD . /app
WORKDIR /app

RUN npm install
RUN npm audit fix
