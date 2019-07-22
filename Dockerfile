FROM node:dubnium-alpine

WORKDIR /var/www/my-stuff

COPY ./package.json ./
COPY ./yarn.lock ./
COPY ./client/app/package.json ./client/app/
COPY ./client/common/package.json ./client/common/
COPY ./client/modules/package.json ./client/modules/
COPY ./client/utils/package.json ./client/utils/

COPY ./core/config/package.json ./core/config/
COPY ./core/constants/package.json ./core/constants/
COPY ./core/middlewares/package.json ./core/middlewares/
COPY ./core/migrations/package.json ./core/migrations/
COPY ./core/models/package.json ./core/models/
COPY ./core/redis/package.json ./core/redis/
COPY ./core/repositories/package.json ./core/repositories/
COPY ./core/server/package.json ./core/server/
COPY ./core/services/package.json ./core/services/
COPY ./core/utils/package.json ./core/utils/

RUN yarn

COPY ./ ./

CMD [ "yarn", "start:app" ]
