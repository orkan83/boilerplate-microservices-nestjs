FROM node:18

# Variabile di build con valore di default
ARG PORT=3000
ENV PORT=${PORT}

WORKDIR /usr/src/app

COPY package.json package-lock.json tsconfig.json ./
RUN npm install

COPY . .

EXPOSE ${PORT}

CMD ["npm", "run", "start:dev"]
