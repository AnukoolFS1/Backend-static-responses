const http = require('http');
const path = require('path');
const fs = require('fs');


// console.log(directory);


const serverListener = (req, res) => {
    let directory = path.join(__dirname, 'server', req.url === '/' ? '/index.html' : req.url)

    // extension
    let extension = path.extname(directory);

    let contentType = 'text/html'

    switch (extension) {
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
        if (err) {
            console.log(err)
        }
        else {
            res.writeHead(200, { "Content-Type": contentType }); // status code and content-header
            res.end(data)
        }
    })
}

const server = http.createServer(serverListener);

server.listen(4000, function () { console.log('server initiated') })





// // if (req.url === '/index.html') {
//     //     fs.readFile(path.join(directory, 'index.html'), (err, data) => {
//     //         if (err) console.log('err', err)
//     //         else {
//     //             res.writeHead(200, contentType);
//     //             res.end(data)
//     //         }
//     //     })
//     // } else if (req.url === '/about.html') {
//     //     fs.readFile(path.join(directory, 'about.html'), (err, data) => {
//     //         if (err) console.log('err', err)
//     //         else {
//     //             res.writeHead(200, contentType);
//     //             res.end(data)
//     //         }
//     //     })
//     // } else if (req.url === '/services.html') {
//     //     fs.readFile(path.join(directory, 'services.html'), (err, data) => {
//     //         if (err) console.log('err', err)
//     //         else {
//     //             res.writeHead(200, {"Content-Type":"text/plain"});
//     //             res.end(data)
//     //         }
//     //     })
//     // }

//     // console.log(req.url);

// const http = require('http');
// const path = require('path');
// const fs = require('fs');

// const serverListener = (req, res) => {
//     // sanitize path
//     // let safeUrl = path.normalize(req.url).replace(/^(\.\.[\/\\])+/, '');
//     // let directory = path.join(__dirname, 'server', safeUrl === '/' ? 'index.html' : safeUrl);
//     let directory = path.join(__dirname, 'server', req.url === '/' ? '/index.html' : req.url)

//     // extension
//     let extension = path.extname(directory);
//     let contentType = 'text/html';

//     switch (extension) {
//         case '.css':
//             contentType = 'text/css';
//             break;
//         case '.js':
//             contentType = 'text/javascript';
//             break;
//         case '.jpeg':
//             contentType = 'image/jpeg';
//             break;
//         case '.png':
//             contentType = 'image/png';
//             break;
//         case '.json':
//             contentType = 'application/json';
//             break;
//         default:
//             contentType = 'text/html';
//     }

//     fs.readFile(directory, (err, data) => {
//         if (err) {
//             // Handle file not found or other errors
//             res.writeHead(404, { "Content-Type": "text/html" });
//             res.end('<h1>404 Not Found</h1>');
//         } else {
//             res.writeHead(200, { "Content-Type": contentType });
//             res.end(data);
//         }
//     });
// };

// const server = http.createServer(serverListener);

// server.listen(8000, function () {
//     console.log('Server running at http://localhost:8000');
// });