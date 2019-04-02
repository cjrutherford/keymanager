import { Controller, Get } from '@nestjs/common';
import { AppService, Keys } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getKeys(): Keys {
    return this.appService.getKeys();
  }

  @Get('/priv')
  getPrivate(): String {
    return this.appService.getPrivate();
  }

  @Get('/pub')
  getPublic(): String {
    return this.appService.getPublic();
  }
}
