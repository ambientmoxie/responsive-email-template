import { Pane } from "https://cdn.jsdelivr.net/npm/tweakpane@4.0.3/dist/tweakpane.min.js";

const emailContainer = document.querySelector("#email-container");
const PARAMS = {
  width: 600,
};

const pane = new Pane();

console.log();

pane.addBinding(PARAMS, "width", {
  min: 300,
  max: 600,
});

pane.on("change", (ev) => {
  emailContainer.style.maxWidth = `${Math.round(ev.value)}px`;
});