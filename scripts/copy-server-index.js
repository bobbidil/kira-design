// copy-server-index.js
const fs = require('fs');
const path = require('path');

// Find the server folder under build/server
const serverRoot = path.resolve(process.cwd(), 'build', 'server');
const dirs = fs.readdirSync(serverRoot).filter(d => d.startsWith('nodejs_'));
if (dirs.length === 0) {
    console.error('No server directory found');
    process.exit(1);
}
const serverDir = path.join(serverRoot, dirs[0]);
const src = path.join(serverDir, 'index.js');
const dest = path.join(serverDir, 'server-index.mjs');
if (!fs.existsSync(src)) {
    console.error('Source file not found:', src);
    process.exit(1);
}
fs.copyFileSync(src, dest);
console.log('Copied', src, 'to', dest);
