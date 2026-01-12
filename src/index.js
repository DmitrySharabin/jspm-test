import { html, render } from "lit/html.js";
import { autoPlacement } from "@floating-ui/dom";
import { shift } from "@floating-ui/core";

const template = html`<p>Hello from JSPM Lit HTML!</p>`;
render(template, document.body);
