// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/Users/annagassen/Desktop/astroanna.github.io/src/pages/index.js"),
  "component---src-pages-404-js": require("gatsby-module-loader?name=component---src-pages-404-js!/Users/annagassen/Desktop/astroanna.github.io/src/pages/404.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/Users/annagassen/Desktop/astroanna.github.io/.cache/json/layout-index.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/Users/annagassen/Desktop/astroanna.github.io/.cache/json/index.json"),
  "layout-index.json": require("gatsby-module-loader?name=path---!/Users/annagassen/Desktop/astroanna.github.io/.cache/json/layout-index.json"),
  "404.json": require("gatsby-module-loader?name=path---404!/Users/annagassen/Desktop/astroanna.github.io/.cache/json/404.json"),
  "layout-index.json": require("gatsby-module-loader?name=path---!/Users/annagassen/Desktop/astroanna.github.io/.cache/json/layout-index.json"),
  "404-html.json": require("gatsby-module-loader?name=path---404-html!/Users/annagassen/Desktop/astroanna.github.io/.cache/json/404-html.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/Users/annagassen/Desktop/astroanna.github.io/.cache/layouts/index.js")
}