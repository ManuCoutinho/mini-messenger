FROM node:gallium-slim

RUN apt-get update -y && apt-get install -y openssl

WORKDIR /home/node/app

COPY package*.json ./
COPY prisma ./prisma/
COPY .env ./
COPY tsconfig.json ./
COPY . .

RUN npm install
RUN npx prisma generate

EXPOSE 4000

CMD ["npm", "start"]
#CMD ["tail", "-f", "/dev/null"]