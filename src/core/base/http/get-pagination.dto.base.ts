import { SortOrder } from 'mongoose';
import { IsOptionalSortBy } from 'src/core/decorator/optional-sort-by.decorated';
import { IsStringNumber } from 'src/core/decorator/optional-string-number.decorator';
import { IsOptionalString } from 'src/core/decorator/optional-string.decorator';

export class GetPaginationDto {
  @IsStringNumber()
  skip: number;

  @IsStringNumber()
  limit: number;

  @IsOptionalSortBy()
  sort_by?: { [key: string]: SortOrder };

  @IsOptionalString()
  first: string;
}
