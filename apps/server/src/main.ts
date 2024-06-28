import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { GlobalPipes } from './common/infrastructure/config/global-pipes';
import { GlobalExceptionFilter } from './common/infrastructure/config/global-filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: '*' });
  app.useGlobalPipes(GlobalPipes.getGlobal());

  app.useGlobalFilters(new GlobalExceptionFilter());

  if (process.env.NODE_ENV !== 'production') {
    const options = new DocumentBuilder()
      .setTitle('School')
      .setDescription('Sistema de Agendamiento de Clases para un Colegio')
      .setVersion('1.0')
      .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('/', app, document);
  }


  await app.listen(process.env.PORT || 5000);
}
bootstrap();
