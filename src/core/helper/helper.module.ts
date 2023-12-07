import { Global, Module } from '@nestjs/common';
import { EnvModule } from 'src/infra/config/env.module';
import { SignatureService } from './modules/signature.service';

@Global()
@Module({
  imports: [EnvModule],
  providers: [SignatureService],
  exports: [SignatureService],
})
export class HelperModule {}
