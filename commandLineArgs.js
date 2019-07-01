const minimist = require("minimist");
const fs = require("fs");
const pkg = require("./package");

function parse() {
  var argv = minimist(process.argv.slice(2), {
    stopEarly: true,
    alias: {
      M: "meta",
      O: "out",
      U: "url"
    },
    default: {
      meta: "thumbnail.json",
      out: "thumbnail_back.png",
      url:
        "https://openwms.statkart.no/skwms1/wms.topo4.graatone?request=GetMap&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&BBOX=1,1,1,1&SRS=EPSG:32633&WIDTH=333&HEIGHT=$222&LAYERS=topo4graatone_WMS&STYLES=&FORMAT=image/png"
    }
  });
  if (fs.existsSync(argv.meta)) return argv;

  usage();
  process.exit(1);
}

function usage() {
  console.log(pkg.name + " v" + pkg.version);
  console.log("");
  console.log("Usage: node wms-save-image <options> [jsonfile]");
  console.log("");
  console.log("Options:");
  console.log("   -M  --meta bounds and image dimensions JSON");
  console.log("   -U  --url  WMS URL template");
  console.log("   -O  --out  Target image file");
  console.log("");
}
module.exports = { parse };
