# Features

Download a single image from a WMS map server.

Companion to [map-image-preview](https://github.com/Artsdatabanken/map-image-preview). Based on a sample WMS url, will fill in bounds and image dimensions from a JSON file and download the image.

## Usage

```text
wms-save-image v1.1.0

Usage: node wms-save-image <options> [jsonfile]

Options:
   -M  --meta bounds and image dimensions JSON
   -U  --url  WMS URL template
   -O  --out  Target image file
```

## Example

```bash
node wms-save-image.js \
   -U "https://openwms.statkart.no/skwms1/wms.topo4.graatone?request=GetMap&SERVICE=WMS&VERSION=1.1.1&BBOX=0,0,1,1&SRS=EPSG:32633&WIDTH=400&HEIGHT=300&LAYERS=topo4graatone_WMS&STYLES=&FORMAT=image/png" \
   -M example/thumbnail.json \
   -O output.png
```

![Sample](doc/thumbnail_back.png)

### Meta

#### JSON file format

```json
{
  "bbox": {
    "left": 524161.0500020641,
    "bottom": 7590643.169290178,
    "right": 805691.242609148,
    "top": 7853460.758413694
  },
  "image": { "width": 408, "height": 380 }
}
```

## Batch mode operation

Recursive download

```bash
find . -type d -exec sh -c "cd \"{}\" && pwd && \
[ -f thumbnail.json ] && wms-save-image" \
-U "https://openwms.statkart.no/skwms1/wms.topo4.graatone?request=GetMap&SERVICE=WMS&VERSION=1.1.1&BBOX=0,0,1,1&SRS=EPSG:32633&WIDTH=400&HEIGHT=300&LAYERS=topo4graatone_WMS&STYLES=&FORMAT=image/png" \
  -M thumbnail.json \;
```

Composite with other image

```bash
find . -type d -exec sh -c "cd \"{}\" && pwd && \
[ -f polygon.32633.geojson ] && \
convert thumbnail_back.png polygon.32633.png \
-compose Multiply -composite thumbnail.png" \;
```
