import { IsRequiredString } from 'src/core/decorator/required-string.decorator';
import { UpdateUserRequestProps } from '../../contract/user.request.contract';

export class UpdateUserRequestDto implements UpdateUserRequestProps {
  @IsRequiredString()
  user_name: string;

  @IsRequiredString()
  level: string;
}
