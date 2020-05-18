FROM mhart/alpine-node:10.16.3

WORKDIR /app

COPY package*.json ./

RUN yarn

COPY index.js .

CMD ["npm", "start"]
