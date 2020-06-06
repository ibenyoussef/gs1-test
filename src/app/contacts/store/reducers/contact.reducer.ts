
import { ContactActions, ContactActionTypes } from '../actions/contact.actions';
import { Contact } from '../models/contact.model';

export const contactFeatureKey = 'contact';

export interface State {
  contacts: Contact[];

}

export const initialState: State = {
  contacts: []
};

export function reducer(state = initialState, action: ContactActions): State {
  switch (action.type) {

    // case ContactActionTypes.LoadContacts:
    //   return {
    //     ...state,
    //     contacts: action.payload.contacts
    //   };

    case ContactActionTypes.AddContact:
      console.log("add", action.payload.contact);
      return { ...state, contacts: [...state.contacts, action.payload.contact] };

    default:
      return state;
  }
}
