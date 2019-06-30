#! /usr/bin/env node
const fs = require("fs");
const commandLineArgs = require("./commandLineArgs");
const fetch = require("node-fetch");

const args = commandLineArgs.parse();

const meta = JSON.parse(fs.readFileSync(args.meta));

const { left, bottom, right, top } = meta.bbox;
const bbox = `${left},${bottom},${right},${top}`;

let url = args.url.replace("${width}", meta.image.width);
url = url.replace("${height}", meta.image.height);
url = url.replace("${bbox}", bbox);

console.log(url);
fetch(url).then(response => {
  response.buffer().then(data => fs.writeFileSync("thumbnail_back.png", data));
});
