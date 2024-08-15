# Prepare environment
FROM node:22.6.0 AS deps

WORKDIR /app
COPY package.json ./
RUN yarn install

COPY ./node_modules ./node_modules

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

ARG CONTENTFUL_SPACE_ID
ENV CONTENTFUL_SPACE_ID $CONTENTFUL_SPACE_ID

ARG CONTENTFUL_ACCESS_KEY
ENV CONTENTFUL_ACCESS_KEY $CONTENTFUL_ACCESS_KEY
# copy all files
COPY . .

ARG NEXT_PUBLIC_APP_ENV
ENV NEXT_PUBLIC_APP_ENV $NEXT_PUBLIC_APP_ENV

ARG CONTENTFUL_HOST
ENV CONTENTFUL_HOST $CONTENTFUL_HOST

ARG REVALIDATE_TIME
ENV REVALIDATE_TIME $REVALIDATE_TIME

ARG ACTIVECAMPAIGN_LIST
ENV ACTIVECAMPAIGN_LIST $ACTIVECAMPAIGN_LIST

ARG GOOGLE_PROPERTY_ID
ENV GOOGLE_PROPERTY_ID $GOOGLE_PROPERTY_ID

ARG GOOGLE_APPLICATION_CREDENTIALS
ENV GOOGLE_APPLICATION_CREDENTIALS $GOOGLE_APPLICATION_CREDENTIALS

RUN echo "CONTENTFUL_HOST is set to: $CONTENTFUL_HOST"
RUN echo "NEXT_PUBLIC_APP_ENV is set to: $NEXT_PUBLIC_APP_ENV"
RUN echo "CONTENTFUL_SPACE_ID is set to: $CONTENTFUL_SPACE_ID"
RUN echo "CONTENTFUL_ACCESS_KEY is set to: $CONTENTFUL_ACCESS_KEY"
RUN echo "REVALIDATE_TIME is set to: $REVALIDATE_TIME"
RUN echo "ACTIVECAMPAIGN_LIST is set to: $ACTIVECAMPAIGN_LIST"
RUN echo "GOOGLE_PROPERTY_ID is set to: $GOOGLE_PROPERTY_ID"

RUN next build

FROM node:lts-alpine3.20
WORKDIR /app


COPY --from=deps /app/package.json /app/packages/jalasoft/package.json
COPY --from=deps /app/next.config.js /app/packages/jalasoft/next.config.js
COPY --from=deps /app/redirects.js /app/packages/jalasoft/redirects.js
COPY --from=deps /app/public /app/packages/jalasoft/public
COPY --from=deps /app/build /app/packages/jalasoft/build

RUN yarn install --production --frozen-lockfile  --ignore-workspace-root-check

EXPOSE 3000
CMD ["yarn", "start"]