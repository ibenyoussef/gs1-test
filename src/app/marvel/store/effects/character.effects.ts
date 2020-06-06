import { Injectable, Inject } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, mergeMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
// tslint:disable-next-line: max-line-length
import { LoadCharactersFailure, LoadCharactersSuccess, CharacterActionTypes, CharacterActions, LoadCharacters } from '../actions/character.actions';
import { HttpClient } from '@angular/common/http';
import { MARVEL_API_BASE_URL, MARVEL_API_PUB_KEY, MARVEL_API_SEC_KEY } from 'src/app/app.module';




@Injectable()
export class CharacterEffects {
  apikey: string;
  hash: string;
  baseUrl: string;

  constructor(
    private actions$: Actions<CharacterActions>,
    private http: HttpClient,
    @Inject(MARVEL_API_BASE_URL) baseUrl?: string,
    @Inject(MARVEL_API_PUB_KEY) apikey?: string,
    @Inject(MARVEL_API_SEC_KEY) hash?: string) {

    this.baseUrl = baseUrl ? baseUrl : '';
    this.hash  = hash;
    this.apikey = apikey;
  }

  @Effect()
  loadCharacters$ = this.actions$.pipe(
    ofType(CharacterActionTypes.LoadCharacters),
    mergeMap((actions: LoadCharacters) => {
      // tslint:disable-next-line: max-line-length
      let url = `${this.baseUrl}/v1/public/characters?apikey=${this.apikey}&hash=${this.hash}&limit=${actions.payload.limit}&offset=${actions.payload.offset}`;
      return this.http.get(url).pipe(
        map((result: any) => new LoadCharactersSuccess(result.data)),
        catchError(error => of(new LoadCharactersFailure({ error }))));
    })

  );
}
