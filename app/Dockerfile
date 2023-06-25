FROM node:18-slim

RUN apt-get update -y && apt-get install -y openssl

WORKDIR /home/node/app

COPY package*.json ./

# Copy environments from your .env file and tsconfig
COPY .env ./
COPY tsconfig.json ./
COPY . .

RUN npm install


EXPOSE 5173

CMD ["npm", "run", "dev"]
