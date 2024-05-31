FROM node:16-alpine

WORKDIR /app

COPY . /app

EXPOSE 5000

CMD ["npm", "start"]

