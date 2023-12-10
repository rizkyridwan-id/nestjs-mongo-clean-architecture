import { IsString } from 'class-validator';
import { RegisterUserRequestDto } from 'src/module/auth/controller/dto/register-user-request.dto';

export class CraeteUserRequestDto extends RegisterUserRequestDto {
  @IsString()
  level?: string;
}
