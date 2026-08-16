FROM nginx:alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy only the static files needed for a pure HTML site
COPY index.html /usr/share/nginx/html/index.html

# Copy other assets if needed (like images referenced in index.html)
# Since the user mentioned using images, we copy the root to catch them
COPY . /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# The default Nginx configuration already points to /usr/share/nginx/html
# and serves index.html by default.
CMD ["nginx", "-g", "daemon off;"]
