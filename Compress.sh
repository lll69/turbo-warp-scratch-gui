#!/bin/bash
sudo npm install uglify-js -g
find build/js -name '*.js' | while read f; do uglifyjs $f -c -m --no-annotations -o $f;done
echo '<meta http-equiv="refresh" content="0;url=https://turbowarp.org/embed.html">' > build/embed.html
exit 0
