import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, mergeMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';




@Injectable()
export class ContactEffects {

  // @Effect()
  // loadContacts$ = this.actions$.pipe(
  //   ofType(ContactActionTypes.LoadContacts),
  //   concatMap((actions: LoadContacts) =>
  //     /** An EMPTY observable only emits completion. Replace with your own observable API request */
  //     EMPTY.pipe(
  //       map(data => new LoadContactsSuccess({ data })),
  //       catchError(error => of(new LoadContactsFailure({ error }))))
  //   )
  // );

  // loadCharacters$ = this.actions$.pipe(
  //   ofType(ContactActionTypes.LoadContacts),
  //   mergeMap((actions: LoadContacts) => {

  //     return this.http.get(url).pipe(
  //       map((result: any) => new LoadCharactersSuccess(result.data)),
  //       catchError(error => of(new LoadCharactersFailure({ error }))));
  //   })

  // );



  constructor(private actions$: Actions) {}

}
