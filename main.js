// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain, Menu, shell } = require('electron');
const path = require('path');
// 引入node的 path 和url模块
const url = require('url');
// 获取在 package.json 中的命令脚本传入的参数，来判断是开发还是生产环境
const mode = process.argv[2];
// 新窗口
let responseWindow = null;
let consoleWindow = null;
// 发送模块
const runtimeResponse = require('apipost-runtime-response');
const log = require('electron-log');
const schedule = require('node-schedule');

const restart = (isFullUpdate) => {
  if (!isFullUpdate) {
    app.relaunch({ args: process.argv.slice(1).concat(['--relaunch']) });
    app.exit(0);
  } else {
    app.exit(0);
  }
};

function createWindow() {
  // 自适应分辨率
  // eslint-disable-next-line global-require
  let screen;
  try {
    screen = require('electron').screen;
  } catch (err) {
    console.log(err);
  }
  // Create the browser window.
  const size = screen?.getPrimaryDisplay()?.workAreaSize || {
    width: 1080,
    height: 720,
  };
  // console.log(size);
  let width = parseInt(size.width * 0.82, 10);
  const height = parseInt(size.height * 0.82, 10);

  // eslint-disable-next-line radix
  const minWIdth = parseInt(size.width * 0.5);
  const minHeight = parseInt(size.height * 0.55, 10);
  // if (process.env.LOCALAPPDATA) {
  //   cacheDir = process.env.LOCALAPPDATA;
  // } else {
  //   cacheDir = app.getPath('userData');
  // }
  if (width % 2 !== 0) {
    width += 1; // 宽度为偶数
  }

  let _titleBarStyle = 'default';

  if (process.platform === 'darwin') {
    _titleBarStyle = 'hiddenInset';
  } else if (process.platform === 'win32') {
    _titleBarStyle = 'hidden';
  }

  let mainWindow = new BrowserWindow({
    width,
    minWidth: minWIdth,
    height,
    minHeight,
    frame: false,
    titleBarStyle: _titleBarStyle,
    enableRemoteModule: true,
    webSecurity: false,
    resizable: true,
    webPreferences: {
      spellcheck: false,
      backgroundThrottling: false,
      contextIsolation: false,
      webSecurity: false,
      nativeWindowOpen: true,
      enableRemoteModule: true,
      nodeIntegration: true, // 注入node模块
      preload: path.join(__dirname, 'preload.js'),
    },
  });
  mainWindow.on('closed', () => {
    mainWindow = null;
    schedule.gracefulShutdown();
    app.quit();
  });
  // and load the index.html of the app.
  // mainWindow.loadFile('index.html')
  // mainWindow.webContents.openDevTools();
  // 判断是否是开发模式
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, './src/index.html'),
      protocol: 'file:',
      slashes: true,
    })
  );
  mainWindow.webContents.openDevTools();


  // 新窗口打开
  mainWindow.webContents.on('new-window', (event, url, frameName, disposition, options) => {
    if (frameName === 'responseWindow') {
      // open window as modal
      event.preventDefault();
      Object.assign(options, {
        // parent: mainWindow,
        alwaysOnTop: false,
        // show: false,
      });
      if (!responseWindow) {
        // eslint-disable-next-line no-param-reassign
        event.newGuest = new BrowserWindow({
          ...options,
          // backgroundColor: 'red',
        });
        responseWindow = event.newGuest;
        responseWindow.setAlwaysOnTop(false);
        event.newGuest.on('closed', () => {
          responseWindow = null;
          responseWindow = null;
        });
      }
    }
    if (frameName === 'consoleWindow') {
      // open window as modal
      event.preventDefault();
      Object.assign(options, {
        // parent: mainWindow,
        alwaysOnTop: false,
        // show: false,
      });
      if (!consoleWindow) {
        // eslint-disable-next-line no-param-reassign
        event.newGuest = new BrowserWindow({
          ...options,
          // backgroundColor: 'red',
        });
        consoleWindow = event.newGuest;
        consoleWindow.setAlwaysOnTop(false);
        event.newGuest.on('closed', () => {
          consoleWindow = null;
          consoleWindow = null;
        });
      }
    }
  });

  const template = [
    {
      label: 'Apipost',
      role: 'windowMenu',
      submenu: [
        {
          label: '检查更新',
          click() {
            mainWindow.webContents.send('action', 'checkUpdate');
          },
          accelerator: 'CmdOrCtrl+U',
        },
        {
          type: 'separator',
        },
        {
          label: '退出',
          role: 'quit',
          accelerator: 'CmdOrCtrl+Q',
        },
      ],
    },
    {
      label: '编辑',
      submenu: [
        {
          label: '撤销',
          accelerator: 'CmdOrCtrl+Z',
          role: 'undo',
        },
        {
          label: '重做',
          accelerator: 'Shift+CmdOrCtrl+Z',
          role: 'redo',
        },
        {
          type: 'separator',
        },
        {
          label: '复制',
          accelerator: 'CmdOrCtrl+C',
          role: 'copy',
        },
        {
          label: '剪切',
          accelerator: 'CmdOrCtrl+X',
          role: 'cut',
        },
        {
          label: '粘贴',
          accelerator: 'CmdOrCtrl+V',
          role: 'paste',
        },
        {
          type: 'separator',
        },
        {
          label: '全选',
          accelerator: 'CmdOrCtrl+A',
          role: 'selectAll',
        },
      ],
    },
    {
      label: '关于',
      role: 'help',
      submenu: [
        {
          label: '关于',
          click() {
            mainWindow.webContents.send('action', 'about');
          },
        },
      ],
    },
  ];
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);

  const gotTheLock = app.requestSingleInstanceLock();
  if (!gotTheLock) {
    app.quit();
  } else {
    app.on('second-instance', () => {
      try {
        if (typeof mainWindow === 'object') {
          if (mainWindow.isMinimized()) mainWindow.restore();
          mainWindow.focus();
          mainWindow.show();
        }
      } catch (err) {
        console.log(err);
      }
    });
  }





}

// 项目重启
ipcMain.on('restart', (event, data) => {
  restart(data.isHotUpdate);
});
// 窗口置顶
ipcMain.on('responseIsOnTop', async (event, data) => {
  responseWindow.setAlwaysOnTop(data);
});
// 控制台置顶
ipcMain.on('consoleIsOnTop', async (event, data) => {
  consoleWindow.setAlwaysOnTop(data);
});

// 发送监听
ipcMain.on('runtime_request', async (ipcEvent, arg) => {
  try {
    runtimeResponse(ipcEvent, arg);
  } catch (error) {
    console.log(error);
  }
});

// 监听所有窗口关闭
ipcMain.on('window-all-closed', async () => {
  app.quit();
  app.exit(0);
});
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

