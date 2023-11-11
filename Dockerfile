# Prepare environment
FROM node:16.3.0 AS deps

WORKDIR /app
COPY package.json yarn.lock ./
COPY ./packages/portfolio/package.json ./packages/portfolio/
RUN yarn install --production
FROM node:16.3.0 AS builder
COPY --from=deps /app/node_modules /app/node_modules
COPY --from=deps /app/packages/portfolio/node_modules /app/packages/portfolio/node_modules

WORKDIR /app

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

ARG CONTENTFUL_SPACE_ID
ENV CONTENTFUL_SPACE_ID $CONTENTFUL_SPACE_ID

ARG CONTENTFUL_ACCESS_KEY
ENV CONTENTFUL_ACCESS_KEY $CONTENTFUL_ACCESS_KEY
# copy all files
COPY . .

WORKDIR /app/packages/portfolio
RUN yarn add typescript@4.4.4
WORKDIR /app

RUN yarn build:portfolio
# final result
FROM node:16.3.0-alpine
WORKDIR /app
COPY --from=builder /app .
EXPOSE 3000
CMD ["yarn", "start:portfolio"]
