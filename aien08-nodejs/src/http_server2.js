const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{

    fs.writeFile(
        __dirname +'/headers01.txt',
        JSON.stringify(req.headers),
        error=>{
            if(error){
                console.log('error:', error);
                //res.end(error);
            } else {
                console.log('ok');
                //res.end('ok');
            }
        });


});

server.listen(3000);


