
FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Exponer el puerto (Express usa 3000 normalmente)
EXPOSE 3000

# Comando para iniciar el servidor
CMD ["npm", "start"]
