import App from "./App.svelte";
import { mount } from "svelte";

const target = document.getElementById("app");
if (!target) throw new Error('Missing <div id="app"></div> in index.html');

// Svelte 5 uses mount() instead of new App()
mount(App, {target});
