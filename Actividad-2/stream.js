const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) =>{
    //solucion 1:
    //fs.readFile('starter/test-file.txt', (err,data) =>{
        //if (err) console.log(err);
        //res.end(data);
    //});
    
    //solucion 2:
})

server.listen(3000, '127.0.0.1', () => {
    console.log('Server running on port 3000');
});