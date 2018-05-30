import { app, BrowserWindow} from 'electron';
const path = require('path')

function createWindow() {
    // Create the browser window.
    let win = new BrowserWindow({ width: 800, height: 600 })

    // and load the index.html of the app.
    win.loadFile(path.join(__dirname,'./public/index.html'));

    win.webContents.openDevTools();
}

app.on('ready', createWindow);
