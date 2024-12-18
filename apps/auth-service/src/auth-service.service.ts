import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';

@Injectable()
export class AuthServiceService {
  private readonly logger = new Logger(AuthServiceService.name);
  getHello(): string {
    this.logger.log('Informational log');
    this.logger.warn('Warning log');
    this.logger.error('Error log');
    return 'Hello World!';
  }
}
