import { Injectable } from '@nestjs/common';
import { CalculateReqDto } from './dto/calculate-req.dto';
import { CalculateResDto } from './dto/calculate-res.dto';
import { PourReqDto } from './dto/pour-req.dto';
import { PourResDto } from './dto/pour-res.dto';
import { IQueue } from './water-bucket.interface';

@Injectable()
export class WaterBucketService {
  private states: string[] = [];

  private Queue: IQueue[] = [
    { x: 0, y: 0, dir: 2 },
    { x: 0, y: 0, dir: 3 },
  ];

  private result: CalculateResDto;

  calculate({ x: X, y: Y, z: Z }: CalculateReqDto): CalculateResDto {
    do {
      const firstElement: IQueue = JSON.parse(
        JSON.stringify(this.Queue.splice(0, 1)),
      )[0];
      const newState = this.pour({
        ...firstElement,
        X,
        Y,
        Z,
      });

      if (newState === true) {
        break;
      }

      if (newState) {
        const { x, y } = newState;

        const newStringifiedState = JSON.stringify({ x, y });

        const isSameState = this.states.some(
          (state) => state === newStringifiedState,
        );

        if (isSameState) {
          continue;
        } else {
          this.states.push(newStringifiedState);
        }
        for (let i = 0; i <= 5; i++) {
          this.Queue.push({ ...newState, dir: i });
        }
      }
    } while (this.Queue.length);

    return this.result;
  }

  private pour({
    x,
    y,
    dir = 0,
    trace = [],
    X,
    Y,
    Z,
  }: PourReqDto): PourResDto | boolean {
    let traceElement = '';
    switch (dir) {
      case 0:
        if (y < Y && x > 0) {
          y = y + x;
          if (y > Y) {
            const reminder = y - Y;
            y = Y;
            x = reminder;
          } else {
            x = 0;
          }
        } else return false;
        traceElement = ' Transfer X to Y;';
        break;

      case 1:
        if (x < X && y > 0) {
          x = y + x;
          if (x > X) {
            const reminder = x - X;
            x = X;
            y = reminder;
          } else {
            y = 0;
          }
        } else return false;
        traceElement = ' Transfer Y to X;';
        break;
      case 2:
        if (x == X) return false;
        x = X;
        traceElement = ' Fill X;';
        break;
      case 3:
        if (y == Y) return false;
        y = Y;
        traceElement = ' Fill Y;';
        break;
      case 4:
        if (x == 0) return false;
        x = 0;
        traceElement = ' Empty X;';
        break;
      case 5:
        if (y == 0) return false;
        y = 0;
        traceElement = ' Empty Y;';
        break;
    }

    trace.push('X: ' + x + ', Y: ' + y + traceElement);

    if (x == Z || y == Z) {
      this.result = { bucket: x == Z ? 'X' : 'Y', trace };
      return true;
    } else {
      return { x, y, dir, trace };
    }
  }
}
