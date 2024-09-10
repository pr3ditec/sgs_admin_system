FROM node:latest

WORKDIR /app

COPY . .
COPY ./package.json .

# RUN npm update
# RUN npm upgrade
RUN npm install

EXPOSE 5173

CMD ["npm", "run", "prod-preview"]
