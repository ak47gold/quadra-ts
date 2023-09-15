export interface RootState {
    number: number | null;
  }
  
  export interface ReceiveNumberAction {
    type: 'RECEIVE_NUMBER';
    payload: number;
  }
  
  export type ActionTypes = ReceiveNumberAction;