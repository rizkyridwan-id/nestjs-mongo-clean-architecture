import { IsRequiredString } from 'src/core/decorator/required-string.decorator';
import { LoginUserRequestProps } from '../../contract/auth.request.contract';

export class LoginRequestDto implements LoginUserRequestProps {
  @IsRequiredString()
  user_id: string;

  @IsRequiredString()
  password: string;
}
