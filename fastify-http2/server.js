const fastify = require('fastify');
const fs = require('fs');

const server = fastify({
  http2: true,
  // https: {
  //   key: fs.readFileSync('../certs/server.key'),
  //   cert: fs.readFileSync('../certs/server.crt')
  // }
});


server.get('/', async (request, reply) => {
  return Math.pow(5, 10).toString();
});

server.listen({ port: 3003, host: 'localhost' }, err => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log('Fastify server listening on https://localhost:3003');
});
