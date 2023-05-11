const fs = require('fs');
const path = require('path');

fs.readdir(path.join(__dirname, 'styles'), {withFileTypes: true}, (err, files) => {
  if (err) throw err;
  let styles = '';
  files.forEach(file => {

    if(file.isFile() && path.extname(file.name) == ".css") {
      stream = fs.createReadStream(path.join(__dirname, 'styles', file.name), 'utf-8');
      stream.on('data', chunk => styles += chunk);
      stream.on('end', () => {
        fs.writeFile(
          path.join(__dirname, 'project-dist', 'bundle.css'),
          styles,
          (err) => {
            if (err) throw err;
        }
        );
        
      });
    }
  });

  console.log('Файл был создан');
})