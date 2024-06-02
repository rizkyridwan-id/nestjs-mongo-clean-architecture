import { IsString } from 'class-validator';
import { RegisterUserRequestDto } from 'src/module/auth/controller/dto/register-user-request.dto';
import { CreateUserRequestProps } from '../../contract/user.request.contract';

export class CreateUserRequestDto
  extends RegisterUserRequestDto
  implements CreateUserRequestProps
{
  @IsString()
  level?: string;
}
