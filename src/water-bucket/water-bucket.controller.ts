import {
  Controller,
  Get,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CalculateReqDto } from './dto/calculate-req.dto';

@Controller('water-bucket')
@UsePipes(new ValidationPipe({ transform: true }))
export class WaterBucketController {
  @Get()
  calculate(@Query() query: CalculateReqDto) {
    return query;
  }
}
