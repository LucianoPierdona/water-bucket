import { IsArray, IsDefined, IsNumber } from 'class-validator';

export class PourResDto {
  @IsNumber()
  @IsDefined()
  x: number;

  @IsNumber()
  @IsDefined()
  y: number;

  @IsNumber()
  @IsDefined()
  dir: number;

  @IsDefined()
  @IsArray()
  trace: string[];
}
