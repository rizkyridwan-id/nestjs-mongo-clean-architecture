import { IsRequiredString } from 'src/core/decorator/required-string.decorator';
import { RegisterUserRequestProps } from '../../contract/auth.request.contract';

export class RegisterUserRequestDto implements RegisterUserRequestProps {
  @IsRequiredString()
  user_id: string;

  @IsRequiredString()
  user_name: string;

  @IsRequiredString()
  password: string;
}
