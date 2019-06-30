#! /usr/bin/env node
const fs = require("fs");
const commandLineArgs = require("./commandLineArgs");
const fetch = require("node-fetch");

const args = commandLineArgs.parse();

const meta = JSON.parse(fs.readFileSync(args.meta));

let url = args.url.replace("${width}", meta.image.width);
url = url.replace("${height}", meta.image.height);
url = url.replace("${left}", meta.bbox.left);
url = url.replace("${top}", meta.bbox.top);
url = url.replace("${bottom}", meta.bbox.bottom);
url = url.replace("${right}", meta.bbox.right);

console.log(url);
fetch(url).then(response => {
  response.buffer().then(data => fs.writeFileSync("thumbnail_back.png", data));
});
