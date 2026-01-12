# JSPM build failure when the `nodemodules` provider is used

## Steps to reproduce

1. Install dependencies with `npm install`.
1. Run `npm run serve` to start the development server and press `O` to open the app in your default browser. You should see a page with the “Hello from JSPM Lit HTML!” text.
1. In the terminal, stop the development server by pressing `Q` or `Ctrl + C`.
1. Run `npm run build`. The build process fails to generate an import map with the “Package ... has no package config, cannot create package target.” error.
