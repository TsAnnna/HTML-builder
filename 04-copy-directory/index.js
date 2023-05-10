const path = require('path');
const fs = require('fs');

const { stdin, stdout } = process;
const folderToCopy = path.join(__dirname, 'files');
const targetDir = path.join(__dirname, 'files-copy');

fs.mkdir(targetDir, { recursive: true }, (err) => {
  if (err) {
    throw err;
  } else {
    console.log('Directory created successfully!');
    fs.readdir(folderToCopy, (err, files) => {
      if (err) throw err;
      files.forEach((file) => {
        fs.copyFile(path.join(folderToCopy, file), path.join(targetDir, file), (err) => {
          if (err) throw err;
        })
      })
      console.log("Files successfully copied");
    })
  }
})
