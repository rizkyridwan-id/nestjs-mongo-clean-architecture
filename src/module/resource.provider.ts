import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/controller/auth.controller';
import { StatusModule } from './status/status.module';
import { UsersController } from './user/controller/user.controller';
import { UserModule } from './user/user.module';

export const protectedResourceControllers = [AuthController, UsersController];
export const resourceProviders = [StatusModule, AuthModule, UserModule];
