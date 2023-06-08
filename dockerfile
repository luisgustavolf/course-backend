FROM node:18-alpine as base

WORKDIR /app
COPY package*.json ./
EXPOSE 3000

FROM base as production
ENV NODE_ENV=production
RUN yarn 
RUN tsc
COPY . ./
CMD ["node", "dist/index.js"]

FROM base as development
ENV NODE_ENV=development
COPY . ./
RUN yarn
CMD ["yarn", "start"]