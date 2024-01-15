import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // strips non-whitelisted properties
    forbidNonWhitelisted: true, // throw an error if non-whitelisted values are provided
    transform: true, // auto transform payloads to be objects typed according to their DTO classes
    disableErrorMessages: false, // set to true in production to prevent leaking sensitive errors
  }));


  const config = new DocumentBuilder()
    .setTitle('User API')
    .setDescription('The user API description')
    .setVersion('1.0')
    .addTag('users')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
