import { IsRequiredString } from 'src/core/decorator/required-string.decorator';

export class AuthRefreshTokenRequestDTO {
  @IsRequiredString()
  user_id: string;

  @IsRequiredString()
  refresh_token: string;
}
