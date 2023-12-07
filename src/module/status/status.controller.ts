import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ResponseDto } from 'src/core/base-class/response.dto.base';

@Controller('status')
export class StatusController {
  constructor() {}

  @Get()
  getHello(): ResponseDto {
    return new ResponseDto({
      status: HttpStatus.OK,
      message: 'Status Alive.',
    });
  }
}
