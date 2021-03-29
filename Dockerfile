FROM node:lts-alpine3.10 as dev

RUN apk add --no-cache tini

WORKDIR /app

EXPOSE 3000

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

RUN npm install --silent && npm install react-scripts@3.4.1 -g --silent

COPY . ./

ENTRYPOINT ["sbin/tini","--"]

CMD ["npm","start"]