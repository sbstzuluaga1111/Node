const fs = require('fs');

fs.readFile(`starter/${__dirname}/dog.txt`,(err, data) => {
    console.log(`Breed: ${data}`);
})