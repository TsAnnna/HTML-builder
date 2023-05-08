const { stdin, stdout, exit } = process;
const fs = require('fs');
const path = require('path');

fs.writeFile(
  path.join(__dirname, 'wishlist.txt'), 
  '',
  (err) => {
    if (err) throw err;
  }
);

function exitHandler() {
  console.log('\nHave a nice day!');
  process.exit();
}

stdout.write('Write your wish \n');

process.on('SIGINT', exitHandler);

stdin.on('data', data => {

  if(data.toString().trim() == 'exit') {
    exitHandler();
  }

  fs.appendFile(
    path.join(__dirname, 'wishlist.txt'),
    `${data}`,
    err => {
      if (err) throw err;
      console.log('The file has been modified');
    } 
  )
  
});



