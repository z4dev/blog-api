import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log("server is running on port 3000")
  await app.listen(3000);
}
bootstrap();

// Now, you can run the application by executing the following command: