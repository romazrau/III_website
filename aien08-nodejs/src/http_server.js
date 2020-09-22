const http = require('http');

const server = http.createServer((req, res)=>{
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    res.end(`
    <h2>Hola 123</h2>
    <h3>${ req.url }</h3>
    `)
});

server.listen(3000);


