#!/bin/bash
sudo npm install uglify-js -g
find build/ -name '*.html' | while read f; do echo -e '\ns=document.createElement("link");s.rel="icon";s.href="https://lll69.github.io/turbo-warp-scratch-gui/favicon.ico";document.head.appendChild(s);' >> $f;done
find build/js -name '*.js' | while read f; do uglifyjs $f -c --no-annotations -o $f;done
echo '<meta http-equiv="refresh" content="0;url=https://turbowarp.org/embed.html">' > build/embed.html
exit 0
