import { applyDecorators } from '@nestjs/common';
import { IsOptional, Matches } from 'class-validator';

export function IsStringNumber() {
  const decorators = [Matches(/^\d+$/), IsOptional()];

  return applyDecorators(...decorators);
}
