const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const ipcMain = electron.ipcMain;

const path = require('path');
const isDev = require('electron-is-dev');

const TcpClient = require('../tcp_client')

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 400,
    height: 350,
  });
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  mainWindow.on('closed', () => mainWindow = null);


  // debug
  mainWindow.webContents.openDevTools();
}

app.on('ready', () => {
  createWindow();

  // TcpClient.setupClient('openbarrage.douyutv.com', 8061);
  TcpClient.setupClient('localhost', 9090);

  TcpClient.sendDataToServer('test');
  // ipcMain.on('SEND_DATA', (e, payload) => {
  //   TcpClient.sendDataToServer(payload);
  // });
  
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});