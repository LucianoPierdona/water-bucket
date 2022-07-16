import {
  Controller,
  Get,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CalculateReqDto } from './dto/calculate-req.dto';
import { CalculateResDto } from './dto/calculate-res.dto';
import { WaterBucketService } from './water-bucket.service';

@Controller('water-bucket')
@UsePipes(new ValidationPipe({ transform: true }))
export class WaterBucketController {
  constructor(private waterBucketService: WaterBucketService) {}

  @Get()
  calculate(@Query() query: CalculateReqDto): CalculateResDto {
    return this.waterBucketService.calculate(query);
  }
}
