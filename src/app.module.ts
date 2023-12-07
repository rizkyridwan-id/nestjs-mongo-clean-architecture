import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { databaseProviders } from './infra/database/database.provider';
import { ResourceModule } from './module/resource.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ResourceModule,
    ...databaseProviders,
  ],
})
export class AppModule {}
