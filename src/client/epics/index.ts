import { combineEpics } from 'redux-observable';

import stations from './stations';

export default combineEpics(
  stations
);