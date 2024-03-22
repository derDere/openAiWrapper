const { app, BrowserWindow } = require('electron')
const commandLineArgs = require('command-line-args');

const optionDefinitions = [
    { name: 'light-mode', alias: 'l', type: Boolean, defaultValue: false },
    { name: 'zoom', alias: 'z', type: Number, defaultValue: 1.0 }
];

const filteredArgs = process.argv.slice(1);

const options = commandLineArgs(optionDefinitions, { argv: filteredArgs, partial: true });

options['light-mode'] = !!options['light-mode']
options['zoom'] = options['zoom'] || 1.0

const bgColor = options['light-mode'] ? '#fff' : '#212121'
const zoomFactor = options['zoom']

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1600,
    height: 1000,
    icon: 'logo.ico',
    backgroundColor: bgColor,
    show: false,
  })
  win.on('ready-to-show', () => {
    win.show()
    win.webContents.setZoomFactor(zoomFactor);
  })
  win.setMenu(null)
  win.loadURL('https://chat.openai.com/')
}

app.whenReady().then(() => {
  createWindow()
})


//*/
