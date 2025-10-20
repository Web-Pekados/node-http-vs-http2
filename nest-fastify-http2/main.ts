import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({
      http2: true,
      // https: {
      //   key: fs.readFileSync('../certs/server.key'),
      //   cert: fs.readFileSync('../certs/server.crt')
      // }
    })
  );

  await app.listen({ port: 3003, host: '0.0.0.0' });
  console.log('NestJS Fastify HTTP/2 server listening on http://localhost:3003');
}

bootstrap();
