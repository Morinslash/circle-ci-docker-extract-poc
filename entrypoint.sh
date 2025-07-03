#!/bin/sh

# Create config.json dynamically
cat <<EOF > /usr/share/nginx/html/config.json
{
  "env": "Container"
}
EOF

echo "Generated config.json:"
cat /usr/share/nginx/html/config.json

# Start Nginx
exec nginx -g "daemon off;"

