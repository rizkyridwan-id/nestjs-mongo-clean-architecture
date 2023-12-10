import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'connect';
import { Request } from 'express';
import { CustomLogger } from '../../infra/logger/logger';

@Injectable()
export class DebugLoggerMiddleware implements NestMiddleware {
  private logger: CustomLogger;
  constructor() {
    this.logger = new CustomLogger('HttpDebug');
  }

  use(req: Request, res: Response, next: NextFunction) {
    const body = req.body;
    const query = req.query;

    if ((process.env.MODE = 'DEVELOPMENT')) {
      this.logger.debug(req.baseUrl + ' called.', req.method);
      if (Object.keys(body).length) {
        this.logger.debug('Body:' + JSON.stringify(body, null, 2));
      }
      if (Object.keys(query).length) {
        this.logger.debug('Query:' + JSON.stringify(query, null, 2));
      }
    }

    next();
  }
}
