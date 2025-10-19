const fastify = require('fastify');

const server = fastify();

server.get('/', async (request, reply) => {
  return Math.pow(5, 10).toString();
});

server.listen({ port: 3003, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log('Fastify HTTP/1.1 server listening on http://localhost:3003');
});
