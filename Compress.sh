#!/bin/bash
touch build/.nojekyll
sudo npm install uglify-js -g
find build/ -name '*.html' | while read f; do echo -e '\n<script>s=document.createElement("link");s.rel="icon";s.href="https://lll69.github.io/turbo-warp-scratch-gui/favicon.ico";document.head.appendChild(s);</script>' >> $f;done
find build/ -name '*.js' | while read f; do uglifyjs $f -c --no-annotations -o $f;done
echo '<meta http-equiv="refresh" content="0;url=https://turbowarp.org/embed.html">' > build/embed.html
echo '<meta http-equiv="refresh" content="0;url=https://experiments.turbowarp.org/pointerlock/embed.html">' > build/pointerlock/embed.html
exit 0
