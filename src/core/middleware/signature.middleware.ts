import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { NextFunction } from 'connect';
import { Request } from 'express';
import { SignatureService } from '../helper/module/signature.service';
@Injectable()
export class SignatureMiddleware implements NestMiddleware {
  constructor(readonly signatureService: SignatureService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const signature =
      (req.headers.signature as string) || (req.query.signature as string);
    const timestamp =
      (req.headers.timestamp as string) || (req.query.timestamp as string);
    const accessToken =
      (req.headers.authorization as string) ||
      (req.query.authorization as string) ||
      '';

    const isValidSignature = this.signatureService.validateSignature(
      signature,
      timestamp,
      accessToken.slice('bearer '.length),
      60,
    );
    if (!isValidSignature) {
      throw new UnauthorizedException('Invalid Signature.');
    }

    next();
  }
}
