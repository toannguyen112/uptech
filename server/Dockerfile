FROM node:latest
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn run build
EXPOSE 8000
RUN chmod +x startup.sh

CMD ["yarn","start"]

ENTRYPOINT [ "./startup.sh" ]