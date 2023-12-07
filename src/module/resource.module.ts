import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { DebugLoggerMiddleware } from 'src/core/middleware/debug-logger.middleware';
import { SignatureMiddleware } from 'src/core/middleware/signature.middleware';
import { resourceProviders } from './resource.provider';

@Module({
  imports: resourceProviders,
  exports: resourceProviders,
})
export class ResourceModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(DebugLoggerMiddleware).forRoutes('*');
    consumer.apply(SignatureMiddleware).forRoutes('*');
  }
}
