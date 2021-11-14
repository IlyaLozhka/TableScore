const http = require('http');
const faker = require('faker');
const PORT = process.env.PORT || 5000;

http.createServer((request, response) => {
    response.writeHead(200, {
        'Access-Control-Allow-Origin': '*',
        'Connection': 'keep-alive',
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
    });
    setInterval(() => {
        response.write(
            `data: ${JSON.stringify({
                player: `${faker.name.firstName()} ${faker?.name.lastName()}`,
                score: Math.round(Math.random() * 1000)
            })}`
        );
        response.write('\n\n');
    }, 3000);
}).listen(`${PORT}`);