import { Action } from 'redux';
import { ActionsObservable } from 'redux-observable';
import { EMPTY } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

import { Station } from '../../shared/interfaces';
import { addStations, FETCH_STATIONS } from '../redux/reducers/stations';
import { fetch$ } from './utils';

/**
 * A simple Epic (See https://redux-observable.js.org/docs/basics/Epics) example, which:
 * - takes a @STATIONS/FETCH action
 * - as a side-effect, fetches the station data from the server
 * - and dispatches the addStations action in case of success
 * You can see this working in the browser using the Redux DevTools Dispatcher.
 */
const stationsEpic = (action$: ActionsObservable<Action>) =>
  action$.ofType(FETCH_STATIONS).pipe(
    switchMap(() =>
      fetch$<Station[]>('/stations').pipe(
        switchMap(stations => [
          addStations(stations)
        ]),
        catchError(() => EMPTY)  
      ),
    ),
  );

export default stationsEpic;