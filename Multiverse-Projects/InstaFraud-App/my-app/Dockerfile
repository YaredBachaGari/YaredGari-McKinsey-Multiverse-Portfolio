# FROM node:18.12.1
# WORKDIR /app
# COPY . /app
# # RUN apk add g++ make py3-pip
# RUN npm install && npm run build
# EXPOSE 3000
# CMD ["npm", "start"]
FROM node:18.12.1
ENV NODE_ENV=production
WORKDIR /src/client
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
# EXPOSE 4000
RUN npm run build
EXPOSE 3001
CMD ["sh", "-c", "npm run start"]
