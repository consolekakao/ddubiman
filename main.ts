import { app, BrowserWindow, ipcMain, nativeTheme } from "electron";
import isDev from "electron-is-dev";
import path from "path";

let window;

const createWindow = () => {
  console.log("ready!");
  window = new BrowserWindow({
    width: 1920,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });
  window.loadURL(
    isDev
      ? "http://localhost:5173"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
};

ipcMain.handle("dark-mode:toggle", () => {
  if (nativeTheme.shouldUseDarkColors) {
    nativeTheme.themeSource = "light";
  } else {
    nativeTheme.themeSource = "dark";
  }
  return nativeTheme.shouldUseDarkColors;
});

ipcMain.handle("dark-mode:system", () => {
  nativeTheme.themeSource = "system";
});

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
