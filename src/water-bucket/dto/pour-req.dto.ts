import { Type } from 'class-transformer';
import { IsNumber, IsDefined, IsArray } from 'class-validator';

export class PourReqDto {
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
  dir: number;

  @IsDefined()
  @IsArray()
  trace?: string[];

  @IsNumber()
  @IsDefined()
  @Type(() => Number)
  X: number;

  @IsNumber()
  @IsDefined()
  @Type(() => Number)
  Y: number;

  @IsNumber()
  @IsDefined()
  @Type(() => Number)
  Z: number;
}
