const minimist = require("minimist");

function parse() {
  var argv = minimist(process.argv.slice(2), {
    stopEarly: true,
    alias: {
      M: "meta",
      U: "url"
    },
    default: {
      meta: "thumbnail.json",
      url:
        "https://openwms.statkart.no/skwms1/wms.topo4.graatone?request=GetMap&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&BBOX=${left},${bottom},${right},${top}&SRS=EPSG:32633&WIDTH=${width}&HEIGHT=${height}&LAYERS=topo4graatone_WMS&STYLES=&FORMAT=image/png&DPI=96&MAP_RESOLUTION=96&FORMAT_OPTIONS=dpi:96&TRANSPARENT=TRUE"
    }
  });
  if (argv._.length !== 1) {
    usage();
    process.exit(1);
  }
  console.log(argv);
  return argv;
}

function usage() {
  console.log("Usage: node wms-save-image <options> [mapfile]");
  console.log("");
  console.log("mapfile    GeoJSON map source file for the preview");
  console.log("");
  console.log("Options:");
  console.log("   -M  --meta Input metadata file");
  console.log("   -U  --url  WMS URL template");
  console.log("");
}
module.exports = { parse };
