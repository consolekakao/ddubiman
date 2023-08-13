"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const electron_is_dev_1 = __importDefault(require("electron-is-dev"));
const path_1 = __importDefault(require("path"));
let window;
electron_1.app.on("ready", () => {
    console.log("ready!");
    window = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        },
    });
    window.loadURL(electron_is_dev_1.default
        ? "http://localhost:5173"
        : `file://${path_1.default.join(__dirname, "../build/index.html")}`);
    // window.loadFile("index.html");
});
