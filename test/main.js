const fs = require('fs')
fs.writeFile(
  'sample.txt',
  'Hello World. Welcome to Node.js File System Module.',
  (err) => {
    if (err) throw err
    console.log('File Created!')
  }
)
