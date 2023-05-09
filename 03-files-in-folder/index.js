const fs = require('fs');
const path = require('path');

const { stdin, stdout } = process;

fs.readdir(path.join(__dirname, 'secret-folder'), {withFileTypes: true}, (err, files) => {
  if (err) throw err;
  files.forEach(file => {
    let result = '';
    if(file.isFile()) {
      let filename = path.basename(file.name, path.extname(file.name));
      let fileExtension = path.extname(file.name);
      let filePath = path.join(__dirname, 'secret-folder', file.name);
      let fileSize = -1;

      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error(err);
          return;
        }
        fileSize = stats.size;

        if(fileSize !== -1) {
          console.log(`${filename} - ${fileExtension} - ${fileSize}kb`);
        }
      });

    }
  });

})