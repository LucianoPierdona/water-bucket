import { Type } from 'class-transformer';
import { IsDefined, IsNumber } from 'class-validator';

export class CalculateReqDto {
  @IsNumber()
  @IsDefined()
  @Type(() => Number)
  x: number;

  @IsNumber()
  @IsDefined()
  @Type(() => Number)
  y: number;

  @IsNumber()
  @IsDefined()
  @Type(() => Number)
  z: number;
}
