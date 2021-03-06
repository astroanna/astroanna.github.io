// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/annagassen/Desktop/astroanna.github.io/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/annagassen/Desktop/astroanna.github.io/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/annagassen/Desktop/astroanna.github.io/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/Users/annagassen/Desktop/astroanna.github.io/.cache/json/layout-index.json"),
  "404.json": require("/Users/annagassen/Desktop/astroanna.github.io/.cache/json/404.json"),
  "layout-index.json": require("/Users/annagassen/Desktop/astroanna.github.io/.cache/json/layout-index.json"),
  "index.json": require("/Users/annagassen/Desktop/astroanna.github.io/.cache/json/index.json"),
  "layout-index.json": require("/Users/annagassen/Desktop/astroanna.github.io/.cache/json/layout-index.json"),
  "404-html.json": require("/Users/annagassen/Desktop/astroanna.github.io/.cache/json/404-html.json")
}