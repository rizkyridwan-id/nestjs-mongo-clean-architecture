import { IsRequiredString } from 'src/core/decorator/required-string.decorator';

export class UpdateUserRequestDTO {
  @IsRequiredString()
  user_name: string;

  @IsRequiredString()
  level: string;
}
