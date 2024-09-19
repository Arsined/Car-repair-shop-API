import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Education API')
    .setVersion('1.0')
    .build(); 
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api_docs', app, document);
  await app.listen(3001); //устанавливаем порт прослушивания 3001
  await app.setGlobalPrefix('/api'); //глобальный префикс для роутов контроллера
}
bootstrap();
