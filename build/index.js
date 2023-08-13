"use strict";
// import { app, BrowserWindow } from "electron";
const { app, BrowserWindow } = require("electron");
let window;
app.on("ready", () => {
    console.log("ready!");
    window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        },
    });
    window.loadFile("index.html");
});
