import { Reducer, Action, ActionCreator } from 'redux';

import { Station } from '../../../shared/interfaces';
import { ActionWithPayload, ActionWithPayloadCreator } from './interfaces';

export const FETCH_STATIONS = '@STATIONS/FETCH';
export const ADD_STATIONS = '@STATIONS/ADD';

export const loadStations: ActionCreator<Action<string>> = () => ({
  type: FETCH_STATIONS
});
export const addStations: ActionWithPayloadCreator<Station[]> = (payload: Station[]) => ({
  type: ADD_STATIONS,
  payload
});

const reducer: Reducer<Station[], ActionWithPayload<Station[]>> = (state = [], action) => {
  switch (action.type) {
    case ADD_STATIONS:
      return action.payload;
    default:
      return state
  }
};

export default reducer;