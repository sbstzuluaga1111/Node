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

const replaceTemplate = (temp, product) => {
    let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
    output = output.replace(/{%IMAGE%}/g, product.image);
    output = output.replace(/{%PRICE%}/g, product.price);
    output = output.replace(/{%FROM%}/g, product.from);
    output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
    output = output.replace(/{%QUANTITY%}/g, product.quantity);
    output = output.replace(/{%DESCRIPTION%}/g, product.description);
    output = output.replace(/{%ID%}/g, product.id);

    if(!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');
  return output;
}
const tempOverview = fs.readFileSync(
    `${__dirname}/templates/template-overview.html`,
    'utf-8'
  );
  const tempCard = fs.readFileSync(
    `${__dirname}/templates/template-card.html`,
    'utf-8'
  );
  const tempProduct = fs.readFileSync(
    `${__dirname}/templates/template-product.html`,
    'utf-8'
  );
  const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
  const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
    console.log(req.url);
    const { query, pathname } = url.parse(req.url, true);


 // Overview page
 if (pathname === '/' || pathname === '/overview') {
    res.writeHead(200, {
      'Content-type': 'text/html'
    });

    const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join('');
    const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
    res.end(output);

// Product page

    }else if(pathName === '/product'){
        res.end('welcome a product')

// API

    } else 
    if (pathName === '/api'){
        
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(data);


// Not found
        
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