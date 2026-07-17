import http from 'node:http';
// .mjs = tipo de importação. se for só .js o node da erro.

const users = [{
    name: 'Caua Oliveira',
    age: '20',
    status: true 
}, {
    name: 'Luana',
    age: '21',
    status: true
}, {
    name:'Rosilene',
    age: '41',
    status: false
}];



// criado a casca do servidor = http.createServer().listen(3000);
http.createServer((request, response) => {
    if(request.url === '/users'){ 
        response.writeHead(200, {'content-type': 'application/json'});
        response.end(JSON.stringify(users))
    } else {
          response.writeHead(404, {'content-type': 'application/json'});
        response.end(JSON.stringify({message:'Página não encontrada!'}))
    }
}).listen(3000);


