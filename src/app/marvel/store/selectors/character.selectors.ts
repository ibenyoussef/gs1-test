import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCharacter from '../reducers/character.reducer';

export const selectCharacterState = createFeatureSelector<fromCharacter.State>(
  fromCharacter.characterFeatureKey
);



export const getCharacters = createSelector(
  selectCharacterState,
  (state: fromCharacter.State) => state.data.results
);


export const getCharacterTotal = createSelector(
  selectCharacterState,
  (state: fromCharacter.State) => state.data.total
);