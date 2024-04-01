import { Module } from '@nestjs/common';
import { resourceProviders } from './resource.provider';
import { SignatureGuard } from 'src/core/guard/signature.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  providers: [
    {
      provide: APP_GUARD,
      useClass: SignatureGuard,
    },
  ],
  imports: resourceProviders,
  exports: resourceProviders,
})
export class ResourceModule {}
