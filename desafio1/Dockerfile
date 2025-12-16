FROM node:24.1.0-alpine

WORKDIR /app

COPY package*.json ./
RUN npm i

COPY . .

EXPOSE 8080

CMD ["npm", "run", "start"]
