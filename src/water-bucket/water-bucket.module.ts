import { Module } from '@nestjs/common';
import { WaterBucketController } from './water-bucket.controller';

@Module({
  imports: [],
  controllers: [WaterBucketController],
  providers: [],
})
export class WaterBucketModule {}
