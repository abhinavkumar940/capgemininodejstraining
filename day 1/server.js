const http = require('http');
const url  = require('url');
// const qs   = require('querystring');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    const req_url = req.url;

    const parsed_url = url.parse(req_url);

    const pathname = parsed_url.pathname;

    console.log(`The URL is: ${pathname}`);

    if (pathname === '/') {
        // this is the home page
        const home = require('./home');
        res.end(home.blabla);
    } else if(pathname === '/about') {
        // About us page
        const about = require('./about');
        res.end(about.html);
    } else if (pathname === '/contact') {
        // Contact us page
        const contact = require('./contact');
        res.end(contact.html);
    } else {
        // anything else, page not found
        res.statusCode = 404;
        res.end("<h1>The page you are requesting could not be found");
    }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});