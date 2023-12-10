import { IsRequiredString } from 'src/core/decorator/required-string.decorator';

export class RegisterUserRequestDto {
  @IsRequiredString()
  user_id: string;

  @IsRequiredString()
  user_name: string;

  @IsRequiredString()
  password: string;
}
