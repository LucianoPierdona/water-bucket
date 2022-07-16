import { Module } from '@nestjs/common';
import { WaterBucketModule } from './water-bucket/water-bucket.module';

@Module({
  imports: [WaterBucketModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
