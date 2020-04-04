#!/usr/bin/env bash
docker stop samskara 2>>/dev/null && sleep 3
docker run --rm \
    -p 2368:2368 \
    --name samskara \
    -e NODE_ENV=development \
    -v "$(pwd):/var/lib/ghost/content/themes/samskara" \
    -v "$(pwd)/database/images:/var/lib/ghost/content/images" \
    -v "$(pwd)/database/ghost.db:/var/lib/ghost/content/data/ghost.db" \
    ghost:latest