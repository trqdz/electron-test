global.electron = require('electron');
window.ipcRenderer = require('electron').ipcRenderer;
window.clipboard = require('electron').clipboard;
window.sha256 = require('crypto-js/sha256');
window.fs = require('fs');
window.__dirname = __dirname;
window.path = require('path');
window.express = require('express');
window.borderParse = require('body-parser');
window.multipart = require('connect-multiparty');
window.JSON5 = require('json5');
window.ejs = require('ejs');
window.os = require('os');
window.json2md = require('json2md');
window.Buffer = Buffer;
window.processNode = process;
window.apipostSend = require('apipost-send');


