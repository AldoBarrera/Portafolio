# Prepare environment
FROM node:lts-alpine3.20 AS deps

WORKDIR /app
COPY package.json yarn.lock ./
COPY ./packages/portfoliov2/package.json ./packages/portfoliov2/
RUN yarn install --production
FROM node:lts-alpine3.20 AS builder
COPY --from=deps /app/node_modules /app/node_modules
COPY --from=deps /app/packages/portfoliov2/node_modules /app/packages/portfoliov2/node_modules

WORKDIR /app

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

ARG CONTENTFUL_SPACE_ID
ENV CONTENTFUL_SPACE_ID $CONTENTFUL_SPACE_ID

ARG CONTENTFUL_ACCESS_KEY
ENV CONTENTFUL_ACCESS_KEY $CONTENTFUL_ACCESS_KEY
# copy all files
COPY . .

WORKDIR /app/packages/portfoliov2

WORKDIR /app

ARG NEXT_PUBLIC_APP_ENV
ENV NEXT_PUBLIC_APP_ENV $NEXT_PUBLIC_APP_ENV

ARG CONTENTFUL_HOST
ENV CONTENTFUL_HOST $CONTENTFUL_HOST

ARG REVALIDATE_TIME
ENV REVALIDATE_TIME $REVALIDATE_TIME

RUN echo "CONTENTFUL_HOST is set to: $CONTENTFUL_HOST"
RUN echo "NEXT_PUBLIC_APP_ENV is set to: $NEXT_PUBLIC_APP_ENV"
RUN echo "CONTENTFUL_SPACE_ID is set to: $CONTENTFUL_SPACE_ID"
RUN echo "CONTENTFUL_ACCESS_KEY is set to: $CONTENTFUL_ACCESS_KEY"
RUN yarn build:portfoliov2
# final result
FROM node:lts-alpine3.20
WORKDIR /app
COPY --from=builder /app .
EXPOSE 3000
CMD ["yarn", "start:portfoliov2"]
