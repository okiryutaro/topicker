FROM nginx

COPY nginx.conf /etc/nginx/nginx.conf
COPY index.html /usr/share/nginx/html/
COPY history.html /usr/share/nginx/html/
COPY explain.html /usr/share/nginx/html/
COPY index.css /usr/share/nginx/html/
COPY history.css /usr/share/nginx/html/
COPY explain.css /usr/share/nginx/html/
COPY index.js /usr/share/nginx/html/
COPY history.js /usr/share/nginx/html/

# ポート番号変更箇所
EXPOSE 81
