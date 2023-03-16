FROM nginx:1.11-alpine

COPY index.html  /usr/share/nginx/html
COPY index.js  /usr/share/nginx/html
COPY personen.csv  /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
