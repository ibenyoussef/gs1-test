import * as CharacterActions from './character.actions';

describe('Character', () => {
  it('should create an instance', () => {
    expect(new CharacterActions.LoadCharacters()).toBeTruthy();
  });
});
