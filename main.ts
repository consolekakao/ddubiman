import { app, BrowserWindow } from "electron";
import isDev from "electron-is-dev";
import path from "path";

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

  window.loadURL(
    isDev
      ? "http://localhost:5173"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
  // window.loadFile("index.html");
});
