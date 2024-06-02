import { HttpStatus, Injectable } from '@nestjs/common';
import { GetPaginationDto } from 'src/core/base/http/get-pagination.dto.base';
import { ResponseDto } from 'src/core/base/http/response.dto.base';
import { BaseUseCase, IUseCase } from 'src/core/base/module/use-case.base';
import { PickUseCasePayload } from 'src/core/base/types/pick-use-case-payload.type';
import { UserRepositoryPort } from 'src/port/repository/user.repository.port';
import { InjectUserRepository } from '../repository/user.repository.provider';
import { UserMapper } from '../domain/user.mapper';
import { UserResponseDto } from '../controller/dtos/user.response.dto';

export type TGetUserPayload = PickUseCasePayload<GetPaginationDto, 'data'>;
@Injectable()
export class GetUser extends BaseUseCase implements IUseCase<TGetUserPayload> {
  constructor(
    @InjectUserRepository private readonly userRepository: UserRepositoryPort,
  ) {
    super();
  }
  async execute({ data }: TGetUserPayload) {
    const users = await this.userRepository.findByPaginateSorted(
      { level: { $ne: 'SU' } },
      { skip: Number(data.skip), limit: Number(data.limit) },
      data.sort_by || { _id: 1 },
    );

    const usersMapped = users.map(
      (user) => new UserResponseDto(UserMapper.toPlainObject(user)),
    );

    return new ResponseDto({ status: HttpStatus.OK, data: usersMapped });
  }
}
