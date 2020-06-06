import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromContact from '../reducers/contact.reducer';

export const selectContactState = createFeatureSelector<fromContact.State>(
  fromContact.contactFeatureKey
);

export const getContacts = createSelector(
  selectContactState,
  (state: fromContact.State) => state.contacts
);


export const getNexContactId = createSelector(
  selectContactState,
  // tslint:disable-next-line: no-bitwise
  (state: fromContact.State) => (state.contacts[state.contacts.length - 1]?.id | 0) + 1
);
