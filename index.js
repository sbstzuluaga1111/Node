const fs = require('fs');
const http = require('http');
const url = require('url');

//FILES:
/* const textfs = fs.readFileSync('./txt/hola.txt', 'utf-8')
console.log(textfs);

const textOut =`this is haaaaafsaf: ${textfs}.\nCreated on ${Date.now()}`;
fs.writeFileSync('./txt/hola.txt', textOut);
console.log('listo') */

/* fs.readFile('./txt/hola.txt','utf-8', (err, data1) =>{
    if (err) return console.log('ERROR')

    fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) =>{
    console.log(data2);
    fs.readFile(`./txt/tt.txt`, 'utf-8', (err, data3) =>{
        console.log(data3);

        fs.writeFile('./txt/tt.txt', `${data2}\n${data3}`,'utf-8', err =>{
            console.log('epicoooo !');
        })
        });
    });
});
console.log('will read file') */

//SERVER:



const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8',)
const proObj = JSON.parse(data)

const server = http.createServer((req, res) =>{
    console.log(req.url);

    const pathName = req.url;
    if (pathName === '/' || pathName === '/overview'){
        res.end('welcome a overview')
    }else if(pathName === '/product'){
        res.end('welcome a product')
    } else 
    
    if (pathName === '/api'){
        
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(data);
        
    } else{
        res.writeHead(404, {'Content-Type': 'text/html',
        'my-own-header': 'hello world'
    });
        res.end('<h1>page not found!</h1>');
    }
});

server.listen(3000, '127.0.0.1', () => {
    console.log('server iniciado');
})