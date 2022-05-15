#!/bin/bash
sudo npm install uglify-js -g
find build/js -name '*.js' | while read f; do uglifyjs $f -c -m --no-annotations -o $f;done
exit 0