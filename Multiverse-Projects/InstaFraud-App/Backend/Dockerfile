FROM node:18.12.1 AS Production
ENV NODE_ENV=production
WORKDIR /src/backend
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
# EXPOSE 4000
# RUN npm run build
CMD ["sh", "-c", "npm run start"]