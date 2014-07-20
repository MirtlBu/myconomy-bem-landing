#!/bin/bash
mkdir -p target
rsync  -a ./src/img ./target
scss --style compressed < src/style.scss > target/style.css
node src/template.js < src/index.bemjson.js > target/index.html
