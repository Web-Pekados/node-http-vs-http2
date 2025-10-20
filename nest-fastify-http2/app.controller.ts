import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getValue(): string {
    return Math.pow(5, 10).toString();
  }
}
