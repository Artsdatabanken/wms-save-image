# Features

Download a single image from a WMS map server

# Usage

```
Usage: node wms-save-image <options> [meta.json]

meta.json   JSON file containing bounds information

Options:
   -U  --url  WMS URL template
```

## Example

```bash
node wms-save-image.js example/thumbnail.json
```

![Sample](doc/thumbnail_back.png)

## Arguments

### URL template

```bash
node wms-save-image.js \
   -U "https://openwms.statkart.no/skwms1/wms.topo4.graatone?request=GetMap&SERVICE=WMS&VERSION=1.1.1&BBOX=${bbox}&SRS=EPSG:32633&WIDTH=${width}&HEIGHT=${height}&LAYERS=topo4graatone_WMS&STYLES=&FORMAT=image/png" \
   -M example/thumbnail.json
```

#### Variables

- left: Coordinate of left side of bounds
- top: Coordinate of top side of bounds
- right: Coordinate of right side of bounds
- bottom: Coordinate of bottom side of bounds
- width: Output image pixel width in pixels
- height: Output image pixel height in pixels

### Meta

#### JSON format

```json
{
  "bbox": {
    "left": 524161.0500020641,
    "bottom": 7590643.169290178,
    "right": 805691.242609148,
    "top": 7853460.758413694
  },
  "image": { "width": 408, "height": 380 },
  "color": "hsl(0, 0%, 70%)",
  "strokeWidth": 0.5,
  "crs": "urn:ogc:def:crs:EPSG::32633"
}
```
