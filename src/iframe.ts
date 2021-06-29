/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />
import App from './Components/App.svelte';

console.log('Hello from iframe');

const app = new App({
    target: document.body,
});

export default app;
