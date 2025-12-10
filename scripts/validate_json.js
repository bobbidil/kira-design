
const fs = require('fs');
const path = require('path');

function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function (file) {
        const fullPath = path.join(dirPath, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (file !== 'node_modules' && file !== '.git' && file !== '.vercel' && file !== 'dist' && file !== 'build') {
                arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
            }
        } else {
            if (file.endsWith('.json')) {
                arrayOfFiles.push(fullPath);
            }
        }
    });

    return arrayOfFiles;
}

const jsonFiles = getAllFiles(process.cwd());
let hasError = false;

console.log(`Checking ${jsonFiles.length} JSON files...`);

jsonFiles.forEach(file => {
    try {
        const content = fs.readFileSync(file, 'utf8');
        if (content.trim() === '') {
            console.warn(`WARNING: Empty file found: ${file}`);
            // Empty is technically not valid JSON, but might be expected for some tools?
        } else {
            JSON.parse(content);
        }
    } catch (e) {
        console.error(`ERROR: Invalid JSON in ${file}`);
        console.error(e.message);
        hasError = true;
    }
});

if (hasError) {
    console.log('JSON validation failed.');
    process.exit(1);
} else {
    console.log('All JSON files are valid.');
}
