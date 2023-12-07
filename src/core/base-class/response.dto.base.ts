import { IsNumber, IsObject, IsString } from 'class-validator';

export class ResponseDto {
  constructor({ status, data = {}, message = '', count = 0 }: ResponseDto) {
    this.status = status;
    this.data = data;
    this.message = message;
    this.count = count;
  }

  @IsNumber()
  status: number;

  @IsObject()
  data?: { [k: string]: any };

  @IsString()
  message?: string;

  @IsNumber()
  count?: number;
}
