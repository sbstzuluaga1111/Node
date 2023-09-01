const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) =>{
    //solucion 1:
    //fs.readFile('starter/test-file.txt', (err,data) =>{
        //if (err) console.log(err);
        //res.end(data);
    //});
    
    //solucion 2:
    //const readable = fs.createReadStream('starter/test-file.txt')
   // readable.on('data', chunk => {
        //res.write(chunk);
   // })
    //readable.on('end', () => {
        //res.end();
    //})
    //readable.on('error', err => {
        //console.log(err);
        //res.statusCode = 500;
        //res.end('File not found')
   // })

   //solucion 3:
   const readable = fs.createReadStream("starter/test-file.txt");
   readable.pipe(res);
   // readableSource.piper(writeableDest)
})

server.listen(3000, '127.0.0.1', () => {
    console.log('Server running on port 3000');
})