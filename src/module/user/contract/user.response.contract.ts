import { IId } from 'src/core/interface/id.interface';

export interface UserResponseProps extends IId {
  user_id: string;
  user_name: string;
  level: string;
}
