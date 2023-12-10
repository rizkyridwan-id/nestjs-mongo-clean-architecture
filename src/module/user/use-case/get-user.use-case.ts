import { HttpStatus, Injectable } from '@nestjs/common';
import { GetPaginationDto } from 'src/core/base/http/get-pagination.dto.base';
import { ResponseDto } from 'src/core/base/http/response.dto.base';
import { BaseUseCase, IUseCase } from 'src/core/base/module/use-case.base';
import { PickUseCasePayload } from 'src/core/base/types/pick-use-case-payload.type';
import { TypeValidator } from 'src/core/logic/type-validator';
import { UserRepositoryPort } from 'src/port/repository/user.repository.port';
import { UserResponseDTO } from '../controller/dtos/user.response.dto';
import { InjectUserRepository } from '../repository/user.repository.provider';

export type TGetUserPayload = PickUseCasePayload<GetPaginationDto, 'data'>;
@Injectable()
export class GetUser extends BaseUseCase implements IUseCase<GetPaginationDto> {
  constructor(
    @InjectUserRepository private readonly userRepository: UserRepositoryPort,
  ) {
    super();
  }
  async execute({ data }: TGetUserPayload) {
    const users = await this.userRepository.findByPaginateSorted(
      {},
      { skip: data.skip, limit: data.limit },
      { _id: 1 },
    );

    const usersMapped = users.map(
      ({ _id, ...user }) =>
        new UserResponseDTO({
          ...user,
          _id: TypeValidator.extractMongoId(_id),
        }),
    );

    return new ResponseDto({ status: HttpStatus.OK, data: usersMapped });
  }
}
