FROM node:14-alpine

WORKDIR /app

COPY package.json .
RUN npm install

ADD . /app

CMD [ "npm", "run", "test:docker" ]
