const http = require('http');
const path = require('path');
const fs = require('fs');

// const directory = path.join(__dirname)

const serverListener = (req, res) => {
    let directory = path.join(__dirname, 'server', req.url === '/' ? '/index.html' : req.url)

    // let extension = path.extname(__dirname, "server", req.url === '/'? 'index.html':req.url); // 

    let extension1 = path.extname(directory)

    console.log(extension1)

    let contentType = 'text/html'

    switch (extension1) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.jpeg':
            contentType = 'text/jpeg';
            break;
        case '.png':
            contentType = 'text/png';
            break;
        case '.json':
            contentType = 'application/json';
            break;
    }
    console.log(req.url)


    fs.readFile(directory, (err, data) => {
        if (err) console.log('errr', err)
        else {
            res.writeHead(200, { "Content-Type": contentType });
            res.end(data);
        }
    })
    // res.writeHead(200, { "Content-Type": "text/html" });
    // res.end('<h1>heading</h1>');
}
const server = http.createServer(serverListener);

server.listen(3000, function () { console.log('server initiated') });