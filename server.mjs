import http from 'node:http';

// .mjs = tipo de importação. se for só .js o node da erro.

// criado a casca do servidor = http.createServer().listen(3000);
http.createServer((request, response) => {
    response.end('hello Client')
}).listen(3000);


