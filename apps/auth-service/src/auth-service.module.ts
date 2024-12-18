import { Module } from '@nestjs/common';
import { LoggerModule } from '@app/logger/src/logger.module';
import { AuthServiceController } from './auth-service.controller';
import { AuthServiceService } from './auth-service.service';

@Module({
  imports: [LoggerModule],
  controllers: [AuthServiceController],
  providers: [AuthServiceService],
})
export class AuthServiceModule {}
