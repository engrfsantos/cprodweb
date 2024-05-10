FROM node:20.13

WORKDIR /CPRODWEB/

#COPY /public/ /CPRODWEB/public
#COPY /src/ /CPRODWEB/src
#COPY package.json /CPRODWEB/

#RUN npm install

#CMD ["npm", "start"]

ENTRYPOINT ["tail", "-f", "/dev/null"]