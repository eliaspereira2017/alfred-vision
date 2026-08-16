FROM nginx:alpine
# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*
# Copy static assets over
COPY index.html /usr/share/nginx/html/index.html
# Standard images like our current assets might be needed if they are referenced
# But since everything is in index.html, we just need the file.
# If there are assets in a directory, we should copy them too.
# For now, copying everything to be safe since I saw relative image paths.
COPY . /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
