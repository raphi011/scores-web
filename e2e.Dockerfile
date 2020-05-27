FROM cypress/base:latest

WORKDIR /scores/web

COPY cypress cypress
COPY ./cypress.json .

RUN npm i -g cypress

ENTRYPOINT $(npm bin -g)/cypress run
