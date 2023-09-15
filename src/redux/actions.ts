import { ReceiveNumberAction } from './types';

export const receiveNumber = (number: number): ReceiveNumberAction => ({
  type: 'RECEIVE_NUMBER',
  payload: number,
});