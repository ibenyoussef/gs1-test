
import { CharacterActions, CharacterActionTypes } from '../actions/character.actions';
import { PaginedData, Character } from '../models/character.model';

export const characterFeatureKey = 'character';

export interface State {
  data: PaginedData<Character>;
  error?: any
}

export const initialState: State = {
  data: {
    results: []
  }
};

export function reducer(state = initialState, action: CharacterActions): State {
  switch (action.type) {

    case CharacterActionTypes.LoadCharactersSuccess:
      return { ...state, data: action.payload };

    case CharacterActionTypes.LoadCharactersFailure:
      return {
        ...state,
        data: {
          results: []
        },
        error: action.payload.error
      };

    default:
      return state;
  }
}
