const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1600,
    height: 1000,
    icon: 'logo.ico',
    backgroundColor: '#212121',
    show: false,
  })
  win.on('ready-to-show', () => {
    win.show()
  })
  win.setMenu(null)
  win.loadURL('https://chat.openai.com/')
}

app.whenReady().then(() => {
  createWindow()
})
