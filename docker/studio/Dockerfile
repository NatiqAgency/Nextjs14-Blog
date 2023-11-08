# Base image with dependencies
FROM node:18 AS base
RUN yarn add prisma
ENTRYPOINT node_modules/.bin/prisma studio