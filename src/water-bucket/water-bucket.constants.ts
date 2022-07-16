import { CalculateResDto } from './dto/calculate-res.dto';
import { IQueue } from './water-bucket.interface';

export const INITIAL_STATES: string[] = [];

export const INITIAL_QUEUE: IQueue[] = [
  { x: 0, y: 0, dir: 2 },
  { x: 0, y: 0, dir: 3 },
];

export const INITIAL_RESULT: CalculateResDto = undefined;
