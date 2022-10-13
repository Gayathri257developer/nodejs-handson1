const http = require('http');

const server = http.createServer((req, res)=>{
      res.write('<h1>Nodejs Handson1</h1>');
      res.end();
   }
});

server.listen(3000);
