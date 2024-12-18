import { NestFactory } from '@nestjs/core';
import { UserServiceModule } from './user-service.module';

async function bootstrap() {
  const port = process.env.PORT || 3000; // Fallback su 3000 se non valorizzata
  console.log(`Starting server on port: ${port}`);

  const app = await NestFactory.create(UserServiceModule);
  await app.listen(port);
  console.log(`Server is running on http://localhost:${port}`);
}
bootstrap();
