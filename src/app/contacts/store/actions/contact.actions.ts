import { Action } from '@ngrx/store';
import { Contact } from '../models/contact.model';

export enum ContactActionTypes {
  // LoadContacts = '[Contact] Load Contacts',
  AddContact = '[Contact] Add Contact',
}

// export class LoadContacts implements Action {
//   readonly type = ContactActionTypes.LoadContacts;
//   constructor(public payload: { contacts: Contact[] }) { }
// }


export class AddContact implements Action {
  readonly type = ContactActionTypes.AddContact;
  constructor(public payload: { contact: Contact }) { }
}

export type ContactActions = AddContact;

