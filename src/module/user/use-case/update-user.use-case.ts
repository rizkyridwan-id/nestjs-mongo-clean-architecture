import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { UpdateUserRequestDTO } from '../controller/dtos/update-user.request.dto';
import { UserMongoEntity } from '../repository/user.mongo-entity';
import { UserRepositoryPort } from '../../../port/repository/user.repository.port';
import { InjectUserRepository } from '../repository/user.repository.provider';

import { BaseUseCase, IUseCase } from 'src/core/base/module/use-case.base';
import { ResponseDto } from 'src/core/base/http/response.dto.base';
import { TransactionService } from 'src/core/helper/module/transaction/transaction.service';

import { PickUseCasePayload } from 'src/core/base/types/pick-use-case-payload.type';

type TUpdateUserPayload = PickUseCasePayload<
  UpdateUserRequestDTO,
  'data' | '_id'
>;
@Injectable()
export class UpdateUser
  extends BaseUseCase
  implements IUseCase<UpdateUserRequestDTO>
{
  constructor(
    @InjectUserRepository private userRepository: UserRepositoryPort,
  ) {
    super();
  }

  async execute({ data, _id }: TUpdateUserPayload): Promise<ResponseDto> {
    try {
      const payload: Partial<UserMongoEntity> = data;
      await this.userRepository.update({ _id }, payload);
    } catch (err) {
      this.logger.error(err.message, err.trace);
      throw new HttpException(err.message, err.status || 500);
    }
    return new ResponseDto({
      status: HttpStatus.OK,
      message: `User ${_id} documents updated`,
    });
  }
}
