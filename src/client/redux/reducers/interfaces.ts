import { Action } from 'redux';

export interface ActionWithPayload<T = {}> extends Action<string> {
  payload: T
}

export interface ActionWithPayloadCreator<T> {
  (payload: T): ActionWithPayload<T>
}
