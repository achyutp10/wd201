const fs = require('fs')
fs.writeFile(
  'sample.txt',
  'Hello World. Welcome to Node.js File System Module.',
  (err) => {
    if (err) throw err
    console.log('File Created!')
  }
)

fs.readFile('sample.txt', (err, data) => {
  if (err) throw err
  console.log(data.toString())
})
