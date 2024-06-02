import { IsRequiredString } from 'src/core/decorator/required-string.decorator';
import { AuthRefreshTokenRequestProps } from '../../contract/auth.request.contract';

export class AuthRefreshTokenRequestDto
  implements AuthRefreshTokenRequestProps
{
  @IsRequiredString()
  user_id: string;

  @IsRequiredString()
  refresh_token: string;
}
