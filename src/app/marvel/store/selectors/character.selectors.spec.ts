import * as fromCharacter from '../reducers/character.reducer';
import { selectCharacterState } from './character.selectors';

describe('Character Selectors', () => {
  it('should select the feature state', () => {
    const result = selectCharacterState({
      [fromCharacter.characterFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
