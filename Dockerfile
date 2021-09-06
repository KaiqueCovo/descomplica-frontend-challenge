FROM node:14-alpine as development

# Diretório de trabalho(é onde a aplicação ficará dentro do container).
WORKDIR /app
# Adicionando `/app/node_modules/.bin` para o $PATH
ENV PATH /app/node_modules/.bin:$PATH
# Instalando dependências da aplicação e armazenando em cache.
COPY package.json /app/package.json
RUN npm install --silent
RUN npm install react-scripts@4.0.3 -g --silent
# Inicializa a aplicação
CMD ["npm", "start"]

FROM node:14-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY package.json /app/package.json

RUN npm install

COPY . /app

RUN npm run build

RUN npm install -g serve

CMD serve -s build
