import { Position } from '@shared/models/position';

export interface DataResponsePosition {
  succeeded: boolean;
  message: string;
  errors: string;
  data: Position;
}
