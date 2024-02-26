import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigAppService {
  constructor(private configService: ConfigService) {}

  get port() {
    return this.configService.get<string>('app.port');
  }
}
