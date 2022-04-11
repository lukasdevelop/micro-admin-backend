import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices'
import { Logger } from '@nestjs/common';

const logger = new Logger('Main')

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://user:4ahVLMq0gQTU@52.207.228.179:5672/smartranking'],
      noAck: false,
      queue: 'admin-backend'
    },
  });

  await app.listen();
}
bootstrap();

