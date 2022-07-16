import { Module } from '@nestjs/common';
import { WaterBucketController } from './water-bucket.controller';
import { WaterBucketService } from './water-bucket.service';

@Module({
  imports: [],
  controllers: [WaterBucketController],
  providers: [WaterBucketService],
  exports: [WaterBucketService],
})
export class WaterBucketModule {}
