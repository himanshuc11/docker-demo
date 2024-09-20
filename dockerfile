FROM node:latest
WORKDIR /app

# Copy package.json and package-lock.json for caching
COPY package* .
RUN npm install

# Copy all the source code
COPY . .

CMD ["node", "index.js"]