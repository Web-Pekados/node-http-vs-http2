const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

// Загружаем proto файл
const packageDefinition = protoLoader.loadSync('./test.proto', {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
});

const testProto = grpc.loadPackageDefinition(packageDefinition).test;

// Реализация сервиса
function calculateValue(call, callback) {
  const result = Math.pow(5, 10);
  callback(null, { value: result });
}

// Создаем сервер
const server = new grpc.Server();

// Добавляем сервис
server.addService(testProto.TestService.service, {
  calculateValue: calculateValue
});

// Сервер без TLS для тестирования
const port = '0.0.0.0:3003';
server.bindAsync(port, grpc.ServerCredentials.createInsecure(), (err, port) => {
  if (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
  console.log(`gRPC server listening on ${port}`);
  server.start();
});
