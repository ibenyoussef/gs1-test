import { Action } from '@ngrx/store';
import { PaginedData, Character } from '../models/character.model';

export enum CharacterActionTypes {
  LoadCharacters = '[Character] Load Characters',
  LoadCharactersSuccess = '[Character] Load Characters Success',
  LoadCharactersFailure = '[Character] Load Characters Failure',
}

export class LoadCharacters implements Action {
  readonly type = CharacterActionTypes.LoadCharacters;
  constructor(public payload: { limit: number, offset: number }) { }
}

export class LoadCharactersSuccess implements Action {
  readonly type = CharacterActionTypes.LoadCharactersSuccess;
  constructor(public payload: PaginedData<Character> ) { }
}

export class LoadCharactersFailure implements Action {
  readonly type = CharacterActionTypes.LoadCharactersFailure;
  constructor(public payload: { error: any }) { }
}

export type CharacterActions = LoadCharacters | LoadCharactersSuccess | LoadCharactersFailure;

