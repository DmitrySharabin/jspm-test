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
      "lit/html.js": "./node_modules/lit/html.js"
    },
    "./node_modules/lit/": {
      "lit-html": "./node_modules/lit-html/development/lit-html.js"
    }
  }
});
