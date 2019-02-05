const fork = require('child_process').fork;

// set tcp things into an individual process.
const tcpProcess = fork('./tcp_client/client.js');

const SEND_DATA = 'SEND_DATA';
const SETUP_CLIENT = 'SETUP_CLIENT';

const { webContents, ipcMain } = require('electron')


function onExit() {
  tcpProcess.kill('SIGINT');
  process.exit(0);
}

process.on('exit', onExit);

tcpProcess.on('message', (res) => {
  // add your own handlers
  // electron.ipcMain.send('socket_data', res)
  // webContents.getAllWebContents()
  // webContents.getAllWebContents()[0].webContents.send('socket_data', res)
  ipcMain.emit('socket_data', res)
});

module.exports = {
  // init tcp client
  setupClient: (addr, port) => {
    tcpProcess.send({ type: SETUP_CLIENT, payload: { addr, port } });
  },
  // send string or buffer to server
  sendDataToServer: (data) => {
    tcpProcess.send({ type: SEND_DATA, payload: data });
  },
};
