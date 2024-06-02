import { Entity } from 'src/core/base/domain/entity';
import { HashService } from 'src/core/helper/module/hash.service';
import { UserLevel } from './value-objects/user-level.value-object';
import { Types } from 'mongoose';

export interface UserProps {
  user_id: string;
  user_name: string;
  password: string;
  level: UserLevel;
  input_by?: string;
}

export interface UpdateUserProps {
  user_name: string;
  level: string;
}

export class UserEntity extends Entity<UserProps> {
  private static hashUtil: HashService = new HashService();

  constructor(props: UserProps, _id?: Types.ObjectId) {
    super(props, _id);
  }

  static async create(props: UserProps) {
    const hashPassword = await this.hashUtil.generate(props.password);

    return new UserEntity({
      user_id: props.user_id,
      user_name: props.user_name,
      password: hashPassword,
      level: props.level,
      input_by: props.input_by,
    });
  }

  static async comparePassword(rawPassword: string, hashedPassword: string) {
    return await this.hashUtil.compare(rawPassword, hashedPassword);
  }

  async updateUser(payload: UpdateUserProps) {
    this.props.level = new UserLevel(payload.level);
    this.props.user_name = payload.user_name;
  }
}
