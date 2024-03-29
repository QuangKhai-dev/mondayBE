import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ConfigAppService } from './config/app/config.service';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // validation toàn bộ request được gửi lên
  app.useGlobalPipes(new ValidationPipe());

  const configApp: ConfigAppService = app.get(ConfigAppService);
  const config = new DocumentBuilder()
    .setTitle('Monday API')
    .setDescription('Đây là trang về API cho dự án monday')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(configApp.port);
}
bootstrap();
