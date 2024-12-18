import { NestFactory } from '@nestjs/core';
import { AuthServiceModule } from './auth-service.module';

async function bootstrap() {
  const port = process.env.PORT || 3000; // Fallback su 3000 se non valorizzata
  console.log(`Starting server on port: ${port}`);

  const app = await NestFactory.create(AuthServiceModule);
  await app.listen(port);
  console.log(`Server is running on http://localhost:${port}`);
}
bootstrap();
