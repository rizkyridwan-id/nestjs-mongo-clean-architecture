import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseProviders } from './infra/database/database.provider';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), ...databaseProviders],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
