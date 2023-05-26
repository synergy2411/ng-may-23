import { Action } from '@ngrx/store';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD_COUNTER = 'ADD_COUNTER';
export const SUBTRACT_COUNTER = 'SUBTRACT_COUNTER';

export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

// Action Creators
export class AddCounter implements Action {
  type = ADD_COUNTER;
  constructor(public payload: number) {}
}

export class SubtractCounter implements Action {
  type = SUBTRACT_COUNTER;
  constructor(public payload: number) {}
}

export class StoreResult implements Action {
  type: string = STORE_RESULT;
  constructor(public payload: number) {}
}

export class DeleteResult implements Action {
  type: string = DELETE_RESULT;
  constructor(public payload: number) {}
}

export type ActionType = AddCounter | SubtractCounter | StoreResult;
