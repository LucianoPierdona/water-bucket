import { IsArray, IsDefined, IsNotEmpty, IsString } from 'class-validator';

export class CalculateResDto {
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  bucket: string;

  @IsDefined()
  @IsArray()
  trace: string[];
}
