(map => {
  const mapUrl = document.currentScript.src;
  const resolve = imports => Object.fromEntries(Object.entries(imports ).map(([k, v]) => [k, new URL(v, mapUrl).href]));
  document.head.appendChild(Object.assign(document.createElement("script"), {
    type: "importmap",
    innerHTML: JSON.stringify({
      imports: resolve(map.imports),
      scopes: Object.fromEntries(Object.entries(map.scopes).map(([k, v]) => [new URL(k, mapUrl).href, resolve(v)]))
    })
  }));
})
({
  "imports": {
    "jspm-test": "./src/index.js"
  },
  "scopes": {
    "./": {
      "@floating-ui/core": "./node_modules/@floating-ui/core/dist/floating-ui.core.mjs",
      "@floating-ui/dom": "./node_modules/@floating-ui/dom/dist/floating-ui.dom.browser.mjs",
      "lit/html.js": "./node_modules/lit/html.js"
    },
    "./node_modules/@floating-ui/core/": {
      "@floating-ui/utils": "./node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs"
    },
    "./node_modules/@floating-ui/dom/": {
      "@floating-ui/core": "./node_modules/@floating-ui/dom/node_modules/@floating-ui/core/dist/floating-ui.core.browser.mjs"
    },
    "./node_modules/lit/": {
      "lit-html": "./node_modules/lit-html/development/lit-html.js"
    }
  }
});
