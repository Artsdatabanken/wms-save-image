#! /usr/bin/env node
const fs = require("fs");
const commandLineArgs = require("./commandLineArgs");
const fetch = require("node-fetch");

const args = commandLineArgs.parse();

const meta = JSON.parse(fs.readFileSync(args.meta));

const { left, bottom, right, top } = meta.bbox;
const bbox = `${left},${bottom},${right},${top}`;

url = args.url.replace(/BBOX=[\d\.\,]*/gi, "BBOX=" + bbox);
url = url.replace(/WIDTH=[\d]*/gi, "WIDTH=" + meta.image.width);
url = url.replace(/HEIGHT=[\d]*/gi, "HEIGHT=" + meta.image.height);

console.log(url);
try {
  fetch(url).then(response => {
    response
      .buffer()
      .then(data => fs.writeFileSync("thumbnail_back.png", data));
  });
} catch (e) {
  console.warn(e);
}
