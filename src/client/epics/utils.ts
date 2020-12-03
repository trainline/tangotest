import { Observable } from 'rxjs';

/**
 * A util to convert global fetch promises into observables.
 */
export const fetch$ = <T>(path: string) =>
  new Observable<T>(observer => {
    fetch(path)
      .then(res => res.json())
      .then(body => {
        observer.next(body);
        observer.complete();
      })
      .catch(err => observer.error(err));
  });
