const fs = require('fs');
const path = require('path');

const cwd = process.cwd();

const file = fs.readFileSync(path.resolve(cwd, 'app', 'index.html'), 'utf8');

fs.writeFileSync(path.resolve(cwd, 'dist', 'index.html'), file, 'utf8');